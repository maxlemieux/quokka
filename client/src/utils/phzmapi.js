import axios from "axios";

export default {
    getTemperatureByZipcode: function(zipcode){
        return axios.get(`/api/phzmapi/${zipcode}`);
    },
}
