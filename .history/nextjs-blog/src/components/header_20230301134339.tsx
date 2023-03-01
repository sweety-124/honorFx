import React from 'react';

//material UI
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container,Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

const RootStyle = styled(Container)(({ theme }) => ({
  margin: '40px',
  display: 'flex',
  justifyContent: 'center'
}));



function Header(props: any) {
  const classes = useStyles();
  const { nextLink, prevLink } = props;
  return (
    <RootStyle maxWidth="xl">
      
    </RootStyle>
  );
}

export default Header;

//styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backButton: {
      marginRight: '30px',
      borderColor: 'black'
    }
  })
);
