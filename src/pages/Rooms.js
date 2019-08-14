import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

function Rooms() {
  return(
    <>
      <RoomsContainer />
      <Hero hero="roomsHero">
        <Banner title="Welcome in our rooms">
          <Link to="/" className="btn-primary">Go on home page</Link>
        </Banner>
      </Hero>
    </>
  ) 
}

export default Rooms;
