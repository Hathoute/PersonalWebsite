import * as React from 'react';
import {Box, Paper, Typography} from "@mui/material";
import Lang from "../Lang/Lang";

interface ImgData {
  imgUrl: string,
  width: string,
  height: string,
}

interface Props {
  imgData?: ImgData,
  bgColor?: string,
  color: string,
  title: string,
  description: string,
}

const styles = {
  boxContainer: (img?: ImgData, bgColor?: string) => {
    return Object.assign({
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },
      img ? {
        height: img.height,
        backgroundImage: `url(${img.imgUrl})`,
      } : null,
      bgColor ? {
        backgroundColor: bgColor,
        padding: '30px 0px 30px 0px',
      } : null,
    );
  },
  title: (color: string) => {
    return {
      fontSize: 25,
      fontWeight: 'bold',
      color: color,
    };
  },
  description: (color: string) => {
    return {
      fontSize: 19,
      color: color,
    };
  },
};

function TextBanner({imgData, bgColor, title, color, description} : Props) {
  return (
    <Box style={styles.boxContainer(imgData, bgColor)}>
      <Typography style={styles.title(color)}>
        <Lang identifier={title}/>
      </Typography>
      <Typography style={styles.description(color)}>
        <Lang identifier={description}/>
      </Typography>
    </Box>
  )
}

export default TextBanner;