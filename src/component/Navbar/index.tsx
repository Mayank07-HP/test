import styled from "styled-components";

const NavData = [
  {
    label: "Game Info",
    url: "#game-info",
  },
  {
    label: "Players",
    url: "#players",
  },
  {
    label: "Community",
    url: "#community",
  },
  {
    label: "News",
    url: "#news",
  },
];

const Contaner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Bergen-text-regular";
`;
const NavbarWrapper = styled.div`
  display: flex;
  align-itmes: center;
  justify-content: space-between;
  width: 75%;
`;
const Logo = styled.div`
  font-size: 1.5rem;
`;
const NavAnchor = styled.a`
  text-decoration: none;
  color: white;
  margin: 0 1rem;
`;
const NavItem = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;
const LinkContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LinkWapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  text-transform: uppercase;
  align-items: center;
`;

const Button = styled.button`
  margin-left: 1rem;
  padding: 0.8rem 1rem;
  border: 1px solid #ffc67b;
  border-radius: 50px;
  color: white;
  background: linear-gradient(#ffc67b, #b46b0a);
  box-shadow: 0 0 15px 2px #ffc67b;
  font-family: Bergen-text-regular;
`;

export const Navbar = () => {
  return (
    <>
      <Contaner>
        <NavbarWrapper>
          <LogoContainer>
            <Logo>Your Logo</Logo>
          </LogoContainer>
          <LinkContainer>
            <LinkWapper>
              {NavData.map((navitem) => {
                return (
                  <>
                    <NavAnchor href={navitem?.url}>
                      <NavItem> {navitem?.label} </NavItem>
                    </NavAnchor>
                  </>
                );
              })}

              <Button>PLAY NOW</Button>
            </LinkWapper>
          </LinkContainer>
        </NavbarWrapper>
      </Contaner>
    </>
  );
};
