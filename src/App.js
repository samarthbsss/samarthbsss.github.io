import React from 'react';
import {
  ChakraProvider,
  theme,
  CSSReset,
  extendTheme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Home from './Components/home';
import './App.css';

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  // bg='#4831D4'
  // color='#CCF381'
  colors: {
    light: {
      bg: "#4831D4", // Background color for light mode
      text: "#CCF381", // Text color for light mode
      primary: "#FFFFFF", // Primary color for light mode
      navbg:'white',
      navtxt:'black'
    },
    dark: {
      bg: "#1F1F1F", // Background color for dark mode
      text: "#FFFFFF", // Text color for dark mode
      // primary: "#3A8BFF", // Primary color for dark mode
      primary: "#FFFFFF", 
      navbg:'black',
      navtxt:'white',
    },
  },
});

function App() {

  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset/>
        <Home/>
     
     
    </ChakraProvider>
  );
}

export default App;
