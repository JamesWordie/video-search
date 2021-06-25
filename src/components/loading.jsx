import React from 'react';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center position-sticky" style={{ height: '100vh', top: '0' }}>
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
}

export default Loading;
