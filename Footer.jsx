import React from "react"

function Footer() {
   var curntYear = new Date().getFullYear();

  return (
    <footer>
      <p>copyright @ {curntYear}</p>
    </footer>   
  );
}

export default Footer ;
