import '../public/App.css';

import {AppProps} from "next/app";
import {Box, Container, createTheme, ThemeProvider} from "@mui/material";
import React, {useEffect, useState} from "react";
import AppBar from "../src/components/AppBar/AppBar";
import Footer from "../src/components/Footer/Footer";
import Head from "next/head";
import {wrapper} from "../src/redux/store"
import {Provider} from "react-redux";
import {initDataManager} from "../src/utils/DataManager";

initDataManager();

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
  components: {
    MuiSelect: {
      styleOverrides: {
        outlined: {
          color: "#1976d2",
          border: "1px solid #1976d2"
        },
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          color: "#1976d2"
        },
      }
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: "#124c86",
          color: "white"
        },
      }
    },
  }
});

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  const [width, setWidth] = useState<number>(9999);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
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

        <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppBar
              tabs={NavTabs()}
          />

          <Container maxWidth='xl'>
            <Component {...pageProps} />
          </Container>

          <Box style={{height: '100px'}}></Box>

          <Footer />
        </ThemeProvider>
        </Provider>
      </div>
)
}

export default MyApp;