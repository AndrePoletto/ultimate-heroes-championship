import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
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

export default function HeroesThumbnail(props) {
  const classes = useStyles();
  const imageSource = props.imageSource;
  const name = !!props.name ? props.name : "Unknown";

  return (
    <div className={classes.root}>
      <div className={classes.thumbnailWrapper}>
        <img
          className={classes.thumbnail}
          src={imageSource}
          alt={"Hero thumbnail"}
        />
        <div className={classes.heroNameWrapper}>
          <h3 className={classes.heroNameText}>{name}</h3>
        </div>
      </div>
    </div>
  );
}
