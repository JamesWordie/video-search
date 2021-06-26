import React from 'react';

class SearchBar extends React.Component {
  state = { text: "" };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // callback from parent component
    this.props.onSubmit(this.state.text)
  }

  render() {
    return (
      <div className="my-3 w-100">
        <form onSubmit={this.handleSubmit} className="form-group">
          <input
            type="text"
            className="search-bar form-control"
            id="video-search"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Serach"
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;
