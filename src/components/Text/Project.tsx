import * as React from 'react'
import {Box, Link, Typography} from "@mui/material";
import {getToolData, ProjectData} from "../../utils/DataManager";
import {createDecoratedLink} from "../../utils/ComponentFactory";
import Lang from "../Lang/Lang";
import {getString} from "../../utils/LangsManager";
import {useSelector} from "react-redux";
import {IRootState} from "../../redux/store";


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
  // TODO: Remove lang from here and make external require only #url{} or #dlink{}
  const lang = useSelector((store: IRootState) => store.lang.lang);

  let toolsData = tools.split(',')
    .map(x => x.trim())
    .map(x => getToolData(x));

  return (
    <Box sx={styles.container}>
      <Box sx={styles.left}>
        <Typography sx={styles.txtTitle}><Lang identifier={title}/></Typography>
        <Box sx={styles.txtTools}>
          {toolsData.map((t, ind) => {
            return [<Link key={t.identifier} href={t.homeUrl}>{t.fullName}</Link>, (ind === toolsData.length - 1) ? "" : ", "];
          })}
        </Box>
          {external !== undefined &&
              <Box sx={styles.linkContainer}>
                {createDecoratedLink(external.iconId, getString(external.name, lang), 18, external.url)}
              </Box>
          }
      </Box>
      <Box sx={styles.right}>
        <Typography sx={styles.txtDescription}><Lang identifier={description}/></Typography>
      </Box>
    </Box>
  )
}

export default Project;
