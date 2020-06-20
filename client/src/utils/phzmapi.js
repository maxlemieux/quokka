import axios from "axios";

export default {
    getTempByZipcode: function(zipcode){
        return axios.get(`/api/phzmapi/${zipcode}`);
    },
}
