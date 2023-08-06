// src/pages/BlogPage.js

import React from 'react';

const BlogPage = () => {
  const services = [
    {
      title: 'The Importance of Domain Registration',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan aliquet ligula ut egestas.',
    },
    {
      title: 'Designing an Eye-Catching Website',
      content: 'Praesent eu fermentum nulla, sit amet convallis magna. Integer feugiat libero nec consectetur.',
    },
    {
      title: 'Choosing the Right Website Hosting Provider',
      content: 'Suspendisse eu mauris felis. Nulla facilisi. Duis vel justo quis odio feugiat iaculis.',
    },
    {
      title: 'Enhancing Business Communication with Corporate Email Solutions',
      content: 'Cras volutpat, justo eget posuere facilisis, mauris sapien scelerisque nisi, eu pellentesque velit est nec nisi.',
    },
    // Add blogs for other services here
  ];

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      {services.map((service, index) => (
        <div className="blog-item" key={index}>
          <h2>{service.title}</h2>
          <p>{service.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
