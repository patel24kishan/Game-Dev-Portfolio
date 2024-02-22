import React from 'react';
import { Nav, NavLink, NavContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavBarStyledComponents';
import {DiCssdeck} from 'react-icons/di';



const Navbar=()=>{
    return (
    <Nav>
        <NavContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
            <MobileIcon>Icon</MobileIcon>
            <NavItems>
                <NavLink href="#about">About</NavLink>
                <NavLink href='#skills'>Skills</NavLink>
                <NavLink href='#experience'>Experience</NavLink>
                <NavLink href='#projects'>Projects</NavLink>
                <NavLink href='#education'>Education</NavLink>
            </NavItems>
            <ButtonContainer>
                <GitHubButton>Github Profile</GitHubButton>
            </ButtonContainer>
        </NavContainer>
    </Nav>
            );
}

export default Navbar;