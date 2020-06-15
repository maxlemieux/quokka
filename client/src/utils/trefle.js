import axios from "axios";

export default {
    getPlantsByMinTemp: function(temp){
        return axios.get(`https://trefle.io/api/plants/?temperature_minimum_deg_f<${temp}&token=${process.env.REACT_APP_TREFLE}`)
    },
    getPlantsImage: function(id){
        const headers="Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, PARAM_HEADER";
        return axios.get(`https://trefle.io/api/species/${id}?token=${process.env.REACT_APP_TREFLE}`,{crossDomain:true , headers: {
            'Access-Control-Allow-Origin': '*'}})
    }
}