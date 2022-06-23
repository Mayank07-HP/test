import styled from "styled-components";
import { Robot } from "../../assets";

const Container = styled.div`
  display: flex;
  align-itmes: center;
  width: 75%;
  margin: auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
const ImageWapper = styled.div`
  width: 50%;
  display: flex;
  align-items: start;
  justify-content: start;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ImageWapperMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: unset;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const AboutWapper = styled.div`
  width: 90%;
  @media screen and (max-width: 768px) {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const AboutContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;
const AboutText = styled.h3`
  color: #fff;
  font-size: 3rem;
  font-style: Atmospheric;
  margin: unset;
  text-transform: uppercase;
  font-family: Atmospheric;
`;
const AboutDis = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: italic;
  font-family: Bergen Text;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  line-height: 1.5rem;
`;

const Button = styled.button`
  padding: 0.8rem 1rem;
  border: 1px solid #ffc67b;
  border-radius: 50px;
  color: white;
  background: linear-gradient(#ffc67b, #b46b0a);
  box-shadow: 0 0 15px 2px #ffc67b;
  font-family: Bergen-text-regular;
  margin-top: 3rem;
`;

const RobotImage = styled.img`
  width: 450px;
  height: auto;

  @media screen and (max-width: 1200px) {
    width: 350px;
  }
`;

const AboutSectionContainer = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
  }
`;

export const AboutSection = () => {
  return (
    <>
      <Container>
        <AboutSectionContainer>
          <ImageWapper>
            <RobotImage src={Robot} />
          </ImageWapper>
          <AboutContainer>
            <AboutWapper>
              <AboutText>About</AboutText>
              <AboutText>the game</AboutText>
              <AboutDis>
                Perspiciatis Unde Omnis Iste Natus Error Sit Voluptate
                Accusantiu Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa
                Quae Ab Illo Inventore Veritatis Et Quasi Architecto Beatae
                Vitae Dicta Sunt Explicabo. Nemo Enim Ipsam Voluptatem
                Quiaperspiciatis Unde Omnis Iste Natus Error Sit Voluptate
                Accusantiu Doloremque Laudantium, Totam .
              </AboutDis>
              <ImageWapperMobile>
                <RobotImage src={Robot} />
              </ImageWapperMobile>
              <Button>Learn More</Button>
            </AboutWapper>
          </AboutContainer>
        </AboutSectionContainer>
      </Container>
    </>
  );
};
