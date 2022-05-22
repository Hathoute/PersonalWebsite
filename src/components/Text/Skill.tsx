import * as React from 'react'
import {Box, Button, Link, Typography} from "@mui/material";
import {createDecoratedLink} from "../../utils/ComponentFactory";
import {getToolData, ProjectData, ToolUsage} from "../../utils/DataManager";
import {useState} from "react";
import Lang from "../Lang/Lang";


const styles = {
  container: {
    padding: '10px 10px',
  },
  titleContainer: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'medium',
  },
  projectsContainer: {
    textDecoration: 'none',
    paddingTop: '5px',
  },
  project: {
    fontSize: 16,
    fontWeight: 300,
  },
  button: {
    padding: 0,
  },
};

interface Props {
  usage: ToolUsage;
}

function Skill({usage} : Props) {

  const [expanded, setExpanded] = useState(false);

  const displayedProjects = usage.projects.slice(0, 4);
  const otherProjects = usage.projects.slice(4);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.titleContainer}>
        {createDecoratedLink(
          usage.data.icon.split(':')[1],
          usage.data.fullName,
          24,
          usage.data.homeUrl
        )}
      </Box>
      <Typography sx={styles.subtitle}><Lang identifier="tools.used_in"/></Typography>

      <Box sx={styles.projectsContainer}>
        {displayedProjects.map((p,i) => {
          return <Typography key={i} sx={styles.project}><Lang identifier={p.title}/></Typography>
        })}
        {otherProjects.length > 0 && (!expanded &&
            <Button variant="text" component={Link} sx={styles.button} onClick={() => setExpanded(true)}><Lang identifier="common.more"/></Button>
          ||
            <>{otherProjects.map((p,i) => {
              return <Typography key={i} sx={styles.project}><Lang identifier={p.title}/></Typography>
            })}
                <Button variant="text" component={Link} sx={styles.button} onClick={() => setExpanded(false)}><Lang identifier="common.less"/></Button>
            </>
        )}
      </Box>
    </Box>
  )
}

export default Skill;
