import axios from "axios";

export default axios.create({
  baseURL: 'https://investfolio-server.herokuapp.com/api',
});