import {
  SELECT_FIRST_HERO,
  SET_FIRST_HERO_STATS,
  SET_FIRST_HERO_INFO,
  SET_FIRST_HERO_IMAGE
} from "../actions/firstHeroActions";

const initialState = {
  heroName: "",
  heroStats: {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0
  },
  heroGeneralInfo: {
    fullName: "unknown",
    placeOfBirth: "unknown",
    alignment: "unknown",
    height: "unknown",
    weight: "unknown"
  },
  heroImage: "heroPlaceHolder.jpg"
};

export const firstHeroReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FIRST_HERO:
      return {
        ...state,
        heroName: action.payload
      };
    case SET_FIRST_HERO_STATS:
      return {
        ...state,
        heroStats: action.payload
      };
    case SET_FIRST_HERO_INFO:
      return {
        ...state,
        heroGeneralInfo: action.payload
      };
    case SET_FIRST_HERO_IMAGE:
      return {
        ...state,
        heroImage: action.payload
      };
    default:
      return state;
  }
};
