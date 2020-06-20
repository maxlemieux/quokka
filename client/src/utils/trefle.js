import axios from "axios";

export default {
    getPlantsByMinTemp: function(temp){
        console.log(`searching internal API with ${temp}`);
        // return axios.get(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants/?temperature_minimum_deg_f<${temp}&token=${process.env.REACT_APP_TREFLE}`)
        return axios.get(`/api/trefle/temperature_minimum_deg_f/${temp}`)
    },
    getPlantsByImage: function(){
        return axios.get(`/api/trefle/species/984782`)
    },
    getPlantsByName: function(name){
        return axios.get(`/api/trefle/name/${name}`);
    },
}
