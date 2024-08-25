import React from 'react';

const Gallery = ({ images, className, links }) => {
  return (
    <div className={className}>
      {images.map((image, index) => (
        <a key={index} href={links[index]} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={`gallery${index + 1}`} />
        </a>
      ))}
    </div>
  );
};

export default Gallery;
