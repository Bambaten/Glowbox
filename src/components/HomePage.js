// src/pages/Home.js

import React from 'react';

const Home = () => {
  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/971.jpg)`,
    height: '400px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <div className="image-container" style={backgroundImage}></div>
      <div className="content-container">
        <div className="content">
          <h1>Welcome to Glowbox</h1>
          <p>
            We are a web development and graphic design company passionate about crafting modern and engaging websites.
          </p>
          <p>
            Our services include website design, website hosting, domain registration, graphic design, and much more.
          </p>
          <p>
            Whether you are a small business or a large enterprise, we have the solutions to meet your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;