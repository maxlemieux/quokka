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
  // Gets the favorite with the given plantId
  getFavorite(plantId) {
    return axios.get(`/api/favorites/${plantId}`);
  },
  // Find recent favorites saved to the db
  findRecentFavorites() {
    // return axios.get('/api/plants/recent');
    return axios.get('/api/favorites/recent');
  },
  // Saves a plant to the database
  saveFavorite(favoriteData) {
    return axios.post('/api/favorites', favoriteData);
  },
  // Get details on a specific plant
  plantDetails(plantId) {
    return axios.get(`/api/trefle/species/${plantId}`);
  },
};
