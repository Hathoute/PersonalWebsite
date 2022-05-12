import * as React from "react"
import TextBanner from "../../components/TextBanner/TextBanner";
import Experience from "../../components/Text/Experience";
import {Box, Divider, Typography} from "@mui/material";
import {Section, SectionElement} from "../../components/Section/Section";

const laptop = require('../../ressources/images/laptop.jpg');
const phone = require('../../ressources/images/phone.jpg');

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
        <Typography sx={styles.title}>Skills</Typography>
        <Typography sx={styles.desc}>Software development</Typography>
      </Box>

      <Section color={styles.pageContainer.backgroundColor}>
        <SectionElement>
          <img src={laptop} style={styles.image}/>
        </SectionElement>
        <SectionElement>
          <Box sx={styles.sectionContainer}>
            <Typography sx={styles.sectionTitle}>Desktop Development</Typography>
            <Typography sx={styles.sectionDesc}>I developed many softwares for the Windows plateform using languages such as C#, Python, C++ and with frameworks like .NET and Qt5.</Typography>
          </Box>
        </SectionElement>
      </Section>

      <Section color={styles.pageContainer.backgroundColor}>
        <SectionElement>
          <Box sx={styles.sectionContainer}>
            <Typography sx={styles.sectionTitle}>Mobile Development</Typography>
            <Typography sx={styles.sectionDesc}>Using Java as the main language, I created good looking and lightweight mobile apps for the Android platform.</Typography>
          </Box>
        </SectionElement>
        <SectionElement>
          <img src={phone} style={styles.image}/>
        </SectionElement>
      </Section>

    </div>
  )
}

export default Skills;