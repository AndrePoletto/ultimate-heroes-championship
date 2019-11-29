import axios from "axios";

const httpRequests = {
  async _request(method, url, payload) {
    const config = {
      headers: {},
      method,
      url,
      data: payload
    };

    return axios(config);
  },
  async get(url) {
    return httpRequests._request("GET", url);
  }
};

export default httpRequests;
