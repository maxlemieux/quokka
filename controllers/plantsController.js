const axios = require("axios");

const db = require("../models");

// // Defining methods for the plantsController
module.exports = {
    getPlantsByImage: function(req,res){
        const headers="Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, PARAM_HEADER";
        return axios.get(`https://trefle.io/api/species/984782?token=${process.env.REACT_APP_TREFLE}, header: {${headers}}`)

        // return axios.get(`https://trefle.io/api/species/${id}?token=${process.env.REACT_APP_TREFLE}`,{crossDomain:true , headers: {
        //     'Access-Control-Allow-Origin': '*'}})
    },
    getPlantsByName: function(req,res){
      console.log(process.env.REACT_APP_TREFLE)
      return axios.get(`https://trefle.io/api/species?token=${process.env.REACT_APP_TREFLE}&q=${req.params.name}`);
    },
};
