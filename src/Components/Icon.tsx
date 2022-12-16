import * as React from 'react';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import { Button } from '@mui/material';
import { updateLanguageServiceSourceFile } from 'typescript';

interface QuantityButton{
  title: string;
  image: string;
  click: (title: string) => void
}

export default function Icons(props:QuantityButton) {
  return (

    <Box
      sx={{
        '& > :not(style)': {


        },
      }}
    >
      <Button onClick={() => props.click(props.title)}>
      <Icon sx={{ color: green[500] }}><img style={{width:"20px", paddingBottom:"1px"}} src={props.image} /></Icon>
      </Button>
    </Box>
  );
}
