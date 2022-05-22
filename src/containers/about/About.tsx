import * as React from "react"
import TextBanner from "../../components/TextBanner/TextBanner";
import Experience from "../../components/Text/Experience";
import {Box, Divider, Typography} from "@mui/material";
import {createDecoratedLinkFromTool} from "../../utils/ComponentFactory";
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
  contentContainer: {
    textAlign: 'left',
    textDecoration: 'none',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '30px',
    marginBottom: '5px',
  },
  link: {
    color: 'inherit'
  },
  divider: {
    height: '20px',
  },
};

function About() {

  return (
    <div style={styles.pageContainer}>
      <Box sx={styles.titleContainer}>
        <Typography sx={styles.title}><Lang identifier="about.title"/></Typography>
      </Box>

    <Box sx={styles.contentContainer}>
      <Typography sx={styles.sectionTitle}><Lang identifier="about.me.title"/></Typography>
      <Typography component='span'><Lang identifier="about.me.content"/></Typography>

      <Typography sx={styles.sectionTitle}><Lang identifier="about.website.title"/></Typography>
      <Typography component='span'><Lang identifier="about.website.content"/></Typography>
    </Box>
    </div>
  )
}

export default About;