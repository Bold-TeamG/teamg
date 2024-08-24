import React from 'react';

const Gallery = ({ images, className  }) => {
  return (
    <div className={className}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`gallery${index + 1}`} />
      ))}
    </div>
  );
};

export default Gallery;
