import * as React from 'react'
import {Box, Link, Typography} from "@mui/material";
import {getToolData, ProjectData} from "../../utils/DataManager";
import {createDecoratedLink} from "../../utils/ComponentFactory";


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    padding: '10px 10px'
  },
  left: {
    flexBasis: '34%',
    flexGrow: 0,
  },
  right: {
    flexBasis: '66%',
    flexGrow: 0,
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtTools: {
    fontSize: 17,
    textDecoration: 'none',
    paddingTop: '5px',
  },
  linkContainer: {
    paddingTop: '5px',
  },
  txtDescription: {
    fontSize: 17,
    textAlign: 'left' as 'left',
  },
};

function Project({title, tools, description, external} : ProjectData) {

  let toolsData = tools.split(',')
    .map(x => x.trim())
    .map(x => getToolData(x));

  return (
    <Box sx={styles.container}>
      <Box sx={styles.left}>
        <Typography sx={styles.txtTitle}>{title}</Typography>
        <Box sx={styles.txtTools}>
          {toolsData.map((t, ind) => {
            return [<Link key={t.identifier} href={t.homeUrl}>{t.fullName}</Link>, (ind === toolsData.length - 1) ? "" : ", "];
          })}
        </Box>
          {external !== undefined &&
              <Box sx={styles.linkContainer}>
                {createDecoratedLink(external.iconId, external.name, 18, external.url)}
              </Box>
          }
      </Box>
      <Box sx={styles.right}>
        <Typography sx={styles.txtDescription}>{description}</Typography>
      </Box>
    </Box>
  )
}

export default Project;
