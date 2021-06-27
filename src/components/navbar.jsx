import React from 'react';
import SearchBar from './search-bar';

const Navbar = ({ onSubmit }) => {
  return (
    <div className="d-flex justify-content-between align-items-center w-100">
      <div className="d-flex justify-content-start align-items-center w-100">
        <i className="fas fa-bars mx-3"></i>
        <i className="fab fa-youtube"></i>
        <h5 className="my-0 mx-2 text-white">Youtube</h5>
        <p className="text-white-50">GB</p>
      </div>
      <div className="col-6">
        <SearchBar onSubmit={onSubmit} />
      </div>
      <div className="d-flex justify-content-between w-100">
        <i className="fas fa-microphone mx-3"></i>
        <div className="d-flex justify-content-evenly w-50">
          <i className="fas fa-video"></i>
          <i className="fas fa-th"></i>
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle"></i>
          {/*<FontAwesomeIcon icon={['fas', 'microphone']} />*/}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
