import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { SearchResults } from "../components/SearchResults";
import Trefle from "../utils/trefle"

function Plants() {
  const [books, setBooks] = useState([])
  // const [formObject, setFormObject] = useState({})
  // const [searchObject, setSearchObject] = useState('');
  const [temperatureObject, setTemperatureObject] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value});
  // };

  function handleSearchChange(event) {
    const { value } = event.target;
    setSearchResults(value);
  };

  function handleTemperatureChange(event) {
    const { name, value } = event.target;
    console.log(`name ${name}`);
    console.log(`value ${value}`);
    setTemperatureObject({ minTemp: value });
  }

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //       synopsis: formObject.synopsis
  //     })
  //       .then(res => loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  function GetPlantsByMinTemp(event){
    event.preventDefault();
    console.log(`search with min temp ${temperatureObject.minTemp}`);
    Trefle.getPlantsByMinTemp(temperatureObject.minTemp)
      .then(res=>{
        console.log(res)
        setSearchResults(res);
      })
  }

  function GetPlantImage(event){
    event.preventDefault();
    Trefle.getPlantsByImage()
      .then(res=>console.log(res.data.images[0].url))
  }

  function GetPlantsByCommonName(event){
    event.preventDefault();
    // console.log(searchResults)
    Trefle.getPlantsByCommonName(searchResults)
      .then(res=>{
        // console.log(res);
        setSearchResults(res);
      });
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Should I Plant?</h1>
          </Jumbotron>
          {/* <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <Input
              onChange={handleInputChange}
              name="author"
              placeholder="Author (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="synopsis"
              placeholder="Synopsis (Optional)"
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit Book
            </FormBtn>
          </form> */}

          <form>
            <Input
              name="minTemp" 
              onChange={handleTemperatureChange}
              placeholder="MinTemp" />
            <FormBtn 
              disabled={!temperatureObject.minTemp}
              onClick={GetPlantsByMinTemp}>Submit Temp</FormBtn>
          </form>

          <form>
            <FormBtn onClick={GetPlantImage}>Get Image URL</FormBtn>
          </form>

          <form>
            <Input onChange={handleSearchChange} name="searchName" placeholder="Search by Name" />
            <FormBtn onClick={GetPlantsByCommonName}>Get Plants By Common Name</FormBtn>
          </form>

          <SearchResults searchResults={searchResults} />

        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Plants On My List</h1>
          </Jumbotron>
          {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book._id}>
                  <Link to={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteBook(book._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Plants;
