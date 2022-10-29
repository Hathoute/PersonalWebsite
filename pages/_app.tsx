import '../public/App.css';

import {AppProps} from "next/app";
import {Box, Container, createTheme, ThemeProvider} from "@mui/material";
import {initDataManager} from "../src/utils/DataManager";
import React, {useEffect, useState} from "react";
import AppBar from "../src/components/AppBar/AppBar";
import Footer from "../src/components/Footer/Footer";
import Head from "next/head";


const NavTabs = () => [
  {name: 'navbar.home', url: '/'},
  {name: 'navbar.projects', url: '/projects'},
  {name: 'navbar.tools', url: '/tools'},
  {name: 'navbar.about', url: '/about'},
]

const theme = createTheme({
  typography: {
    fontFamily: '\'JetBrains Mono\', Arial',
  },
});

let initialized = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  const [width, setWidth] = useState<number>(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    if(!initialized) {
      initDataManager();
      initialized = true;
    }

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])

  useEffect(() => {
    if(width < 768) {
      alert("Mobile version is not yet available.");
    }
  }, [width])

  return (
      <div className="App">
        <Head>
          <title>Hathoute - Personal Website</title>
        </Head>

        <ThemeProvider theme={theme}>
            <AppBar
                tabs={NavTabs()}
            />

            <Box style={{height: '100px'}}></Box>

            <Footer />
        </ThemeProvider>
        <Component {...pageProps} />
      </div>
)
}