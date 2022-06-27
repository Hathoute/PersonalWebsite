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
  subsubTitle: {
    fontSize: 13,
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

function ToolBox() {

  return (
    <div style={styles.pageContainer}>
      <Box sx={styles.titleContainer}>
        <Typography sx={styles.title}><Lang identifier="toolbox.title"/></Typography>
        <Typography sx={styles.subsubTitle}><Lang identifier="toolbox.notice"/></Typography>
      </Box>

    <Box sx={styles.contentContainer}>
      <Typography sx={styles.sectionTitle}><Lang identifier="toolbox.streaming.title"/></Typography>
      <Typography><a style={styles.link} href="http://plex.hathoute.com/">Plex</a></Typography>
      <Typography><a style={styles.link} href="http://sonarr.hathoute.com/">Sonarr (TV Shows)</a></Typography>
      <Typography><a style={styles.link} href="http://radarr.hathoute.com/">Radarr (Movies)</a></Typography>
      <Typography><a style={styles.link} href="http://jackett.hathoute.com/">Jackett</a></Typography>
      <Typography><a style={styles.link} href="https://www.pastatool.com/">PastaTool</a></Typography>

      <Typography sx={styles.sectionTitle}><Lang identifier="toolbox.torrent.title"/></Typography>
      <Typography><a style={styles.link} href="http://torrent.hathoute.com/">Deluge BitTorrent</a></Typography>

      <Typography sx={styles.sectionTitle}><Lang identifier="toolbox.uploading.title"/></Typography>
      <Typography><a style={styles.link} href="http://uploader.hathoute.com/">Simple file sharing service</a></Typography>
      <Typography><a style={styles.link} href="http://textcollab.hathoute.com/">Realtime text collaboration</a></Typography>

    </Box>
    </div>
  )
}

export default ToolBox;