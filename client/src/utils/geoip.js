const maxmind = require('maxmind');

const geoipDb = '../../../geoip/GeoLite2-City.mmdb';

async function getPostalCode(ipAddress) {
  await maxmind.open(geoipDb).then((lookup) => lookup.get(ipAddress).postal.code);
}

export default getPostalCode;
