import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="card mb-3" style={{ cursor: 'pointer' }}>
      <div className="row">
        <div className="col-md-4 pe-0">
          <img src={video.snippet.thumbnails.default.url} className="img-fluid rounded-start h-100" alt={video.snippet.title} />
        </div>
        <div className="col-md-8 px-0">
          <div className="card-body">
            <p className="card-title my-0">{video.snippet.title}</p>
            <p className="card-text text-muted ">{video.snippet.channelTitle}</p>
            <p className="card-text text-muted ">{video.snippet.publishedAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
