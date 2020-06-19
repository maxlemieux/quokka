import axios from "axios";

export default {
    getPlantsByMinTemp: function(temp){
        return axios.get(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants/?temperature_minimum_deg_f<${temp}&token=${process.env.REACT_APP_TREFLE}`)
    },
    getPlantsByImage: function(){
        const headers="Access-Control-Allow-Origin:*";
        return axios.get(`https://trefle.io/api/species/984782?token=${process.env.REACT_APP_TREFLE}`, {
            method: 'GET',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          })

        // return axios.get(`https://trefle.io/api/species/${id}?token=${process.env.REACT_APP_TREFLE}`,{crossDomain:true , headers: {
        //     'Access-Control-Allow-Origin': '*'}})
    },
    getPlantsByCommonName: function(commonName){
        // return axios.get(`https://trefle.io/api/species?token=${process.env.REACT_APP_TREFLE}?common_name=${commonName}`);
        return axios.get(`/api/plants/species/milkweed`);
    },
}
