import httpRequests from "../httpRequests/index";
import urlJoin from "url-join";

const heroes = {
  async getHeroByName(name) {
    const API_URL = "https://www.superheroapi.com/api.php/2845565222121216";
    const url = urlJoin(API_URL, "search", name);

    return await httpRequests.get(url);
  }
};

export default heroes;
