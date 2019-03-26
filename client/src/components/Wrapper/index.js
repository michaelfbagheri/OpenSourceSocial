import React from 'react';
import Nav from './../Tools/Nav';


import Footer from './../Tools/Footer';

function Wrapper(props) {
  return (
    <div className='container'>
      <Nav
        logout={props.logout} />
      <section className="row">
        <div className="col-md-4 event-list">left-side</div>
        <div className="col-md-8 event-module">right-side</div>
      </section>
      <section className="row">
        <div className="col-md-12 event-map">Map</div>
      </section>
      <Footer />
    </div>

  );
}

export default Wrapper;
