export const SET_SECOND_HERO_STATS = "SET_SECOND_HERO_STATS";
export const SET_SECOND_HERO_INFO = "SET_SECOND_HERO_INFO";
export const SET_SECOND_HERO_IMAGE = "SET_SECOND_HERO_IMAGE";

export function setSecondHeroStats(stats) {
    return {
        type: SET_SECOND_HERO_STATS,
        payload: stats
    };
}

export function setSecondHeroInfo(info) {
    return {
        type: SET_SECOND_HERO_INFO,
        payload: info
    };
}

export function setSecondHeroImage(image) {
    return {
        type: SET_SECOND_HERO_IMAGE,
        payload: image
    };
}
