const axios = require("axios")

const searchPlantName = function(searchName) {
  return axios.get(`/api/plants/species/${searchName}`);
}
console.log(searchPlantName('milkweed'));