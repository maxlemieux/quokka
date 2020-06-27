import axios from "axios";

export default {
    getPlantsByMinTemp: function(temp){
        return axios.get(`/api/trefle/temperature_minimum_deg_f/${temp}`)
    },
    getPlantsByName: function(name){
        return axios.get(`/api/trefle/name/${name}`);
    },
}
