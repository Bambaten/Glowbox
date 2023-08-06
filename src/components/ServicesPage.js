// src/pages/ServicesPage.js

import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      name: 'Domain Registration',
      image: '971.jpg', // Add the image file name in the public folder
    },
    {
      name: 'Website Design',
      image: '971.jpg',
    },
    {
      name: 'Website Hosting',
      image: '971.jpg',
    },
    {
      name: 'Corporate Email Solutions',
      image: '971.jpg',
    },
    {
      name: 'SSL Certificates',
      image: '971.jpg',
    },
    {
      name: 'Social Media Marketing',
      image: '971.jpg',
    },
    {
      name: 'Google and Youtube Ads',
      image: '971.jpg',
    },
    {
      name: 'Mass Mailing',
      image: '971.jpg',
    },
    {
      name: 'Online Back Up',
      image: '971.jpg',
    },
    {
      name: 'Graphic Design',
      image: '971.jpg',
    },
    {
      name: 'Computer Support and Maintenance',
      image: '971.jpg',
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={`${process.env.PUBLIC_URL}/${service.image}`} alt={service.name} className="service-image" />
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
