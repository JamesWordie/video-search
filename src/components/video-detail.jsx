import React from 'react';
import Loading from './loading';
import humanized_time_span from './format-time.js';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <Loading />
    );
  }

  const published = video.snippet.publishedAt.replace('T', ' ').replace('Z', '');
  const randomLike = Math.floor(Math.random() * 100_000) + 1;
  const randomDislike = Math.floor(Math.random() * 1_000) + 1;

  return (
    <div className="card video-detail" >
      <iframe width="auto" src={`https://youtube.com/embed/${video.id.videoId}`} frameBorder="0"></iframe>
      <div className="card-body border-bottom">
        <h5 className="card-title video-result-title">{video.snippet.title}</h5>
        <p className="card-text text-muted">{video.snippet.description}</p>
        <div className="d-flex justify-content-between">
          <p className="card-text text-muted ">{humanized_time_span(published)}</p>
          <div className="d-flex justify-content-evenly align-items-baseline">
            <i class="fas fa-thumbs-up mx-2 text-muted"></i><p className="text-muted">{randomLike}</p>
            <i class="fas fa-thumbs-down mx-2 text-muted"></i><p className="text-muted">{randomDislike}</p>
            <i class="fas fa-share mx-2 text-muted"></i><p className="text-muted">SHARE</p>
            <i class="fas fa-bars mx-2 text-muted"></i><p className="text-muted">SAVE</p>
            <i class="fas fa-ellipsis-h mx-2 text-muted"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
