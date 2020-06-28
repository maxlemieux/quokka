/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap'; // Added for navtab effect on "What should I Plant column"
import PropTypes from 'prop-types';

import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
// import { getPostalCode } from "../utils/geoip";
import { Col, Row, Container } from '../components/Grid';
import { Input } from '../components/Form';
import ActivityFeed from '../components/ActivityFeed';
import { SearchResults } from '../components/SearchResults';
import UserFavorites from '../components/UserFavorites';

import Trefle from '../utils/trefle';
import phzmapi from '../utils/phzmapi';

function Plants(props) {
  // const [plants, setPlants] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchPlants, setSearchPlants] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  function loadPlants() {
    API.getPlants()
      .then((res) => {
        // setPlants(res.data);
        props.setUserFavorites(res.data);
      })
      .catch((err) => err);
  }

  useEffect(() => {
    loadPlants();
  }, []);

  function loadActivityFeed() {
    API.findRecent()
      .then((res) => setActivityData(res.data))
      .catch((err) => err);
  }

  useEffect(() => {
    loadActivityFeed();
  }, []);

  /* Run the automatic plant suggestion code on component render */
  useEffect(() => {
    // loadSuggestions()
  });

  function deletePlant(id) {
    API.deletePlant(id)
      .then(() => loadPlants())
      .catch((err) => err);
  }

  function handleSearchChange(event) {
    const { value } = event.target;
    setSearchPlants(value);
  }

  function loadSuggestions(event) {
    event.preventDefault();
    setShowSpinner(true);
    /* Here is where we need to call GeoIP to figure out the zip code. */
    // console.log(`User ip address for geoip is ${props.userIp}`);
    phzmapi.getTemperatureByZipcode(99518)
      .then((res) => {
        const minTemp = res.data.temperature_range.split(' ')[0];
        Trefle.getPlantsByMinTemp(minTemp)
          .then((trefleRes) => {
            setSearchResults(trefleRes);
            setShowSpinner(false);
          });
      });
  }

  function GetPlantsByName(event) {
    event.preventDefault();
    setShowSpinner(true);
    Trefle.getPlantsByName(searchPlants)
      .then((res) => {
        setSearchResults(res);
        setShowSpinner(false);
      });
  }

  const styleTabs = {
    border: '3px solid #78C2AD',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 5px 5px 3px #F3969A',
    paddingBottom: '10px',
  };

  const styleLi = {
    marginBottom: '100px',
  };

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
              <p>If you&apos;d like to search for a plant by name, you can search here.</p>
                <Input onChange={handleSearchChange} name="searchName" placeholder="Search by Name" />
                <Button onClick={GetPlantsByName}>Get Plants By Name</Button>
            </Tab>
          </Tabs>
        </div>
        <div style={styleLi}>
          <SearchResults
            userName={props.userName}
            userIp={props.userIp}
            searchResults={searchResults}
            loadActivityFeed={loadActivityFeed}
            setUserFavorites={props.setUserFavorites}
            // setPlants={setPlants}
            setShowSpinner={setShowSpinner}
            showSpinner={showSpinner}
          />
        </div>
      </Col>
      <Col size="md-4 sm-12">
          <Jumbotron>
            <h1>Plants On My List</h1>
          </Jumbotron>
          {/* <UserFavorites deleteFavorite={deletePlant} favorites={plants} /> */}
          <UserFavorites deleteFavorite={deletePlant} favorites={props.userFavorites} />
        </Col>

        <Col size="md-3">
          <Jumbotron>
            <h1>Fav Live Feed</h1>
          </Jumbotron>

          <ActivityFeed data={activityData}/>

        </Col>
      </Row>
    </Container>
  );
}

Plants.propTypes = {
  userFavorites: PropTypes.array,
  setUserFavorites: PropTypes.func,
  userName: PropTypes.string,
  userIp: PropTypes.string,
};

export default Plants;
