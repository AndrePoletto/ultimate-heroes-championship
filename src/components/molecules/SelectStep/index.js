import React from "react";
import { store } from "../../../store";
import { useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import { selectFirstHero } from "../../../actions/firstHeroActions";
import { selectSecondHero } from "../../../actions/secondHeroActions";

export default function SelectStep(props) {
  const firstHeroName = useSelector(state => state.firstHero.heroName);
  const secondHeroName = useSelector(state => state.secondHero.heroName);
  const explanation =
    props.order === 1
      ? "Select the first one of two heroes by typing his name"
      : "Now chose the second one, following the same principle";
  const id = (props.order === 1 ? "first" : "second") + "-hero-input";

  const handleChange =
    props.order === 1
      ? event => {
          store.dispatch(selectFirstHero(event.target.value));
        }
      : event => {
          store.dispatch(selectSecondHero(event.target.value));
        };

  return (
    <div>
      <p>{explanation}</p>
      <TextField
        id={id}
        label="Hero's name"
        variant="outlined"
        color="secondary"
        value={props.order === 1 ? firstHeroName : secondHeroName}
        onChange={handleChange}
      />
    </div>
  );
}
