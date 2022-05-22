import * as React from "react"
import TextBanner from "../../components/TextBanner/TextBanner";
import Experience from "../../components/Text/Experience";
import {Box, Divider, Typography} from "@mui/material";
import {createDecoratedLinkFromTool} from "../../utils/ComponentFactory";

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
        <Typography sx={styles.title}>About</Typography>
      </Box>

    <Box sx={styles.contentContainer}>
      <Typography sx={styles.sectionTitle}>Me</Typography>
      <Typography component='span'>
        My name is Hamza Hathoute, 22 years old and I am a student pursuing an engineering degree in software development.<br/>
        My birth town is Agadir - Morocco, but currently living in Toulouse - France.<br/>
        I started programming from a young age, basically creating mods for Counter-Strike using {' '}
        <a style={styles.link} href='https://www.amxmodx.org/'>AMXX</a> and {' '}
        <a style={styles.link} href='https://www.sourcemod.net/'>SourceMod</a>.<br/>
      </Typography>

      <Typography sx={styles.sectionTitle}>This Website</Typography>
      <Typography component='span'>
        This website was built in May 2022<br/>
        The sole reason for building this website was to learn {createDecoratedLinkFromTool('react', 17)} {' '}
        and get familiar with fullstack development, since I was looking for an internship and I could only find
        web development internships.
      </Typography>
    </Box>
    </div>
  )
}

export default About;