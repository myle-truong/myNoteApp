import React from "react";
function Footer() {

 const myName = "Hana Truong";
 const currentYear = new Date().getFullYear();
 return (
  <footer>
   <p>Create by {myName} with 💚  © {currentYear}</p>
  </footer>
 );
}

export default Footer; 