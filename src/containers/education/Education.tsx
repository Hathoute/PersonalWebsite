import * as React from "react"
import TextBanner from "../../components/TextBanner/TextBanner";
import Experience from "../../components/Text/Experience";
import {Box, Divider, Typography} from "@mui/material";
import Lang from "../../components/Lang/Lang";

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

function Education() {

  return (
    <div style={styles.pageContainer}>
      <Box sx={styles.titleContainer}>
        <Typography sx={styles.title}><Lang identifier="academics.title"/></Typography>
      </Box>

      <Experience
        title="academics.enseeiht.name"
        subtitle="academics.enseeiht.period"
        description="academics.enseeiht.desc" />

      <div style={styles.divider}></div>

      <Experience
        title="academics.cpge.name"
        subtitle="academics.cpge.period"
        description="academics.cpge.desc" />

      <div style={styles.divider}></div>

      <Experience
        title="academics.bac.name"
        subtitle="academics.bac.period"
        description="academics.bac.desc" />

      <div style={styles.divider}></div>
    </div>
  )
}

export default Education;