import axios from 'axios';

export default {
  // Gets all plants
  getPlants() {
    return axios.get('/api/plants');
  },
  // Gets all favorites
  getFavorites() {
    return axios.get('/api/favorites');
  },
  // Gets the plant with the given id
  getPlant(id) {
    return axios.get(`/api/plants/${id}`);
  },
  // Deletes the plant with the given id
  deletePlant(id) {
    return axios.delete(`/api/plants/${id}`);
  },
  // Saves a plant to the database
  savePlant(plantData) {
    return axios.post('/api/plants', plantData);
  },
  // Searches Trefle through our back end
  searchPlantName(searchName) {
    return axios.get(`/api/plants/species/${searchName}`);
  },
  // Find recent plants saved to the db
  findRecent() {
    return axios.get('/api/plants/recent');
  },
  // Get details on a specific plant
  plantDetails(plantId) {
    return axios.get(`/api/trefle/species/${plantId}`);
  },
};
