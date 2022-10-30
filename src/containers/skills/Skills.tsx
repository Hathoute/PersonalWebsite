import * as React from "react"
import TextBanner from "../../components/TextBanner/TextBanner";
import Experience from "../../components/Text/Experience";
import {Box, Divider, Typography} from "@mui/material";
import {Section, SectionElement} from "../../components/Section/Section";
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
  desc: {
    fontSize: 19,
  },
  divider: {
    height: '20px',
  },
  image: {
    minWidth: '100%',
    height: '440px',
    verticalAlign: 'top',
},
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    height: '440px',
    padding: '0px 100px 0px 100px',
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
  },
  sectionDesc: {
    marginTop: '10px',
    fontSize: 14,
    width: '100%',
  },
}

function Skills() {

  return (
    <div style={styles.pageContainer}>
      <Box sx={styles.titleContainer}>
        <Typography sx={styles.title}><Lang identifier="skills.title"/></Typography>
        <Typography sx={styles.desc}><Lang identifier="skills.subtitle"/></Typography>
      </Box>

      <Section color={styles.pageContainer.backgroundColor}>
        <SectionElement>
          <img src='/resources/images/laptop.jpg' style={styles.image}/>
        </SectionElement>
        <SectionElement>
          <Box sx={styles.sectionContainer}>
            <Typography sx={styles.sectionTitle}><Lang identifier="skills.desktop.title"/></Typography>
            <Typography sx={styles.sectionDesc}><Lang identifier="skills.desktop.desc"/></Typography>
          </Box>
        </SectionElement>
      </Section>

      <Section color={styles.pageContainer.backgroundColor}>
        <SectionElement>
          <Box sx={styles.sectionContainer}>
            <Typography sx={styles.sectionTitle}><Lang identifier="skills.mobile.title"/></Typography>
            <Typography sx={styles.sectionDesc}><Lang identifier="skills.mobile.desc"/></Typography>
          </Box>
        </SectionElement>
        <SectionElement>
          <img src='/resources/images/phone.jpg' style={styles.image}/>
        </SectionElement>
      </Section>

    </div>
  )
}

export default Skills;