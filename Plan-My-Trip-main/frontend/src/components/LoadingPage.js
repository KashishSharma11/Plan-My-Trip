import React from 'react';

const LoadingPage = () => {

  return (
    <img 
      src="https://25.media.tumblr.com/dce3ee656463cbd5255afcf225ca42a2/tumblr_mkb5l2GLkK1rlono5o1_500.gif" 
      alt="Loading..." 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        zIndex: 9999
      }}
    />
  );
};

export default LoadingPage;