import * as React from 'react'
import {Box, Typography} from "@mui/material";

interface Props {
  title: string,
  subtitle: string,
  description: string,
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    padding: '10px 10px'
  },
  left: {
    flexBasis: '34%',
    flexGrow: 0,
  },
  right: {
    flexBasis: '66%',
    flexGrow: 0,
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: '5px'
  },
  txtSubtitle: {
    fontSize: 20,
  },
  txtDescription: {
    fontSize: 17,
    textAlign: 'left' as 'left',
  },
};

function Experience({title, subtitle, description} : Props) {
  return (
    <Box style={styles.container}>
      <Box style={styles.left}>
        <Typography style={styles.txtTitle}>{title}</Typography>
        <Typography style={styles.txtSubtitle}>{subtitle}</Typography>
      </Box>
      <Box style={styles.right}>
        <Typography style={styles.txtDescription}>{description}</Typography>
      </Box>
    </Box>
  )
}

export default Experience;
