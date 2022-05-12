import * as React from "react"
import TextBanner from "../../components/TextBanner/TextBanner";
import Experience from "../../components/Text/Experience";
import {Box, Divider, Typography} from "@mui/material";

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
        <Typography sx={styles.title}>Academics</Typography>
      </Box>

      <Experience
        title="ENSEEIHT Toulouse"
        subtitle="September 2020 - Now"
        description="After the two-years in CPGE, I was admitted into ENSEEIHT's numerical science department." />

      <div style={styles.divider}></div>

      <Experience
        title="CPGE Moulay Youssef"
        subtitle="September 2018 - June 2020"
        description="I chose to complete my studies in CPGE, since it was the only gateway to a good university in the field of Computer science." />

      <div style={styles.divider}></div>

      <Experience
        title="Al Imaniat School"
        subtitle="September 2015 - June 2018"
        description="I got my bachelor degree in the field of Math science, in Morocco." />

      <div style={styles.divider}></div>
    </div>
  )
}

export default Education;