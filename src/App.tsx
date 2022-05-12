import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Footer from "./components/Footer/Footer";
import TextBanner from "./components/TextBanner/TextBanner";
import {Typography} from "@mui/material";
import {Section, SectionElement} from "./components/Section/Section";
import Experience from "./components/Text/Experience";

function App() {
  return (
    <div className="App">

      <AppBar
        highlighted="Home"
        allTabs={["Home", "About"]}
        onSelect={(f) => console.log("clicked", f)}
      />


      <TextBanner
        imgData= {{imgUrl: "https://zilius-serv.com/template/assets/images/background_lg.jpg", width:'100%', height:'400px'}}
        title="Hi There! I’m Hamza HATHOUTE"
        description="Welcome to my personal website."
        color="white"
      />

      <Section
        color='blue'>
        <SectionElement>
          <TextBanner
          imgData= {{imgUrl: "https://zilius-serv.com/template/assets/images/background_lg.jpg", width:'100%', height:'200px'}}
          title="This is the Title"
          description="What a cool description :D"
          color="white" />
        </SectionElement>
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
