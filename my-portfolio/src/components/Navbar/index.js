import React from 'react';
import { Nav, NavLink, NavContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavBarStyledComponents';




const Navbar=()=>{
    return (
    <Nav>
        <NavContainer>
            <NavLogo>Logo</NavLogo>
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