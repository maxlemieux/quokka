import axios from "axios";

export default {
    getPlantsByMinTemp: function(temp){
        return axios.get(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants/?temperature_minimum_deg_f<${temp}&token=${process.env.REACT_APP_TREFLE}`)
    },
    getPlantsByImage: function(){
        return axios.get(`/api/trefle/species/984782`)
    },
    getPlantsByCommonName: function(commonName){
        // return axios.get(`https://trefle.io/api/species?token=${process.env.REACT_APP_TREFLE}?common_name=${commonName}`);
        return axios.get(`/api/plants/species/${commonName}`);
    },
}
