import * as React from 'react'
import {Box, Typography} from "@mui/material";
import Lang from "../Lang/Lang";
import {CertificationData} from "../../utils/DataManager";

interface Props {
  cert: CertificationData,
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

function Certification({cert} : Props) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.left}>
        <Typography sx={styles.txtTitle}><Lang identifier={cert.org}/></Typography>
        <Typography sx={styles.txtSubtitle}><Lang identifier={cert.obtained}/></Typography>
        <Typography sx={styles.txtSubtitle}><Lang identifier={cert.expiring}/></Typography>
      </Box>
      <Box sx={styles.right}>
        <Typography sx={styles.txtDescription}><Lang identifier={cert.name}/></Typography>
      </Box>
    </Box>
  )
}

export default Certification;
