import React from 'react';
import './plantz.css'
function MyComponent() {
  return (
    <div id='container' className="container-fluid ">
      <div className="row h-100 ">
        <div className="d-flex flex-column justify-content-start align-items-start" id='inf'  >
          <h1 className="text-8xl text-white ps-4" id="plantz">Plantz.</h1>
          <h2 className="text-white ps-4 col-lg-3 text-2xl mt-2 font-thin ">Explora el mundo de la botánica de manera estructurada con Plantz.</h2>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
