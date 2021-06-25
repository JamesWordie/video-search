import React from 'react';
import Loading from './loading';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <Loading />
    );
  }

  return (
    <div className="card">
      <iframe width="auto" src={`https://youtube.com/embed/${video.id.videoId}`} frameBorder="0"></iframe>
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text">{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
