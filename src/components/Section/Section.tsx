import * as React from 'react';
import {Box, Paper, Typography} from "@mui/material";


interface Props {
  children: JSX.Element | JSX.Element[],
  color: string,
}

const styles = {
  section: (color: string) => {
    return {
      display: 'flex',
      flexDirection: 'row' as 'row',
      backgroundColor: color,
    };
  },
  element: {
    flexGrow: 1,
    flexBasis: 0,
    minHeight: '100%',
  },
};

function Section({children, color} : Props) {
  React.Children.forEach(children, function (child : React.ReactElement) {
    if(child.type !== SectionElement) {
      // TODO: Add logging...
      console.warn("Section children must all be of type Section.Element");
    }
  })

  return (
    <Box style={styles.section(color)}>
      {children}
    </Box>
  )
}

interface ElementProps {
  children?: React.ReactNode,
}

function SectionElement({children}: ElementProps) {
  return (
    <div style={styles.element}>
      {children}
    </div>
  )
}

export { Section, SectionElement };