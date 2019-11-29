import React from "react";
import HeroesInfo from "../../molecules/HeroesInfo";
import { makeStyles } from "@material-ui/core";
import HeroesThumbnail from "../../molecules/HeroesThumbnail";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    margin: "2rem",
    maxWidth: "25%",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    borderRadius: "0.625rem",
    overflow: "hidden"
  },
  wrapper: {
    position: "relative"
  },
  thumbnailWrapper: {
    marginBottom: "-5px",
    maxWidth: "100%"
  },
  thumbnail: {
    maxWidth: "100%"
  },
  heroNameWrapper: {
    width: "100%",
    opacity: "0.8",
    position: "absolute",
    bottom: "4px",
    background: "rgb(32, 35, 41)",
    padding: "0.625rem"
  },
  heroNameText: {
    color: "rgb(245, 245, 245)",
    fontSize: "1.625rem",
    fontWeight: "400",
    fontStretch: "expanded",
    margin: "0px"
  }
}));

export default function HeroesCard(props) {
  const order = props.heroOrder;
  const firstHeroName = useSelector(state => state.firstHero.heroName);
  const secondHeroName = useSelector(state => state.secondHero.heroName);
  const firstHeroImage = useSelector(state => state.firstHero.heroImage.url);
  const secondHeroImage = useSelector(state => state.secondHero.heroImage.url);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeroesThumbnail
        imageSource={order === 0 ? firstHeroImage : secondHeroImage}
        name={order === 0 ? firstHeroName : secondHeroName}
      />
      <HeroesInfo order={order} />
    </div>
  );
}
