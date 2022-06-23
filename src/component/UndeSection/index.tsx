import styled from "styled-components";
import { UndoBackgoround, PlayButton, UndoMobile } from "../../assets";

const Background = styled.section`
  background: url(${UndoBackgoround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  height: 100vh;
  display: flex;
  @media screen and (max-width: 768px) {
    // background: url(${UndoMobile});
    background-size: cover;
    background-repeat: no-repeat;
    height: unset;
  }
`;

const Container = styled.div`
  align-itmes: center;
  width: 75%;
  margin: auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const UndoWapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    // flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  width: 50%;
  float: right;
  //   @media screen and (max-width: 768px) {
  //     width: 0%;
  //   }
`;
const TextContainer = styled.div`
  width: 50%;
  float: left;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-content: flex-start;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 70%;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // align-content: center;
  }
`;

const HeaderText = styled.h3`
  color: #000;
  font-size: 3rem;
  font-style: a Atmospheric;
  margin: unset;
  text-transform: uppercase;
  font-family: Atmospheric;
`;

const DiscrptionText = styled.p`
  color: #000;
  font-size: 14px;
  font-style: italic;
  font-family: Bergen Text;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  line-height: 30px;
  text-algin: left;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1rem;
  border: 1px solid #ffc67b;
  border-radius: 50px;
  color: white;
  background: linear-gradient(#ffc67b, #b46b0a);
  box-shadow: 0 0 15px 2px #ffc67b;
  font-family: Bergen-text-regular;
`;

const PlayCantainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const PerspiciatisTextContainer = styled.div``;
const PlayIcon = styled.img`
  width: 4.5rem;
  height: auto;
`;

const WatchText = styled.div`
  color: #000;
  font-size: 1.5rem;
`;

const PlayWapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UndeSection = () => {
  return (
    <>
      <Background>
        {/* <Container> */}
        <UndoWapper className="x">
          <ImageContainer></ImageContainer>
          <TextContainer>
            <HeaderText>unde omnis </HeaderText>
            <DiscrptionText>
              Perspiciatis Unde Omnis Iste Natus Error Sit Voluptate Accusantiu
              Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo
              Inventore Veritatis Et Quasi Architecto Beatae Vitae Dicta Sunt
              Explicabo. Nemo Enim Ipsam Voluptatem Quiaperspiciatis Unde Omnis
              Iste Natus Error Sit Voluptate Accusantiu Doloremque Laudantium,
              Totam .
            </DiscrptionText>
            <PlayCantainer>
              <Button>PLAY NOW</Button>
              <PlayWapper>
                <PlayIcon src={PlayButton} alt="PlayButton" />
                <WatchText>Watch trailer</WatchText>
              </PlayWapper>
            </PlayCantainer>
          </TextContainer>
        </UndoWapper>
        {/* </Container> */}
      </Background>
    </>
  );
};
