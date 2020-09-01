/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap'; // Added for navtab effect on "What should I Plant column"
import PropTypes from 'prop-types';

import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';
import { Input } from '../components/Form';
import ActivityFeed from '../components/ActivityFeed';
import { SearchResults } from '../components/SearchResults';
import UserFavorites from '../components/UserFavorites';

import API from '../utils/API';
import Trefle from '../utils/trefle';
import phzmapi from '../utils/phzmapi';
import geoip from '../utils/geoip';

function Plants(props) {
  const [activityData, setActivityData] = useState([]);
  const [searchPlants, setSearchPlants] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const [userTemp, setUserTemp] = useState('');

  function loadActivityFeed() {
    API.findRecent()
      .then((res) => setActivityData(res.data))
      .catch((err) => err);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      loadActivityFeed()
    }, 2000);
    return () => clearTimeout(timer);
  });  

  function deletePlant(id) {
    API.deletePlant(id)
      .then(() => props.loadFavorites())
      .catch((err) => err);
  }

  function handleSearchChange(event) {
    const { value } = event.target;
    setSearchPlants(value);
  }

  function loadSuggestions(event) {
    event.preventDefault();
    setShowSpinner(true);
    props.setSearchResults([]);

    geoip.getZipCodeByIp(props.userIp).then((geoipRes) => {
      let zip = '97201';
      if (geoipRes.data) {
        zip = geoipRes.data.postal.code;
      }
      phzmapi.getTemperatureByZipcode(zip)
        .then((res) => {
          const minTemp = res.data.temperature_range.split(' ')[0];
          setUserTemp(minTemp);
          Trefle.getPlantsByMinTemp(minTemp)
            .then((trefleRes) => {
              props.setSearchResults(trefleRes.data);
              setShowSpinner(false);
              props.setUserZip(zip);
            });
        });
    });
  }

  function GetPlantsByName(event) {
    event.preventDefault();
    setShowSpinner(true);
    props.setSearchResults([]);

    geoip.getZipCodeByIp(props.userIp).then((geoipRes) => {
      let zip = '97201';
      if (geoipRes.data) {
        zip = geoipRes.data.postal.code;
      }
      props.setUserZip(zip);

      Trefle.getPlantsByName(searchPlants)
        .then((res) => {
          props.setSearchResults(res.data);
          setShowSpinner(false);
        });
    });
  }

  const styleTabs = {
    border: '3px solid #78C2AD',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 5px 5px 3px #F3969A',
    padding: '10px 1px 15px 1px',
  };

  const styleLi = {
    marginBottom: '100px',
  };

  const styleInput = {
    maxWidth: '75%',
    marginLeft: '10%',
    border: '1px solid #78C2AD',
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
            <p style={{ paddingTop: '10px' }}>Quokka finds the local minimum temperature for your area, then searches a database of over 800,000 species for matches! Never lose a plant to frost again - click the button below to get suggestions for your area.</p>
                <Button onClick={loadSuggestions}>Get Suggestions</Button>
            </Tab>

            {/* Search By Name */}
            <Tab eventKey="Search By Name" title="Search By Name">
              <p style={{ paddingTop: '10px', color: '#5a5a5' }}>
                If you&apos;d like to search for a plant by name, you can search here:
              </p>
                <Input
                  style={styleInput}
                  onChange={handleSearchChange}
                  name="searchName"
                  placeholder="Search by Name"
                />
                <Button disabled={!searchPlants} onClick={GetPlantsByName}>
                  Get Plants By Name
                </Button>
            </Tab>
          </Tabs>
        </div>
        <div style={styleLi}>
          <SearchResults
            userName={props.userName}
            userIp={props.userIp}
            userZip={props.userZip}
            searchResults={props.searchResults}
            loadActivityFeed={loadActivityFeed}
            loadFavorites={props.loadFavorites}
            setShowSpinner={setShowSpinner}
            showSpinner={showSpinner}
            userTemp={userTemp}
          />
        </div>
      </Col>

      <Col size="md-4 sm-12">
        <Jumbotron>
          <h1>My Garden</h1>
        </Jumbotron>
        <UserFavorites deleteFavorite={deletePlant} favorites={props.userFavorites} />
      </Col>

      <Col size="md-3">
        <Jumbotron>
          <h1>Live Feed</h1>
        </Jumbotron>

        <ActivityFeed data={activityData}/>
      </Col>

      </Row>
    </Container>
  );
}

Plants.propTypes = {
  loadFavorites: PropTypes.func,
  searchResults: PropTypes.array,
  setSearchResults: PropTypes.func,
  userFavorites: PropTypes.array,
  setUserFavorites: PropTypes.func,
  userName: PropTypes.string,
  userIp: PropTypes.string,
  userZip: PropTypes.string,
  setUserZip: PropTypes.func,
};

export default Plants;
