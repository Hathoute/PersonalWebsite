import * as React from 'react'
import {Box, Typography} from "@mui/material";
import Lang from "../Lang/Lang";

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
    <Box sx={styles.container}>
      <Box sx={styles.left}>
        <Typography sx={styles.txtTitle}><Lang identifier={title}/></Typography>
        <Typography sx={styles.txtSubtitle}><Lang identifier={subtitle}/></Typography>
      </Box>
      <Box sx={styles.right}>
        <Typography sx={styles.txtDescription}><Lang identifier={description}/></Typography>
      </Box>
    </Box>
  )
}

export default Experience;
