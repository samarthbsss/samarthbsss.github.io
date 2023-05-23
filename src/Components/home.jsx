import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './nav';
import Body from './body';

import ScrollToTopButton from './button';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Git from './git';
import Projects from './project';

import TechStacks from './teck';

const Home = () => {
  return (
    <>
      <Box  position="relative">
        <Body />
        <About />
        {/* <ProfilePage/> */}
        <Projects />
        <TechStacks />
        <Git />
        <Contact />
        = <Footer />
      </Box>
      <Navbar />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
