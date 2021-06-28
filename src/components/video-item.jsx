import React from 'react';
import humanized_time_span from './format-time.js';

const VideoItem = ({ video, onVideoSelect }) => {
  const published = video.snippet.publishedAt.replace('T', ' ').replace('Z', '');

  return (
    <div onClick={() => onVideoSelect(video)} className="card mb-3  video-result" style={{ cursor: 'pointer' }}>
      <div className="row video-result">
        <div className="col-md-4 pe-0">
          <img src={video.snippet.thumbnails.default.url} className="img-fluid rounded-start h-100" alt={video.snippet.title} />
        </div>
        <div className="col-md-8 px-0">
          <div className="card-body video-result-card">
            <p className="card-title my-0 video-result-card-title">{video.snippet.title}</p>
            <p className="card-text video-result-card-channel text-muted my-0">{video.snippet.channelTitle}</p>
            <p className="card-text text-muted ">{humanized_time_span(published)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
