import React from 'react';
import { Nav, NavLink, NavContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileMenuLinks, MobileNavLogo, MobileLink } from './NavBarStyledComponents';
import {DiCssdeck} from 'react-icons/di';
import {FaBars} from 'react-icons/fa';
import { useTheme } from 'styled-components';




const Navbar=()=>{

    const [open,setOpen]= React.useState(false);
    const theme= useTheme();
    return (
    <Nav>
        <NavContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
            <MobileIcon>
               <FaBars
               onClick={()=>{
                setOpen(!open);
               }}/>
            </MobileIcon>
            <NavItems>
                <NavLink href="#about">About</NavLink>
                <NavLink href='#projects'>Projects</NavLink>
                <NavLink href='#experience'>Experience</NavLink>
                <NavLink href='#skills'>Skills</NavLink>
                <NavLink href='#education'>Education</NavLink>
            </NavItems>
            <ButtonContainer>
                <GitHubButton>Github Profile</GitHubButton>
            </ButtonContainer>
        {
            open && 
            <MobileMenu open={open}> 
             <MobileLink href="#about" 
             onClick={() => {
             setOpen(!open);
            }}>About</MobileLink>

            <MobileLink href='#projects' 
            onClick={() => {
             setOpen(!open);
            }}>Projects</MobileLink>

            <MobileLink href='#experience' 
            onClick={() => {
             setOpen(!open);
            }}>Experience</MobileLink>

            <MobileLink href='#skills' 
            onClick={() => {
             setOpen(!open);
            }}>Skills</MobileLink>

            <MobileLink href='#education' 
            onClick={() => {
             setOpen(!open);
            }}>Education</MobileLink>

            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href="/" target="_blank">
                Github Profile
            </GitHubButton>
            </MobileMenu> 
        }
        </NavContainer>
    </Nav>
    );
}

export default Navbar;