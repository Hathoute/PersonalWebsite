import * as React from "react"
import {Box, Button, Typography} from "@mui/material";
import Project from "../../components/Text/Project";
import Link from 'next/link'
import {getProjects, ProjectData} from "../../utils/DataManager";
import Lang from "../../components/Lang/Lang";

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

function Projects({expanded} : Props) {

  const projects = getProjects();

  return (
    <div style={styles.pageContainer}>
      <Box sx={styles.titleContainer}>
        <Typography sx={styles.title}><Lang identifier="projects.title"/></Typography>
      </Box>

      <Typography sx={styles.subTitle}><Lang identifier="projects.featured"/></Typography>

      {projects.featured.map((p, i) => {
        return (
          [<Project
            key='project'
            title={p.title}
            tools={p.tools}
            description={p.description}
            external={p.external}
          />,
            <div key='div' style={styles.divider}></div>,
          ]
        )
      })}

      { !expanded &&
          <Button variant='outlined' component={Link} href="/projects">
              <Lang identifier="common.view_all"/>
          </Button>
      ||
        <ExpandedProjects projects={projects.remaining}/>
      }

      <div style={styles.divider}></div>

    </div>
  )
}

interface ExpandedProps {
  projects: ProjectData[];
}
function ExpandedProjects({projects} : ExpandedProps) {
  return (
    <div>
      <Typography sx={styles.subTitle}><Lang identifier="projects.other"/></Typography>
      {projects.map((p, i) => {
        return (
          [<Project
            key='project'
            title={p.title}
            tools={p.tools}
            description={p.description}
            external={p.external}
          />,
            <div key='div' style={styles.divider}></div>,
          ]
        )
      })}
    </div>
  )
}

export default Projects;