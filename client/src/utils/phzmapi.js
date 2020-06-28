import axios from 'axios';

export default {
  getTemperatureByZipcode(zipcode) {
    return axios.get(`/api/phzmapi/${zipcode}`);
  },
};
