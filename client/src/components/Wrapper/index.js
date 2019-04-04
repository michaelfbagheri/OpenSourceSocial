import React from 'react';
import Nav from './../Tools/Nav';
import SearchSection from './../Tools/SearchSection';
import MapView from './../Tools/MapView';
import Calendar from './../Tools/Calendar';


import Footer from './../Tools/Footer';

function Wrapper(props) {
  return (
    <div className='container'>
      <Nav
        logout={props.logout} />
      <section className="row">
        <div className="col-md-4 event-list">
          <SearchSection />
        </div>

        <div className="col-md-8 event-module">
          <div className="row">
            <div className="col-md-12 event-planner">
              <div className="row">
                <div
                  className="event-details card col-md-4">
                  when date is clicked details of that event will show up here
                </div>
                <Calendar
                  className="calendar card col-md-8" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 event-map">
              <MapView />
            </div>
          </div>

        </div>
      </section>



      <Footer />
    </div >

  );
}

export default Wrapper;
