import {
  SET_FIRST_HERO_STATS,
  SET_FIRST_HERO_INFO,
  SET_FIRST_HERO_IMAGE
} from "../actions/firstHeroActions";

const initialState = {
  firstHeroStats: {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0
  },
  firstHeroGeneralInfo: {
    fullName: "unknown",
    placeOfBirth: "unknown",
    alignment: "unknown",
    height: "unknown",
    weight: "unknown"
  },
  firstHeroImage: "heroPlaceHolder.jpg"
};

export const firstHeroReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_HERO_STATS:
      return {
        ...state,
        firstHeroStats: action.payload
      };
    case SET_FIRST_HERO_INFO:
      return {
        ...state,
        firstHeroGeneralInfo: action.payload
      };
    case SET_FIRST_HERO_IMAGE:
      return {
        ...state,
        firstHeroImage: action.payload
      };
    default:
      return state;
  }
};
