// src/pages/HappyClients.js

import React from 'react';

const HappyClients = () => {
  const clients = [
    {
      company: 'TechFirm Bulgaria',
      testimonial:
        'Glowbox has been instrumental in transforming our online presence. Their web development and design services are top-notch!',
      website: 'https://www.techfirm-bg.com',
    },
    {
      company: 'AzerbaiTech Solutions',
      testimonial:
        'We are extremely satisfied with Glowbox\'s services. They delivered outstanding results for our website design and hosting needs.',
      website: 'https://www.azerbaitech.com',
    },
    {
      company: 'Sofia Software Solutions',
      testimonial:
        'Glowbox is our go-to partner for graphic design. Their creative team always delivers unique and eye-catching designs.',
      website: 'https://www.sofiasoftwaresolutions.com',
    },
    {
      company: 'Baku Digital Solutions',
      testimonial:
        'Working with Glowbox has been a fantastic experience. Their expertise in SEO and online marketing has boosted our business significantly.',
      website: 'https://www.bakudigitalsolutions.com',
    },
    {
      company: 'IT Pros Bulgaria',
      testimonial:
        'We highly recommend Glowbox for their exceptional computer support and maintenance services. They keep our systems running smoothly!',
      website: 'https://www.itpros-bg.com',
    },
    {
      company: 'AzerTech Solutions',
      testimonial:
        'Glowbox\'s web hosting services have exceeded our expectations. They provide reliable hosting solutions for our websites.',
      website: 'https://www.azertech-solutions.com',
    },
    {
      company: 'BulSoft Systems',
      testimonial:
        'The team at Glowbox is highly skilled in website design. They created a stunning website that perfectly represents our brand.',
      website: 'https://www.bulsoftsystems.com',
    },
    {
      company: 'AquaTech Bulgaria',
      testimonial:
        'We are impressed with Glowbox\'s social media marketing services. They helped us reach a wider audience and improve engagement.',
      website: 'https://www.aquatech-bg.com',
    },
    {
      company: 'BakuTech Solutions',
      testimonial:
        'Glowbox\'s SEO expertise has driven significant traffic to our website. We have seen a notable increase in leads and conversions.',
      website: 'https://www.bakutechsolutions.com',
    },
    {
      company: 'Sofia Digital Solutions',
      testimonial:
        'Glowbox has been a valuable partner for our online advertising campaigns. Their Google and Youtube Ads services are exceptional.',
      website: 'https://www.sofiadigitalsolutions.com',
    },
  ];

  return (
    <div className="happy-clients-container">
      <h1>Happy Clients</h1>
      <div className="testimonials-list">
        {clients.map((client, index) => (
          <div className="testimonial-item" key={index}>
            <p className="testimonial-text">"{client.testimonial}"</p>
            <p className="testimonial-company">- {client.company}</p>
            <a href={client.website} target="_blank" rel="noopener noreferrer" className="testimonial-website">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
