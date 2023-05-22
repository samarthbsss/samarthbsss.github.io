import React, { useState } from 'react';

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

const Navbar = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const bgColor = useColorModeValue('light.navbg', 'dark.navbg');
  const textColor = useColorModeValue('light.navtxt', 'dark.navtxt');
  // const primeColor =useColorModeValue('light.primary','dark.primary');

  const toggleMobileNav = () => {
    setIsMobile(!isMobile);
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
        <Link href="/" fontSize="2xl" fontWeight="bold" class="nav-link home">
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
        // alignItems="left"
        flexGrow={1}
        // border='1px solid red'
      >
        <Stack
          //  border='1px solid red'
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 4, md: 8 }}
          align={{ base: 'center', md: 'center' }}
          pt={{ base: 4, md: 0 }}
        >
          <Link href="#about" fontWeight="medium"  class="nav-link about">
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
          <Link href="#git" fontWeight="medium">
            Git
          </Link>
          <Link
            href="https://drive.google.com/file/d/1jJgc5l24jQFELgsVzcxbbrViNVTSopeb/view"
            fontWeight="medium"
            target="_blank"
            class="nav-link resume"
          >
            Resume
          </Link>
        </Stack>
      </Box>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default Navbar;
