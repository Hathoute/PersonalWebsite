import * as React from 'react';
import {Box, Typography} from "@mui/material";

const styles = {
  box: {
    width: '100%',
    backgroundColor: 'grey',
  },
  text: {
    padding: '10px 10px',
  },
}

function Footer() {
  return (
    <Box style={styles.box} >
      <Typography style={styles.text}>
        Made by Hathoute
      </Typography>
    </Box>
  );
}

export default Footer;