import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import {Box, Button, Container, createTheme, Toolbar} from '@mui/material';
import {Link} from "react-router-dom";

interface TabData {
  name: string,
  url: string,
}

interface Props {
  tabs: Array<TabData>,
}

function MyAppBar({ tabs } : Props) {
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
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'right' }}>
          {tabs.map((tab) => (
            <Button
              key={tab.name}
              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold' }}
              component={Link}
              to={tab.url}
            >
              {tab.name}
            </Button>
          ))}
        </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MyAppBar;
