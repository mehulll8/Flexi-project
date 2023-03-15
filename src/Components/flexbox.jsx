import React from 'react';

const Flexbox = ({ imageSrc, altText }) => {
  return (
    <div style={{ margin: '10px', display: 'flex', justifyContent: "space-between" , alignItems: 'center', height: '100vh' }}>
      <div style={{ flex: '1', textAlign: 'center' }}>
        <img src={imageSrc} alt={altText} style={{ maxWidth: '100%' }} />
      </div>
    </div>
  );
};

export default Flexbox;
