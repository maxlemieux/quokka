const maxmind = require('maxmind');
const geoip_db = '../../../geoip/GeoLite2-City.mmdb';

const getPostalCode = (postalCode) => {
  maxmind.open(geoip_db).then((lookup) => {
    /* 73.180.53.30 */
    console.log(lookup.get(postalCode).postal.code);
  });
};

export default getPostalCode;