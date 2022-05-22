import * as React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {createDecoratedLinkFromTool, createIconLink} from "../../utils/ComponentFactory";

const styles = {
  box: {
    width: '100%',
    backgroundColor: '#124c86',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100px',
    alignItems: 'center',
    color: 'white',
  },
  text: {
    padding: '10px 10px',
  },
  left: {
    height: 'fit-content',
  },
  right: {
    display: 'flex',
    gap: '10px',
    height: 'fit-content',
  }
}

function Footer() {
  return (
    <Box style={styles.box}>
      <Container style={styles.container}>
        <Box style={styles.left}>
          <Typography component='span' style={styles.text}>
            Built using {createDecoratedLinkFromTool('react', 17)}
          </Typography>
        </Box>
        <Box style={styles.right}>
          {createIconLink('github', 20, 'https://github.com/Hathoute')}
          {createIconLink('linkedin', 20, 'https://www.linkedin.com/in/hathoute/')}
          {createIconLink('gmail', 20, 'mailto://hathoutehamza@gmail.com')}
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;