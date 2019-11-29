import {
  SET_SECOND_HERO_STATS,
  SET_SECOND_HERO_INFO,
  SET_SECOND_HERO_IMAGE
} from "../actions/secondHeroActions";

const initialState = {
  secondHeroStats: {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0
  },
  secondHeroGeneralInfo: {
    fullName: "unknown",
    placeOfBirth: "unknown",
    alignment: "unknown",
    height: "unknown",
    weight: "unknown"
  },
  secondHeroImage: "heroPlaceHolder.jpg"
};

export const secondHeroReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SECOND_HERO_STATS:
      return {
        ...state,
        secondHeroStats: action.payload
      };
    case SET_SECOND_HERO_INFO:
      return {
        ...state,
        secondHeroGeneralInfo: action.payload
      };
    case SET_SECOND_HERO_IMAGE:
      return {
        ...state,
        secondHeroImage: action.payload
      };
    default:
      return state;
  }
};
