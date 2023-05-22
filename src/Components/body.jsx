import React from 'react';
import {
  useColorModeValue,
  Box,
  Text,
  Link,
  VStack,
  Flex,
  Image,
  HStack,
  Icon,
  // Button,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
// import profile from '../Images/profile.jpg'
import profile from '../Images/removal.png';
import '../Css/body.css';
// import { Button } from 'react-scroll';

const Body = () => {
  const bgColor = useColorModeValue('light.bg', 'dark.bg');
  const textColor = useColorModeValue('light.text', 'dark.text');
  const primeColor = useColorModeValue('light.primary', 'dark.primary');
  const typestyle = {
    fontWeight: '600',
    fontSize: '30px',
  };
  return (
    <>
      <Box bg={bgColor} color={textColor} w="100%">
        <Flex
          mb="7rem"
          p={{ base: '1rem', md: '5rem' }}
          // p='5rem'
          alignContent="center"
          justifyContent="center"
          display={{ base: 'block', md: 'flex' }}
          mt={{ base: '5rem', md: '5rem' }}
        >
          <Box
            display="flex"
            alignContent="center"
            justifyContent="center"
            position="relative"
            // p={{ base: '1rem', md: '5rem' }}
            p={1}
            // m={10}
            // border='1px solid red'
            width="20%"
            // width="100%"
            height="20%"
            borderRadius="full"
            // ml={3}
            className="box"
          >
            {/* <Image  class="home-img"/> */}
            <Image
             
              boxShadow="2xl"
              width="100%"
              height="100%"
              borderRadius="full"
              // border='1px solid red'
              // boxSize="20rem"
              src={profile}
              alt="MyProfile"
              objectFit="cover"
              // position="absolute"

              zIndex={0}
              transition="transform 0.3s ease"
             
            />
          </Box>
          <Box
            p={4}
            ml={3}
            m={5}
            display="flex"
            alignContent="center"
            justifyContent="center"
            // border='1px solid red'
          >
            <VStack
              align="start"
              // border='1px solid red'
              p={1}
            >
              <Text fontSize="md" fontWeight="bold" p={1}>
                HEY
                <span className="wave">👋</span>, I AM
              </Text>
              <Text fontSize="4xl" fontWeight="medium" id="user-detail-name">
                Samarth B S
              </Text>
              <div style={typestyle}>
                <Typewriter
                  options={{
                    loop: true,
                  }}
                  onInit={typewriter => {
                    typewriter
                      .typeString('I Am A Frontend Developer.')
                      .pause(2000)
                      .deleteAll()
                      .typeString('I Am A Backend Developer.')
                      .pause(2000)
                      .deleteAll()
                      .typeString('I Am A Fullstack Developer.')
                      .pause(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>
              {/* <Text fontSize="xl" fontWeight="medium">
                Full Stack Developer
              </Text> */}
              <Text fontSize="md" color={primeColor} id="user-detail-intro">
                A Full-Stack Web Developer based in India,
                <br />
                working on frontend and backend technologies including
                JavaScript, typescript, <br />
                React, Redux, MongoDB, Express and NodeJS.
                <br />I like to craft solid and scalable products with great
                user experiences.
              </Text>

              <HStack spacing={4} gap={2} p={3}>
                <Link
                  href="https://github.com/samarthbsss"
                  target="_blank"
                  id="contact-github"
                >
                  <Icon as={FaGithub} boxSize={6} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/samarthbsacharya/"
                  target="_blank"
                  id="contact-linkedin"
                >
                  <Icon as={FaLinkedin} boxSize={6} />
                </Link>
                <Link
                  href="mailto:samarthbsacharya@example.com"
                  target="_blank"
                  id="contact-phone"
                >
                  <Icon as={FaEnvelope} boxSize={6} />
                </Link>
                <Link href="tel:+8792801332" target="_blank" id="contact-email">
                  <Icon as={FaPhone} boxSize={6} />
                </Link>
{/*                 
                <Link>
                <Button id="resume-button-1" varient='ghost'>
                  Resume
                </Button>
                </Link> */}
                 {/* <Link>
                <Button id="resume-button-2" varient='ghost'>
                  Resume
                </Button>
                </Link> */}
              </HStack>

            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Body;
