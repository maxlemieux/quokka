import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { getPostalCode } from "../utils/geoip";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { Favorites } from "../components/Favorites";
import { SearchResults } from "../components/SearchResults";

import Trefle from "../utils/trefle"
import phzmapi from "../utils/phzmapi"

function Plants(props) {
  const [plants, setPlants] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchResults, setSearchResults] = useState([]);
  const [searchPlants, setSearchPlants] = useState([]);

  useEffect(() => {
    loadPlants()
  }, []);

  useEffect(() => {
    loadFavorites()
  }, []);

  /* Run the automatic plant suggestion code on component render */
  useEffect(() => {
    // loadSuggestions()
  });

  function loadPlants() {
    API.getPlants()
      .then(res => 
        setPlants(res.data)
      )
      .catch(err => console.log(err));
  };

  function loadFavorites() {
    API.findRecent()
      .then(res => 
        setFavorites(res.data)
      )
      .catch(err => console.log(err));
  };

  function deletePlant(id) {
    API.deletePlant(id)
      .then(res => loadPlants())
      .catch(err => console.log(err));
  }

  function handleSearchChange(event) {
    const { value } = event.target;
    setSearchPlants(value);
  };
  
  function loadSuggestions(event) {
    event.preventDefault();
    /* Here is where we need to call GeoIP to figure out the zip code. */
    console.log(`User ip address for geoip is ${props.userIp}`);
    phzmapi.getTemperatureByZipcode(99518)
      .then(res => {
        const minTemp = res.data.temperature_range.split(' ')[0];
        Trefle.getPlantsByMinTemp(minTemp)
          .then(res => {
            setSearchResults(res);
          })  
    })
  }

  function GetPlantsByName(event){
    event.preventDefault();
    Trefle.getPlantsByName(searchPlants)
      .then(res=>{
        setSearchResults(res);
      });
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-5">
          <Jumbotron>
            <h1>What Should I Plant?</h1>
          </Jumbotron>
          <Row>
            <p>Looking for suggestions on what to plant? Click this button!</p>
            <form>
              <FormBtn onClick={loadSuggestions}>Get Suggestions</FormBtn>
            </form>
          </Row>
          <Row>
            <p>If you'd like to search for a plant by name, you can search here.</p>
            <form>
              <Input onChange={handleSearchChange} name="searchName" placeholder="Search by Name" />
              <FormBtn onClick={GetPlantsByName}>Get Plants By Name</FormBtn>
            </form>
          </Row>
          
          <SearchResults userName={props.userName} searchResults={searchResults} loadFavorites={loadFavorites} setPlants={setPlants}/>
        </Col>
        <Col size="md-4 sm-12">
          <Jumbotron>
            <h1>Plants On My List</h1>
          </Jumbotron>
          {plants.length ? (
            <List>
              {plants.map(plant => (
                <ListItem key={plant._id}>
                    <strong>
                      {plant.scientific_name}
                    </strong>
                  <DeleteBtn onClick={() => deletePlant(plant._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
        <Col size="md-3">
          <Jumbotron>
            <h1>Fav Live Feed</h1>
          </Jumbotron>

          <Favorites data={favorites}/>

        </Col>
      </Row>
    </Container>
  );
}

export default Plants;
