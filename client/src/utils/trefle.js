import axios from 'axios';

export default {
  getPlantsByMinTemp(temp) {
    return axios.get(`/api/trefle/temperature_minimum_deg_f/${temp}`);
  },
  getPlantsByName(name) {
    return axios.get(`/api/trefle/name/${name}`);
  },
  getPlantsByDistribution(zoneId) {
    return axios.get(`/api/trefle/distributions/${zoneId}`);
  },
};
