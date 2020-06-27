import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { getPostalCode } from "../utils/geoip";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input } from "../components/Form";
import { Favorites } from "../components/Favorites";
import { SearchResults } from "../components/SearchResults";

import { Tabs, Tab, Button } from "react-bootstrap"; //Added for navtab effect on "What should I Plant column"

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
    // console.log(this);
    phzmapi.getTemperatureByZipcode(99518)
      .then(res => {
        const minTemp = res.data.temperature_range.split(' ')[0];
        // console.log(minTemp)
        Trefle.getPlantsByMinTemp(minTemp)
          .then(res => {
            // console.log(res);
            setSearchResults(res);
          })  
    })
  }

  function GetPlantsByName(event){
    event.preventDefault();
    // console.log(searchResults)
    Trefle.getPlantsByName(searchPlants)
      .then(res=>{
        //console.log(res);
        setSearchResults(res);
      });
  }

  const styleTabs = {
    border: '3px solid #78C2AD',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: "0px 5px 5px 3px #F3969A",
    paddingBottom: '10px'
  }

  const styleLi = {
    marginBottom: '100px',
  }



  return (
    <Container fluid>
      <Row>
        {/* What should I plant column */}
        <Col size="md-5">
          <Jumbotron>
            <h1>What Should I Plant?</h1>
          </Jumbotron>
        
      <div style={styleTabs}>
        <Tabs defaultActiveKey="Get Suggestions">
          {/* Get Plant Suggestions */}
          <Tab eventKey="Get Suggestions" title="Get Suggestions">
          <p>Click the Button to Get Suggestions!</p>
              <Button onClick={loadSuggestions}>Get Suggestions</Button>
          </Tab>

          {/* Search By Name */}
          <Tab eventKey="Search By Name" title="Search By Name">
            <p>If you'd like to search for a plant by name, you can search here.</p>
              <Input onChange={handleSearchChange} name="searchName" placeholder="Search by Name" />
              <Button onClick={GetPlantsByName}>Get Plants By Name</Button>
          </Tab>
        </Tabs>
        </div>
        <div style={styleLi}>
          <SearchResults userName={props.userName} searchResults={searchResults} loadFavorites={loadFavorites} setPlants={setPlants}/>
          </div>
        </Col>
        

        <Col size="md-4 sm-12">
          <Jumbotron>
            <h1>Plants On My List</h1>
          </Jumbotron>
          {plants.length ? (
            <List>
              {plants.map(plant => (
                <ListItem key={plant._id}>
                  {/* <Link to={"/plants/" + plant._id}> */}
                    <strong>
                      {plant.scientific_name}
                    </strong>
                  {/* </Link> */}
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
