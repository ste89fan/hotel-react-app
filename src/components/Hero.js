import React from "react";

function Hero({ children, hero }) {
  return (
    <header>
      <div className={hero}>{children}</div>
    </header>
  );
}

Hero.defaultProps = {
  hero: "mainHero"
};

export default Hero;
