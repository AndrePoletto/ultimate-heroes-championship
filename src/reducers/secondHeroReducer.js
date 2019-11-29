import {
  SELECT_SECOND_HERO,
  SET_SECOND_HERO_STATS,
  SET_SECOND_HERO_INFO,
  SET_SECOND_HERO_IMAGE
} from "../actions/secondHeroActions";

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
    gender: "unknown",
    alignment: "unknown",
    height: "unknown",
    weight: "unknown"
  },
  heroImage: "heroPlaceHolder.jpg"
};

export const secondHeroReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SECOND_HERO:
      return {
        ...state,
        heroName: action.payload
      };
    case SET_SECOND_HERO_STATS:
      return {
        ...state,
        heroStats: action.payload
      };
    case SET_SECOND_HERO_INFO:
      return {
        ...state,
        heroGeneralInfo: action.payload
      };
    case SET_SECOND_HERO_IMAGE:
      return {
        ...state,
        heroImage: action.payload
      };
    default:
      return state;
  }
};
