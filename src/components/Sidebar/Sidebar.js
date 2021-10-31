import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/about.png";
import Home from "../../assets/home-solid.svg";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";


const Container = styled.div`
  z-index:100;
  position: fixed;
  padding:10vh 0vh;
  padding-right:0;
  .active {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  @media(max-width:767px)
  {
    padding:0
  }
  @media(max-height:550px)
  {
    padding:0
  }

  
`;

const Button = styled.button`
z-index:100;
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  @media(max-width:767px)
  {
    display:none;
  }
`;
const Buttons = styled.button`
z-index:100;
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  @media(min-width:768px)
  {
    display:none;
  }
`;
const SidebarContainer = styled.div`
z-index:100;
  background-color: var(--black);
  width: 3.5rem;
  height: 580px;
  border-radius: 0 30px 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
  @media(max-width:767px){
    width:0rem
  }
  @media(max-height:700px)
  {
    height:80vh
  }
`;

const Logo = styled.div`
z-index:100;

  img {
    width: 90%;
    height: auto;
  }
  cursor:pointer;
  @media(max-width:767px)
  {
    img{
      left:-27vw
    }
  }
  @media(max-height:700px)
  {
    
  }
`;

const SlickBar = styled.ul`
z-index:100;
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #02294f;
  padding-top:1rem;

  position: absolute;
  top: 3.5rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
  @media(max-width:767px)
  {
    width: ${(props) => (props.clicked ? "100vw" : "0rem")};
    display:${(props) => (props.clicked ? "flex" : "none")};
    
    img{
      display:${(props) => (props.clicked ? "block" : "none")};
      width: ${(props) => (props.clicked ? "100%" : "0rem")};
      position:relative;
    }
    
    position: relative;
    right:0;
    top: 2vw;
    font-size:80%;
    min-width:100vw;
    min-height:100vh;
    left:50vw;
  }
  @media(max-width:359px)
  {
    font-size:40%;
    padding:0;
  }
  
`;

const Item = styled(HashLink)`
z-index:100;
  text-decoration: none;
  color: var(--white);
  
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;
  padding-right:0rem;

  &:hover {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
  @media(max-width:359px)
  {
    img{
      width:0.5rem
    }
  }
`;

const Text = styled.span`
z-index:100;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
  
`;
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};


const Sidebar = () => {
  

  const [click, setClick] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleClick = () => {
    if (click === false) {
      setScrollPosition(window.pageYOffset); 
    }
    if (click === true) {
      setTimeout(() => window.scrollTo(0, scrollPosition),0);
    }
    setClick(!click);

  }

  const style={position:"relative",left:"0vw"}
  let domNode = useClickOutside(() => {
    setClick(false);
  });
  useEffect(() => {
    const body = document.querySelector('body');
    
    if(window.innerWidth<768)
    {
      body.style.overflow=click?'hidden':''
    }
    
  }, [click])
  

  return (
    <Container ref={domNode}>
      
      <div style={style}>
      <Buttons clicked={click} onClick={() => handleClick()}>
      </Buttons>
      </div>
      <SidebarContainer>
      <Button clicked={click} onClick={() => handleClick()}>
      </Button>
        
        <SlickBar clicked={click} >
        <Logo onClick={() => setClick(!click)}>
          <img src={logo} alt="logo" />
        </Logo>
          <Item
            onClick={() => setClick(false)}
            smooth
            exact="true"
            activeClassName="active"
            to="#bio"
          >
            <img src={Home} alt="Home" />
            <Text clicked={click}>Bio</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            smooth
            activeClassName="active"
            to="#experience"
          >
            <img src="https://img.icons8.com/ios-filled/64/000000/internship.png" alt=""/>
            <Text clicked={click}>Experience</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            smooth
            activeClassName="active"
            to="#works"
          >
            <img src="https://img.icons8.com/ios-filled/100/000000/work.png" alt="Calender" />
            <Text clicked={click}>Works</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            smooth
            to="#education"
          >
            <img src="https://img.icons8.com/external-becris-solid-becris/64/000000/external-education-literary-genres-becris-solid-becris.png" alt=""/>
            <Text clicked={click}>Education</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            smooth
            to="#courses"
          >
            <img src="https://img.icons8.com/ios-filled/50/000000/courses.png" alt=""/>
            <Text clicked={click}>Courses</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            smooth
            to="#achievements"
          >
            <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-achievement-statistical-analysis-flatart-icons-solid-flatarticons.png" alt=""/>
            <Text clicked={click}>Achievements</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            smooth
            to="#skills"
          >
            <img src="https://img.icons8.com/external-itim2101-fill-itim2101/64/000000/external-skill-human-resource-itim2101-fill-itim2101-1.png" alt=""/>
            <Text clicked={click}>Skills</Text>
            
          </Item>
         
        </SlickBar>
        
        
      </SidebarContainer>
      
    </Container>
  );
};

export default Sidebar;