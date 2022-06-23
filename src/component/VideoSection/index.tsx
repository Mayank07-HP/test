import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { PlayButton, Thumbnail } from "../../assets";
const VideoSectionContainer = styled.section`
  //   width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
`;
const VideoSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 80%;
  padding-top: 8.2rem;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
const VideoSectionTitle = styled.h1`
  color: white;
  font-size: 2rem;
  width: 34%;
  @media screen and (max-width: 768px) {
    width: 45%;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;
const PlayIcon = styled.img`
  width: 6rem;
  height: auto;
`;
// const Video = styled.div``;
const VideoCardBorderWrapper = styled.div`
  padding: 0rem;
  //   width: 20%;
  margin: 1rem;
  @media screen and (max-width: 450px) {
    width: 100% !important;
    height: auto !important;
  }
`;

const ReactPlayerComponent = styled(ReactPlayer)`
  // @media screen and (max-width: 768px) {
  //   width: 100% !important;
  //   height: auto !important;
  // }
  @media screen and (max-width: 450px) {
    width: 100% !important;
    height: auto !important;
  }
`;

const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
`;
const Text1 = styled.div`
  font-wight: 400;
  font-size: 25px;
  color: #fff;
  text-transform: uppercase;
  font-family: a Atmospheric;
  font-style: Reguler;
`;
const Text2 = styled.div`
  font-weight: 400;
  font-size: 16px;
  font-style: italic;
  font-family: Bergen Text;
`;
const Discrption = styled.div`
  // padding-top: 2rem;
  margin-left: 15px;
  line-height: 2;
`;

export const VideoSection = () => {
  return (
    <VideoSectionContainer>
      <VideoSectionWrapper>
        <VideoCardBorderWrapper>
          <VideoCard>
            <ReactPlayerComponent
              url="https://monopolon-assets.s3.amazonaws.com/video+landscape_2.mp4"
              volume={1}
              muted
              playIcon={<PlayIcon src={PlayButton} alt="Play" />}
              light={Thumbnail}
              controls
              playing
              loop
            />
          </VideoCard>
        </VideoCardBorderWrapper>
        <Discrption>
          <Text1>perspiciatis unde</Text1>
          <Text2>Perspiciatis Unde Omnis Iste Natus Error Sit</Text2>
        </Discrption>
      </VideoSectionWrapper>
    </VideoSectionContainer>
  );
};
