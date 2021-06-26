import React from 'react';
import SearchBar from './search-bar';

const Navbar = ({ onSubmit }) => {
  return (
    <div className="d-flex justify-content-between w-100" id="navbar ">
      <div className="d-flex justify-content-start">
        <i className="fas fa-bars"></i>
        <i className="fab fa-youtube"></i>
        <p>Youtube</p>
      </div>
      <div className="col-6">
        <SearchBar onSubmit={onSubmit} />
      </div>
      <div className="d-flex justify-content-between">
        <i className="fab fa-youtube"></i>
        <div className="d-flex evenly">
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
