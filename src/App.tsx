import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Footer from "./components/Footer/Footer";
import TextBanner from "./components/TextBanner/TextBanner";
import {Box, Container, createTheme, ThemeProvider, Typography} from "@mui/material";
import {Section, SectionElement} from "./components/Section/Section";
import Experience from "./components/Text/Experience";
import Home from "./containers/home/Home";
import Education from "./containers/education/Education";
import Skills from "./containers/skills/Skills";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Projects from "./containers/projects/Projects";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HardSkills from "./containers/tools/HardSkills";
import {initDataManager} from "./utils/DataManager";
import About from "./containers/about/About";
import {getString, initializeLang} from "./utils/LangsManager";


const NavTabs = () => [
  {name: 'navbar.home', url: '/'},
  {name: 'navbar.projects', url: '/projects'},
  {name: 'navbar.tools', url: '/tools'},
  {name: 'navbar.about', url: '/about'},
]

const Root = [
  <Home key='root_home'/>,
  <Education key='root_educ'/>,
  <Skills key='root_skills'/>,
  <Projects key='root_projects' expanded={false}/>,
  <HardSkills key='root_tools' expanded={false}/>,
  <About key='root_about'/>,
]

const theme = createTheme({
  typography: {
    fontFamily: '\'JetBrains Mono\', Arial',
  },
});

let initialized = false;

function App() {

  let [currentLang, setCurrentLang] = useState('en');
  initializeLang(currentLang, setCurrentLang);

  if(!initialized) {
    initDataManager();
    initialized = true;
  }

  return (
      <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <AppBar
          tabs={NavTabs()}
        />

        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={Root}/>
            <Route path="/projects" element={<Projects expanded={true}/>}/>
            <Route path="/tools" element={<HardSkills expanded={true}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/*" element={Root}/>
          </Routes>
        </Container>
      </BrowserRouter>

        <Box style={{height: '100px'}}></Box>

        <Footer />
      </ThemeProvider>
      </div>
  );
}


export default App;
