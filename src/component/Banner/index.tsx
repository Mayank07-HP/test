import styled from "styled-components";
import { BannerBackground } from "../../assets";
import { Navbar } from "../Navbar";
import { VideoSection } from "../VideoSection";

const BannerWrapper = styled.section`
  background: url(${BannerBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  height: 100vh;
`;

export const Banner = () => {
  return (
    <>
      <BannerWrapper>
        <Navbar />
        <VideoSection />
      </BannerWrapper>
    </>
  );
};
