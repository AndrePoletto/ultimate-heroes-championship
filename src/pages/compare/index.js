import React, { useEffect } from "react";
import HeroesCard from "../../components/organisms/HeroesCard";
import heroes from "../../providers/heroes/index";
import { makeStyles } from "@material-ui/core/styles";
import { store } from "../../store";
import {
  setFirstHeroImage,
  setFirstHeroInfo,
  setFirstHeroStats
} from "../../actions/firstHeroActions";
import { useSelector } from "react-redux";
import {
  setSecondHeroImage,
  setSecondHeroInfo,
  setSecondHeroStats
} from "../../actions/secondHeroActions";
import { Radar } from "react-chartjs-2";
import stringSimilarity from "string-similarity";
import { withRouter, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between"
  },
  chartWrapper: {
    //overflow: "hidden"
    textAlign: "center"
  },
  chart: {
    width: "100%"
  },
  button: {
  marginTop: "5rem"
  }
}));

async function compareStrings(payload, searchTerm) {
  const targetStrings = [];
  for (let i = 0; i < payload.data.results.length; i++) {
    console.log(i);
    targetStrings.push(payload.data.results[i].name);
  }
  let matches = stringSimilarity.findBestMatch(searchTerm, targetStrings);
  return matches.bestMatchIndex;
}

async function getHeroesInfo() {
  const state = store.getState();

  //Gets first hero info
  const heroInfo = await heroes.getHeroByName(state.firstHero.heroName);
  if (heroInfo.data.response !== "success") {
    return false;
  }
  const firstHeroBestMatch = await compareStrings(
    heroInfo,
    state.firstHero.heroName
  );
  //TODO:compare the closest name
  const intelligence =
    heroInfo.data.results[firstHeroBestMatch].powerstats["intelligence"];
  const strength =
    heroInfo.data.results[firstHeroBestMatch].powerstats["strength"];
  const speed = heroInfo.data.results[firstHeroBestMatch].powerstats["speed"];
  const durability =
    heroInfo.data.results[firstHeroBestMatch].powerstats["durability"];
  const power = heroInfo.data.results[firstHeroBestMatch].powerstats["power"];
  const combat = heroInfo.data.results[firstHeroBestMatch].powerstats["combat"];

  const fullName =
    heroInfo.data.results[firstHeroBestMatch].biography["full-name"];
  const alignment =
    heroInfo.data.results[firstHeroBestMatch].biography["alignment"];

  const height =
    heroInfo.data.results[firstHeroBestMatch].appearance["height"][1];
  const weight =
    heroInfo.data.results[firstHeroBestMatch].appearance["weight"][1];
  const gender = heroInfo.data.results[firstHeroBestMatch].appearance["gender"];

  const heroGeneralInfo = { fullName, gender, alignment, height, weight };
  const heroStats = {
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat
  };
  const heroImage = heroInfo.data.results[firstHeroBestMatch].image;

  store.dispatch(setFirstHeroInfo(heroGeneralInfo));
  store.dispatch(setFirstHeroStats(heroStats));
  store.dispatch(setFirstHeroImage(heroImage));

  //Gets second hero info
  const secondHeroInfo = await heroes.getHeroByName(state.secondHero.heroName);
  if (secondHeroInfo.data.response !== "success") {
    return false;
  }
  const secondHeroBestMatch = await compareStrings(
    secondHeroInfo,
    state.secondHero.heroName
  );

  const secondHeroIntelligence =
    secondHeroInfo.data.results[secondHeroBestMatch].powerstats["intelligence"];
  const secondHeroStrength =
    secondHeroInfo.data.results[secondHeroBestMatch].powerstats["strength"];
  const secondHeroSpeed =
    secondHeroInfo.data.results[secondHeroBestMatch].powerstats["speed"];
  const secondHeroDurability =
    secondHeroInfo.data.results[secondHeroBestMatch].powerstats["durability"];
  const secondHeroPower =
    secondHeroInfo.data.results[secondHeroBestMatch].powerstats["power"];
  const secondHeroCombat =
    secondHeroInfo.data.results[secondHeroBestMatch].powerstats["combat"];

  const secondHeroFullName =
    secondHeroInfo.data.results[secondHeroBestMatch].biography["full-name"];
  const secondHeroAlignment =
    secondHeroInfo.data.results[secondHeroBestMatch].biography["alignment"];

  const secondHeroHeight =
    secondHeroInfo.data.results[secondHeroBestMatch].appearance["height"][1];
  const secondHeroWeight =
    secondHeroInfo.data.results[secondHeroBestMatch].appearance["weight"][1];
  const secondHeroGender =
    secondHeroInfo.data.results[secondHeroBestMatch].appearance["gender"];

  const secondHeroGeneralInfo = {
    secondHeroFullName,
    secondHeroGender,
    secondHeroAlignment,
    secondHeroHeight,
    secondHeroWeight
  };
  const secondHeroStats = {
    secondHeroIntelligence,
    secondHeroStrength,
    secondHeroSpeed,
    secondHeroDurability,
    secondHeroPower,
    secondHeroCombat
  };
  const secondHeroImage =
    secondHeroInfo.data.results[secondHeroBestMatch].image;

  store.dispatch(setSecondHeroInfo(secondHeroGeneralInfo));
  store.dispatch(setSecondHeroStats(secondHeroStats));
  store.dispatch(setSecondHeroImage(secondHeroImage));
  return true;
}

function Index(props) {
  const firstHeroName = useSelector(state => state.firstHero.heroName);
  const secondHeroName = useSelector(state => state.secondHero.heroName);
  const firstHeroStats = useSelector(state => state.firstHero.heroStats);
  const secondHeroStats = useSelector(state => state.secondHero.heroStats);
  const classes = useStyles();

  const firstSet = [
    firstHeroStats.intelligence,
    firstHeroStats.strength,
    firstHeroStats.speed,
    firstHeroStats.durability,
    firstHeroStats.power,
    firstHeroStats.combat
  ];

  const secondSet = [
    secondHeroStats.secondHeroIntelligence,
    secondHeroStats.secondHeroStrength,
    secondHeroStats.secondHeroSpeed,
    secondHeroStats.secondHeroDurability,
    secondHeroStats.secondHeroPower,
    secondHeroStats.secondHeroCombat
  ];

  const data = {
    labels: [
      "Intelligence",
      "Strength",
      "Speed",
      "Durability",
      "Power",
      "Combat"
    ],
    datasets: [
      {
        label: firstHeroName,
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: firstSet
      },
      {
        label: secondHeroName,
        backgroundColor: "rgba(255,183,28,0.2)",
        borderColor: "rgb(255,180,59)",
        pointBackgroundColor: "rgb(255,157,64)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255,204,111)",
        data: secondSet
      }
    ]
  };

  useEffect(() => {
    if (!!firstHeroName && !!secondHeroName) {
      getHeroesInfo().then((res) => {
        if (!res) {
          props.history.push("/error");
        }
      });
    }
  }, []);

  return (
    <div className={classes.root}>
      {!!firstHeroName && !!secondHeroName ? (
        <>
          <HeroesCard heroOrder={0} />
          <div className={classes.chartWrapper}>
            <Radar
              className={classes.chart}
              data={data}
              width={window.innerWidth / 2.8}
              height={window.innerWidth / 4}
              options={{ maintainAspectRatio: true }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => props.history.push("/")}
                component={Link}
                className={classes.button}
            >
              Change Heroes
            </Button>
          </div>
          <HeroesCard heroOrder={1} />
        </>
      ) : (
        <Redirect to="/" push />
      )}
    </div>
  );
}

export default withRouter(Index);
