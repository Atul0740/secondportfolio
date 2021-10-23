import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Bio from "./components/Pages/Bio";
import Experience from "./components/Pages/Experience";
import Works from "./components/Pages/Works";
import Education from "./components/Pages/Education";
import Courses from "./components/Pages/Courses";
import Achievement from "./components/Pages/Achievement";
import Skills from "./components/Pages/Skills";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {

  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Bio/>
          <Experience></Experience>
          <Works></Works>
          <Education></Education>
          <Courses></Courses>
          <Achievement></Achievement>
          <Skills></Skills>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
