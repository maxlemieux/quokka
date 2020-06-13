import React from "react";

const Nav = () => {
  const imgStyle = {
    width: "65px",
    height: "65px",
    marginRight: "10px",
    marginBottom: "25px",
    position:"absolute"
  }
  const wordStyle = {
    position:"relative",
    paddingLeft: "75px",
    paddingTop:"12px",
    color: "cornsilk",
    fontSize: "30px",
    fontFamily: "Chalkduster, fantasy"
  }
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a 
        className="navbar-brand" 
        href="/"
        
      >
        <img src="../img/quokka-logo.png" 
          alt="quokka-image"
          style = {imgStyle} 
        />
           <p style={wordStyle}>quokka</p>
      </a>
    </nav>
    
  );
}

export default Nav;
