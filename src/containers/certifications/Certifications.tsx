import * as React from "react"
import TextBanner from "../../components/TextBanner/TextBanner";
import Experience from "../../components/Text/Experience";
import {Box, Divider, Typography} from "@mui/material";
import Certification from "../../components/Text/Certification";
import Lang from "../../components/Lang/Lang";
import {getCertificates} from "../../utils/DataManager";

const styles = {
  pageContainer: {
    backgroundColor: 'black',
    color: 'white',
  },
  titleContainer: {
    paddingTop: "40px",
    paddingBottom: "80px",
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  divider: {
    height: '20px',
  },
};

function Certifications() {

  return (
    <div style={styles.pageContainer}>
      <Box sx={styles.titleContainer}>
        <Typography sx={styles.title}><Lang identifier='certifications.title'/></Typography>
      </Box>

      {getCertificates().map(c => {
        return [<Certification key="cert" cert={c}/>, <div key="div" style={styles.divider}></div>];
      })}

    </div>
  )
}

export default Certifications;