export const SELECT_FIRST_HERO = "SELECT_FIRST_HERO";
export const SET_FIRST_HERO_STATS = "SET_FIRST_HERO_STATS";
export const SET_FIRST_HERO_INFO = "SET_FIRST_HERO_INFO";
export const SET_FIRST_HERO_IMAGE = "SET_FIRST_HERO_IMAGE";

export function selectFirstHero(name) {
  return {
    type: SELECT_FIRST_HERO,
    payload: name
  };
}

export function setFirstHeroStats(stats) {
  return {
    type: SET_FIRST_HERO_STATS,
    payload: stats
  };
}

export function setFirstHeroInfo(info) {
  return {
    type: SET_FIRST_HERO_INFO,
    payload: info
  };
}

export function setFirstHeroImage(image) {
  return {
    type: SET_FIRST_HERO_IMAGE,
    payload: image
  };
}
