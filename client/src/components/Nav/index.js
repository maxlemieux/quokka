import React, { useState } from "react";
import SignupLoginModal from "../SignupLoginModal";


const Nav = () => {
  const [show, setShow] = useState(false);
    const navStyle ={
    boxShadow: "0px 5px 10px 5px pink",
    marginBottom: "20px"
  }
  return (
    <nav className="navbar-expand-lg navbar-dark bg-primary sticky-top" style={navStyle}>
      <a className="navbar-brand" href="/"></a>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarColor01" 
        aria-controls="navbarColor01" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
     </button>

     <div className="collapse navbar-collapse" id="navbarColor01">
       <ul className="navbar-nav mr-auto">
         <li className="nav-item active">
           <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
         </li>
       </ul>
     </div>

     


    </nav>

  )
}

export default Nav;






// const Nav = () => {
//   const [show, setShow] = useState(false);

//   const imgStyle = {
//     width: "65px",
//     height: "65px",
//     margin: "0px 10px 25px 0px",
//     position:"absolute"
//   }
//   const wordStyle = {
//     position:"relative",
//     padding: "12px 0px 0px 75px",
//     color: "cornsilk",
//     fontSize: "30px",
//     fontFamily: "Chalkduster, fantasy"
//   }
//   const navStyle ={
//     boxShadow: "0px 5px 10px 5px pink",
//     marginBottom: "20px"
//   }
 
//   return (
//     <nav 
//     className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top"
//     style= {navStyle}
//     >
//       <a className="navbar-brand" href="/"><img src="../img/quokka-logo.png" alt="logo"style={imgStyle} 
//       />
//           <p style={wordStyle}>quokka</p>
//       </a>

//       <SignupLoginModal show={show} setShow={setShow} />
//       <button onClick={() => setShow(true)}>Login</button>
//     </nav>
    
//   );
// }

// export default Nav;
