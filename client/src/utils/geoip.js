
/* This all works but totally breaks when imported into Plants.js - not sure why */
// const Reader = require('@maxmind/geoip2-node').Reader;
// const fs = require('fs');

// const dbBuffer = fs.readFileSync('../../../geoip/GeoLite2-City.mmdb');
// const reader = Reader.openBuffer(dbBuffer);
// async function getPostalCode (userIp) {
//   await Reader.open('../../../geoip/GeoLite2-City.mmdb').then(reader => {
//     console.log(reader.city(userIp).postal.code)
//   });
// }

// exports = {
//   getPostalCode
// };

/* THis works but doesn't have zipcode data */
// var geoip = require('geoip-lite');

// const getPostalCode = (userIP) => {
//   const geo = geoip.lookup(userIP);
//   console.log(geo);
// }

// getPostalCode('73.180.53.30')

const maxmind = require('maxmind');

const getPostalCode = (userIp) => {
  maxmind.open('../../../geoip/GeoLite2-City.mmdb').then((lookup) => {
    console.log(lookup.get(userIp).postal.code);
  })
};

// getPostalCode('73.180.53.30');

export default getPostalCode;