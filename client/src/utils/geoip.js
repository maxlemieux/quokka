import axios from 'axios';

export default {
  getZipCodeByIp(ip) {
    return axios.get(`/api/geoip/${ip}`);
  },
};
