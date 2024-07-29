// import React from 'react'
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

function NavBar1() {
    return (
        <NavBarContainer>
                <Brick>
                    <Link to="/"><TextC>Home</TextC></Link>
                </Brick>
                {/* <Brick>
                    <Link to="/Services"><TextC>Services</TextC></Link>
                </Brick>
                <Brick>
                    <Link to="/About"><TextC>About</TextC></Link>
                </Brick>
                <Brick>
                    <Link to="/Portfolio"><TextC>Portfolio</TextC></Link>
                </Brick>
                <Brick>
                    <Link to="/Technology"><TextC>Technology</TextC></Link>
                </Brick>
                <Brick>
                    <Link to="/Blog"><TextC>Blog</TextC></Link>
                </Brick>
                <Brick>
                   <TextWhite><Link to="/Contact"><TextC>Contact</TextC></Link></TextWhite> 
                </Brick> */}
        </NavBarContainer>
    )
}

const NavBarContainer= styled.div`
    background-color: blue; 
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: flex-end;
`

const Brick= styled.div`
    border-right: 1px solid white;
    border-left: 1px solid white;
    text-color: white;
    padding: 0 10px; 
    background-color: blue;
    color: white;
`
const TextC= styled.text`
    color: white;
`
const TextWhite= styled.div`
    text-color: white;    
    color: white;
`

export default NavBar1;