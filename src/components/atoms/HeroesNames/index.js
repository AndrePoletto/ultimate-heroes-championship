import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  heroesNames: {
    fontWeight: "bolder"
  }
}));

export default function HeroesNames() {
  const firstHeroName = useSelector(state => state.firstHero.heroName);
  const secondHeroName = useSelector(state => state.secondHero.heroName);

  const classes = useStyles();

  return (
    <div>
      <p>
        Are you sure you want to compare
        <span className={classes.heroesNames}>{" " + firstHeroName + " "}</span>
        with
        <span className={classes.heroesNames}>
          {" " + secondHeroName + " "}
        </span>
        ?
      </p>
    </div>
  );
}
