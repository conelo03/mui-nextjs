import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/components/Link';
import ProTip from '../src/components/ProTip';
import Copyright from '../src/components/Copyright';
import SignIn from './auth/sign-in';

export default function Home() {
  return (
   <SignIn/>
  );
}
