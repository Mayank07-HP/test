import { TreasureChests, MakingTough } from "../../assets";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-itmes: center;
  width: 75%;
  margin: auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const PerspiciatisWapper = styled.div`
  display: flex;
`;

const PerspiciatisTextContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

const HeaderText = styled.h3`
  color: #fff;
  font-size: 3rem;
  font-style: a Atmospheric;
  margin: unset;
  text-transform: uppercase;
  font-family: Atmospheric;
`;

const DiscrptionText = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: italic;
  font-family: Bergen Text;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  line-height: 1.5rem;
  width: 60%;
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
  margin-top: 3rem;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ImageContainerMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    // display: unset;
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

const Images = styled.img`
  width: 250px;
  height: auto;
  @media screen and (max-width: 1200px) {
    width: 215px;
  }
`;

const TreasureChestsImg = styled.img`
  width: 345px;
  height: auto;

  @media screen and (max-width: 1200px) {
    width: 300px;
  }
`;

const ImageBox = styled.div``;

const MakingToughBox = styled.div`
  margin-left: 1rem;
  display: flex;
`;

export const Perspiciatis = () => {
  return (
    <>
      <Container>
        <PerspiciatisWapper>
          <PerspiciatisTextContainer>
            <HeaderText>perspiciatis </HeaderText>
            <HeaderText>unde omnis iste</HeaderText>
            <DiscrptionText>
              Perspiciatis Unde Omnis Iste Natus Error Sit Voluptate Accusantiu
              Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo
              Inventore Veritatis Et Quasi Architecto.
            </DiscrptionText>
            <ImageContainerMobile>
              <ImageBox>
                <TreasureChestsImg src={TreasureChests} alt="TreasureChests" />
              </ImageBox>
              <MakingToughBox>
                <Images src={MakingTough} alt="MakingTough" />
              </MakingToughBox>
            </ImageContainerMobile>
            <Button>LEARN MORE</Button>
          </PerspiciatisTextContainer>
          <ImageContainer>
            <ImageBox>
              <TreasureChestsImg src={TreasureChests} alt="TreasureChests" />
            </ImageBox>
            <MakingToughBox>
              <Images src={MakingTough} alt="MakingTough" />
            </MakingToughBox>
          </ImageContainer>
        </PerspiciatisWapper>
      </Container>
    </>
  );
};
