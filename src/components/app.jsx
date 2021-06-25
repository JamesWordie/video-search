import React from 'react';
import SearchBar from './search-bar';
import youtube from '../api/youtube';
import VideoList from './video-list';
import VideoDetail from './video-detail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  handleSubmit = async (text) => {
    // calls api with search term
    const response = await youtube.get('/search', {
      params: {
        q: text
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  componentDidMount() {
    this.handleSubmit('science');
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <SearchBar onSubmit={this.handleSubmit} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col-md-4">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
