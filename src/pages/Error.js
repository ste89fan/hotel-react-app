import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

function Error() {
  return(
    <Hero>
      <Banner title="Error" subtitle="Page not found">
        <Link to="/" className="btn-primary">Go on home page</Link>
      </Banner>
    </Hero>
  ) 
}

export default Error;
