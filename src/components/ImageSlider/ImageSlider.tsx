import * as React from 'react';
import {Box, Button, Paper, Typography} from "@mui/material";
import {useState} from "react";


interface Props {
  urls: string[]
}

const styles = {
  container: {
    position: 'relative' as 'relative',
    height: '100%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  prev: {
    position: 'absolute' as 'absolute',
    top: '50%',
    minWidth: '30px',
    minHeight: '30px',
    width: '30px',
    height: '45px',
    left: '0%',
    marginLeft: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textDecoration: 'none',
    cursor: 'pointer',
  },
  next: {
    position: 'absolute' as 'absolute',
    top: '50%',
    minWidth: '30px',
    minHeight: '30px',
    width: '30px',
    height: '45px',
    right: '0%',
    marginRight: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textDecoration: 'none',
  },
};

function ImageSlider({urls} : Props) {

  const [curImage, setCurImage] = useState(0);

  if(curImage >= urls.length || curImage < 0) {
    setCurImage((curImage + urls.length) % urls.length);
  }

  return (
    <Box sx={styles.container}>

      <img src={urls[curImage]} style={styles.image}/>
      <Button variant="outlined" sx={styles.next} onClick={() => setCurImage(curImage + 1)}>&#10095;</Button>
      <Button variant="outlined" sx={styles.prev} onClick={() => setCurImage(curImage - 1)}>&#10094;</Button>

    </Box>
  )
}

export default ImageSlider;