import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import {Box, Button, Container, Toolbar} from '@mui/material';

interface Props {
  allTabs: Array<string>,
  highlighted: string,
  onSelect: (tab: string) => void,
}

function MyAppBar({ allTabs, highlighted, onSelect } : Props) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          MyPersonalBlog
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {allTabs.map((tab) => (
            <Button
              key={tab}
              sx={{ my: 2, color: 'white', display: 'block', fontWeight: tab === highlighted ? 'bold' : 'normal' }}
              onClick={() => onSelect(tab)}
            >
              {tab}
            </Button>
          ))}
        </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MyAppBar;
