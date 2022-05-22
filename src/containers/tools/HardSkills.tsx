import * as React from "react"
import TextBanner from "../../components/TextBanner/TextBanner";
import Experience from "../../components/Text/Experience";
import {Box, Button, Divider, Typography} from "@mui/material";
import Project from "../../components/Text/Project";
import {Link} from "react-router-dom";
import {getOrderedToolUsage, ProjectData, ToolUsage} from "../../utils/DataManager";
import Skill from "../../components/Text/Skill";
import {Section, SectionElement} from "../../components/Section/Section";

interface Props {
  expanded: boolean;
}

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
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: '20px',
  },
  divider: {
    height: '20px',
  },
};

function HardSkills({expanded} : Props) {

  const usages = getOrderedToolUsage();
  const maxFeatured = 3;
  let splitted : ToolUsage[][] = [[], [], []];

  for (let i = 0; i < usages.length; i++) {
    if(!expanded && i >= maxFeatured)
      break;

    splitted[i%3].push(usages[i]);
  }

  return (
    <div style={styles.pageContainer}>
      <Box sx={styles.titleContainer}>
        <Typography sx={styles.title}>Hard skills</Typography>
      </Box>

      {!expanded && <Typography sx={styles.subTitle}>Most used:</Typography>}

      <Section color='black'>
        <SectionElement>
          {splitted[0].map((tu, i) => {
            return ([
              <Skill key='skill' usage={tu}/>,
              <div key='div' style={styles.divider}></div>,
            ])
          })
          }
        </SectionElement>
        <SectionElement>
          {splitted[1].map((tu, i) => {
            return ([
              <Skill key='skill' usage={tu}/>,
              <div key='div' style={styles.divider}></div>,
            ])
          })
          }
        </SectionElement>
        <SectionElement>
          {splitted[2].map((tu, i) => {
            return ([
              <Skill key='skill' usage={tu}/>,
              <div key='div' style={styles.divider}></div>,
            ])
          })
          }
        </SectionElement>
      </Section>

      { !expanded &&
          <Button variant='outlined' component={Link} to="/tools">
              View all tools
          </Button>
      }

    </div>
  )
}

interface ExpandedProps {
  skills: ToolUsage[];
}
function ExpandedSkills({skills} : ExpandedProps) {
  return (
    <div>
      <Typography sx={styles.subTitle}>Other Projects:</Typography>
      {skills.map(tu => {
        return (
          [
            <Skill key='skill' usage={tu}/>,
            <div key='div' style={styles.divider}></div>,
          ]
        )
      })}
    </div>
  )
}

export default HardSkills;