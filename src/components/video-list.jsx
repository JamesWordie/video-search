import React from 'react';
import VideoItem from './video-item';
import Loading from './loading';

const VideoList = ({ videos, onVideoSelect }) => {
  if (!videos.length) {
    return (
      <Loading />
    );
  }

  const renderedList = videos.map((video) => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId} />;
  });

  return (
    <div>
      {renderedList}
    </div>
  );
};

export default VideoList;
