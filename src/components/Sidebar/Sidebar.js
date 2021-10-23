import React, { useState } from "react";
import logo from "../../assets/about.png";
import Home from "../../assets/home-solid.svg";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const Container = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
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
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

const Logo = styled.div`
  width: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(90, 111, 182);;

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(HashLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

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
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;


const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  
  

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
      </Button>
      <SidebarContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar clicked={click} >
          <Item
            onClick={() => setClick(false)}
            smooth
            exact
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
