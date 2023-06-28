import React, { useState } from 'react';
import '../Css/main.css'

import {
  useColorModeValue,
  Flex,
  Box,
  Spacer,
  IconButton,
  Stack,
  Link,
} from '@chakra-ui/react';

// import { Link } from "react-scroll";
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import resume from '../Projectimg/Samarth-B-S-Resume.pdf';

const Navbar = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const bgColor = useColorModeValue('light.navbg', 'dark.navbg');
  const textColor = useColorModeValue('light.navtxt', 'dark.navtxt');
  // const primeColor =useColorModeValue('light.primary','dark.primary');


  const toggleMobileNav = () => {
    setIsMobile(!isMobile);
  };
  // const resume='https://drive.google.com/uc?export=download&id=1HklUsW0C5MbHEDLaL1QipKABBXI3NkvC';
  // const resume='https://drive.google.com/file/d/1HklUsW0C5MbHEDLaL1QipKABBXI3NkvC/view?usp=sharing'
  
  const handleDownload = () => {
    window.open(resume, '_blank');
    const link = document.createElement('a');
    link.href = resume;
    link.target = '_blank';
    link.download = 'Samarth-B-S-Resume.pdf';
    link.click();
  };  

 



  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color={textColor}
      bg={bgColor}
      position="fixed"
      width="100%"
      top="0%"
      boxShadow="xl"
      id="nav-menu"
    >
      <Box>
        <Link href="/" fontSize="2xl" fontWeight="bold" 
        class="nav-link home"
        >
          Samarth
        </Link>
      </Box>
      <Spacer />
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          icon={<HamburgerIcon />}
          onClick={toggleMobileNav}
          aria-label="Toggle Navigation"
          variant="outline"
        />
      </Box>
      <Box
        display={{ base: isMobile ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
       
        flexGrow={1}
    
      >
        <Stack
          //  border='1px solid red'
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 4, md: 8 }}
          align={{ base: 'center', md: 'center' }}
          pt={{ base: 4, md: 0 }}
        >
          <Link href="#about" fontWeight="medium" class="nav-link about">
            About
          </Link>
          <Link href="#projects" fontWeight="medium" class="nav-link projects"> 
            Projects
          </Link>
          <Link href="#contact" fontWeight="medium" class="nav-link contact">
            Contact
          </Link>
          <Link href="#skills" fontWeight="medium"  class="nav-link skills" >
            Skills
          </Link>
          <Link href="#git" fontWeight="medium" class="gitt">
            Git
          </Link>

          {/* <Link
            id="resume-link-1"
        
            href={resume}
            fontWeight="medium"
            target="_blank"
          
            download={'Samarth-BS-Resume'}
           rel="noreferrer"
          > */}
            {/* <button id="resume-button-1"
              class="nav-link resume"
              // onClick={handleDownload}
              ref={(button) => {
                if (button) {
                  button.addEventListener('click', handleDownload);
                }
              }}
                    // target="_blank"
              // href={resume}
              // download={'Samarth-BS-Resume'}
            >
            Resume
            </button>
           */}
          {/* </Link> */}

          <div id="resume-button-1" onClick={handleDownload}  class="nav-link resume">
              {/* <a id="resume-link-1" class="button button--flex" target="_blank"> */}
                Resume
                {/* <i class="uil uil-download-alt button__icon"> */}

                {/* </i> */}
              {/* </a> */}
            </div>
       
        </Stack>
      </Box>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default Navbar;
