import React from "react";
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25;
  height: 0;
`;

const VideoIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Video = ({ youtubeId }) => {
  return (
    <VideoContainer>
      <VideoIFrame
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?controls=0&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&color=white&wmode=transparent`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </VideoContainer>
  );
};

export default Video;