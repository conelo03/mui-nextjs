import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeaderTitle from '../HeaderTitle';

const theme = createTheme()

interface BaseContainerType {
  children: any
  title: string
}

const BaseContainer = (props: BaseContainerType) => {
  const { children, title } = props
  return (
    <ThemeProvider theme={theme}>
      <HeaderTitle title={title} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {children}
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default BaseContainer