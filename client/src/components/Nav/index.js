import React from "react";

const Nav = () => {
  const imgStyle = {
    width: "65px",
    height: "65px",
    margin: "0px 10px 25px 0px",
    position:"absolute"
  }
  const wordStyle = {
    position:"relative",
    padding: "12px 0px 0px 75px",
    color: "cornsilk",
    fontSize: "30px",
    fontFamily: "Chalkduster, fantasy"
  }
  const navStyle ={
    boxShadow: "0px 5px 10px 5px pink",
    marginBottom: "20px"
  }
 
  return (
    <nav 
    className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top"
    style= {navStyle}
    >
      <a 
        className="navbar-brand" 
        href="/"
        
      >
        <img src="../img/quokka-logo.png" 
          alt="logo"
          style={imgStyle} 
        />
           <p style={wordStyle}>quokka</p>
      </a>
    </nav>
    
  );
}

export default Nav;
