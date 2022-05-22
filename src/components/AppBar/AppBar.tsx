import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import {Box, Button, Container, createTheme, Toolbar} from '@mui/material';
import {Link} from "react-router-dom";
import Lang from "../Lang/Lang";
import {getIcon} from "../../utils/ResourcesManager";
import {useDispatch} from "react-redux";
import {changeLang} from "../../redux/lang/langSlice";

interface TabData {
  name: string,
  url: string,
}

interface Props {
  tabs: Array<TabData>,
}

const frIcon = getIcon("flags/fr.svg");
const gbIcon = getIcon("flags/gb.svg");

const styles = {
  flags: {
    padding: '5px',
    cursor: 'pointer',
  },
}

function MyAppBar({ tabs } : Props) {
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: 'flex' }}
        >
          Hamza Hathoute
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
          {tabs.map((tab) => (
            <Button
              key={tab.name}
              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold' }}
              component={Link}
              to={tab.url}
            >
              <Lang identifier={tab.name}/>
            </Button>
          ))}

          <img src={frIcon} height='18px' style={styles.flags} onClick={() => dispatch(changeLang('fr'))}></img>
          <img src={gbIcon} height='18px' style={styles.flags} onClick={() => dispatch(changeLang('en'))}></img>

        </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MyAppBar;
