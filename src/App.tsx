import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Footer from "./components/Footer/Footer";
import TextBanner from "./components/TextBanner/TextBanner";
import {Typography} from "@mui/material";
import {Section, SectionElement} from "./components/Section/Section";
import Experience from "./components/Text/Experience";
import Home from "./containers/home/Home";
import Education from "./containers/education/Education";
import Skills from "./containers/skills/Skills";

function App() {
  return (
    <div className="App">

      <AppBar
        highlighted="Home"
        allTabs={["Home", "About"]}
        onSelect={(f) => console.log("clicked", f)}
      />

      <Home/>

      <Education/>

      <Skills/>

      <Section
        color='blue'>
        <SectionElement>
          <Experience
            title="ENSEEIHT Toulouse"
            subtitle="September 2020 - Now"
            description="After the two-years in CPGE, I was admitted into ENSEEIHT's numerical science department." />
        </SectionElement>
        <SectionElement>
          <Typography>Testing</Typography>
        </SectionElement>
      </Section>
      <Experience
        title="ENSEEIHT Toulouse"
        subtitle="September 2020 - Now"
        description="After the two-years in CPGE, I was admitted into ENSEEIHT's numerical science department." />
      <Experience
        title="ENSEEIHT Toulouse"
        subtitle="September 2020 - Now"
        description="After the two-years in CPGE, I was admitted into ENSEEIHT's numerical science department." />
      <Experience
        title="ENSEEIHT Toulouse"
        subtitle="September 2020 - Now"
        description="After the two-years in CPGE, I was admitted into ENSEEIHT's numerical science department." />
      <Experience
        title="ENSEEIHT Toulouse"
        subtitle="September 2020 - Now"
        description="After the two-years in CPGE, I was admitted into ENSEEIHT's numerical science department." />

      <Footer />
    </div>
  );
}

export default App;
