import * as React from 'react'
import {Box, Typography} from "@mui/material";
import {getString} from "../../utils/LangsManager";
import {createLang} from "../../utils/ComponentFactory";

interface Props {
  identifier: string,
}

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
    paddingBottom: '5px'
  },
  txtSubtitle: {
    fontSize: 20,
  },
  txtDescription: {
    fontSize: 17,
    textAlign: 'left' as 'left',
  },
};

function Lang({identifier} : Props) {
  return createLang(identifier);
}

export default Lang;
