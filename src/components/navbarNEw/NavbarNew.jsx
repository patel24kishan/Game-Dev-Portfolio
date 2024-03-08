import { Link } from "react-router-dom";
import styled from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";

const StyledNav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960xp) {
    transition: 0.8s all ease;
  }
`;

const StylednavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1400px;
`;

const StyledLogo = styled(Link)`
  width: 80%;
  pad: 0 6px;
  display: flex;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  
  @media screen and (max-width: 640px) {
    padding: 0 0;
  }
`;

const StyledMobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    z-index: 999;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const StyledNavMenu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledNavItem = styled.a`
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledContact = styled.button`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  background-color: transparent;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-size: 1rem;
  font-weight: 500;
  height: 70%;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const StyledSpan = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 42px 40px 24px 40px;
  background-color: ${({ theme }) => theme.card_light};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const StyledMobileMenuItem = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close the mobile menu when screen width increases beyond 768px
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledNav>
      <StylednavContainer>
        <StyledLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" />
            <StyledSpan>Logo</StyledSpan>
          </a>
        </StyledLogo>
        <StyledMobileIcon>
          {isOpen ? (
            <HiXMark onClick={() => setIsOpen(false)}></HiXMark>
          ) : (
            <HiBars3 onClick={() => setIsOpen(true)} />
          )}
        </StyledMobileIcon>
        <StyledNavMenu>
          <StyledNavItem href="#about">About</StyledNavItem>
          <StyledNavItem href="#skills">Skills</StyledNavItem>
          <StyledNavItem href="#experience">Experience</StyledNavItem>
          <StyledNavItem href="#projects">Projects</StyledNavItem>
          <StyledNavItem href="#education">Education</StyledNavItem>
        </StyledNavMenu>

        <StyledButton>
          <StyledContact>Contact</StyledContact>
        </StyledButton>
      </StylednavContainer>

      {isOpen && (
        <StyledMobileMenu open={isOpen}>
          <StyledMobileMenuItem
            to="about"
            onClick={() => setIsOpen((open) => !open)}
          >
            About
          </StyledMobileMenuItem>
          <StyledMobileMenuItem
            to="skills"
            onClick={() => setIsOpen((open) => !open)}
          >
            Skills
          </StyledMobileMenuItem>
          <StyledMobileMenuItem
            to="experience"
            onClick={() => setIsOpen((open) => !open)}
          >
            Experience
          </StyledMobileMenuItem>
          <StyledMobileMenuItem
            to="projects"
            onClick={() => setIsOpen((open) => !open)}
          >
            Projects
          </StyledMobileMenuItem>
          <StyledMobileMenuItem
            to="education"
            onClick={() => setIsOpen((open) => !open)}
          >
            Education
          </StyledMobileMenuItem>
          <StyledMobileMenuItem
            to="contact"
            onClick={() => setIsOpen((open) => !open)}
          >
            Contact Me
          </StyledMobileMenuItem>
        </StyledMobileMenu>
      )}
    </StyledNav>
  );
}

export default NavigationBar;