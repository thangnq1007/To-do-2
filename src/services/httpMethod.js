import axios from "axios";

class HttpMethod {
  constructor() {
    this.axios = axios;
  }

  get(...arg) {
    return this.axios.get(...arg);
  }
}

export default new HttpMethod();