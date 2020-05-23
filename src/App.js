import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Router, Location, Redirect } from '@reach/router';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline'

import { primaryColor, secondaryColor, whiteColor, blackColor } from './utils/styles/_vars'

import AppLayout from './layouts/AppLayout';

import { Dashboard, Sales, Reports, Settings, Profile, PageNotFound } from './pages'

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      sizeSmall: {
        borderRadius: 50,
        textTransform: 'inherit'
      }
    }
  },
  palette: {
    primary: {
      main: primaryColor,
      contrastText: whiteColor
    },
    secondary: {
      main: secondaryColor,
      contrastText: whiteColor
    },
    common: {
      black: blackColor
    }
  }
})

const RoutesContainer = posed.div({
  enter: {
    delay: 300, 
    beforeChildren: 300
  }
})

const AnimatedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RoutesContainer key={location.key}>
          <Router location={location}>{ children }</Router>
        </RoutesContainer>
      </PoseGroup>
    )}
  </Location>
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatedRouter>
        <AppLayout path='/app'>
          <Dashboard path='/' />
          <Sales path='/sales' />
          <Reports path='/reports' />
          <Settings path='/settings' />
          <Profile path='/profile' />
          <Redirect from='*' to='/404' noThrow />
        </AppLayout>
        <PageNotFound path='404' />
        <Redirect from='/' to='/app' noThrow />
        <Redirect from='*' to='/404' noThrow />
      </AnimatedRouter>
    </ThemeProvider>
  );
}

export default App;
