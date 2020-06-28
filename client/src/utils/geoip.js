const Reader = require('@maxmind/geoip2-node').Reader;

Reader.open('../../../geoip/GeoLite2-City.mmdb').then(reader => {
  console.log(reader.city('1.1.1.1'))
});

// exports = {
//   getPostalCode
// };
