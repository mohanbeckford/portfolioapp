

import React from 'react';

function Project({ title, image, link, github }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <a href={link}>View App</a>
      <a href={github}>GitHub Repo</a>
    </div>
  );
}

export default Project;
