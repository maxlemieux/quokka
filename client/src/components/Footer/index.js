import React from "react";

const Footer = () => { 
  const styleFooter = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#78C2AD',
    color: 'cornsilk',
    boxShadow: "0px 0px 10px 15px pink",
    height: '40px'
  }
  const styleA = {
    color: 'pink',
  }
  const styleP = {
    fontSize: '10px',
    margin: '0',
    paddingTop: '4px'
  }
  return (
    <div style={styleFooter}>
      <p style={styleP}>Quokka (c) 2020 by Andy J Chen, Ian Johnson, Max Lemieux</p>
      <p style={styleP}>This product includes GeoLite2 data created by MaxMind, available from <a style ={styleA} href="https://www.maxmind.com">https://www.maxmind.com</a></p>
    </div>
  );
}

export default Footer;
