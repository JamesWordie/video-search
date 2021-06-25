import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="card mb-3" style={{ width: '18em', cursor: 'pointer' }}>
      <img src={video.snippet.thumbnails.medium.url} className="card-img-top" alt={video.snippet.title} />
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
      </div>
    </div>
  );
}

export default VideoItem;
