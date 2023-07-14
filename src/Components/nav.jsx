import React, { useState } from 'react';
import '../Css/main.css';
import {
  useBreakpointValue,
  useColorModeValue,
  Flex,
  Box,
  Spacer,
  IconButton,
  Stack,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import resume from '../Projectimg/Samarth-B-S-Resume.pdf';

const Navbar = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const bgColor = useColorModeValue('light.navbg', 'dark.navbg');
  const textColor = useColorModeValue('light.navtxt', 'dark.navtxt');
  // const primeColor =useColorModeValue('light.primary','dark.primary');
  const isButtonVisible = useBreakpointValue({ base: false, md: true });

  const toggleMobileNav = () => {
    setIsMobile(!isMobile);
  };

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
        <Link href="/" fontSize="2xl" fontWeight="bold" className="nav-link home">
          Samarth
        </Link>
      </Box>
      <Spacer />
      <Box display={{ base: 'flex', md: 'none' }}>
        <IconButton
          icon={<HamburgerIcon />}
          onClick={toggleMobileNav}
          aria-label="Toggle Navigation"
          variant="outline"
        />{
          !isButtonVisible &&(
            <ColorModeSwitcher justifySelf="flex-end"/>

          )
        }
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
          <Link href="#about" fontWeight="medium" className="nav-link about">
            About
          </Link>
          <Link href="#projects" fontWeight="medium" className="nav-link projects">
            Projects
          </Link>
          <Link href="#contact" fontWeight="medium" className="nav-link contact">
            Contact
          </Link>
          <Link href="#skills" fontWeight="medium" className="nav-link skills">
            Skills
          </Link>
          <Link href="#git" fontWeight="medium" className="gitt">
            Git
          </Link>
          <div
            id="resume-button-1"
            onClick={handleDownload}
            className="nav-link resume"
          >
            Resume
          </div>
        </Stack>
      </Box>
      {
        isButtonVisible && (
          <ColorModeSwitcher justifySelf="flex-end"/>

        )
      }
    </Flex>
  );
};

export default Navbar;
