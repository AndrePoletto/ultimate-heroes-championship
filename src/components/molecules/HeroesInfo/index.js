import React from "react";
import { makeStyles } from "@material-ui/core";
import InfoLine from "../../atoms/InfoLine";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "0",
    backgroundColor: "rgb(51, 51, 51)",
    padding: "1.25rem"
  }
}));

export default function HeroesCard(props) {
  const order = props.order;
  const firstHeroGeneralInfo = useSelector(
    state => state.firstHero.heroGeneralInfo
  );
  const secondHeroGeneralInfo = useSelector(
    state => state.secondHero.heroGeneralInfo
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InfoLine
        keyName={"Full Name"}
        statValeu={
          order === 0
            ? firstHeroGeneralInfo.fullName
            : secondHeroGeneralInfo.secondHeroFullName
        }
      />
      <InfoLine
        keyName={"Alignment"}
        statValeu={
          order === 0
            ? firstHeroGeneralInfo.alignment
            : secondHeroGeneralInfo.secondHeroAlignment
        }
      />
      <InfoLine
        keyName={"Height"}
        statValeu={
          order === 0
            ? firstHeroGeneralInfo.height
            : secondHeroGeneralInfo.secondHeroHeight
        }
      />
      <InfoLine
        keyName={"Weight"}
        statValeu={
          order === 0
            ? firstHeroGeneralInfo.weight
            : secondHeroGeneralInfo.secondHeroWeight
        }
      />
      <InfoLine
        keyName={"Gender"}
        statValeu={
          order === 0
            ? firstHeroGeneralInfo.gender
            : secondHeroGeneralInfo.secondHeroGender
        }
      />
    </div>
  );
}
