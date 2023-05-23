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

const Body = () => {
  const bgColor = useColorModeValue('light.bg', 'dark.bg');
  const textColor = useColorModeValue('light.text', 'dark.text');
  const primeColor = useColorModeValue('light.primary', 'dark.primary');
  const typestyle = {
    fontWeight: '600',
    fontSize: '30px',
  };

  const handleButtonClick = () => {
    window.location.href = 'src/Projectimg/Samarth-B-S-Resume.pdf';
  };

  return (
    <>
      <Box bg={bgColor} color={textColor} w="100%">
        <Flex
          mb="2rem"
          p={{ base: '1rem', md: '5rem' }}
          // p='5rem'
          alignContent="center"
          justifyContent="space-around"
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
            width="20%"
            height="20%"
            borderRadius="full"
            className="box"
         
          >
            <Image class="home-img" />
            <Image
              boxShadow="2xl"
              width="100%"
              height="100%"
              borderRadius="full"
           
              src={profile}
              alt="MyProfile"
              objectFit="cover"
              // position="absolute"

              zIndex={0}
              transition="transform 0.3s ease"
            />
          </Box>
          <Box
            p={1}
            // ml={3}
            ml={{ base: '5rem', md: '1rem' }}
            m={3}
            w='60%'
            h='60%'
            display="flex"
            alignContent="center"
            justifyContent="center"
            // border='1px solid red'
          >
            <VStack
              align="start"
              // p={1}
            >
              <Text fontSize="md" fontWeight="bold">
                HEY
                <span className="wave">👋</span>, I AM
              </Text>
              <Text fontSize="4xl" fontWeight="medium" id="user-detail-name" >
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
          
              <Text fontSize="md" color={primeColor} id="user-detail-intro" >
                A Full-Stack Web Developer based in India,
               
                working on frontend and  <br />backend technologies including
                JavaScript, typescript, 
                React, Redux, MongoDB, Express and NodeJS.
                <br />I like to craft solid and scalable products with great
                user experiences.
              </Text>

              <HStack spacing={4} gap={2} p={3}>
                <Link href="https://github.com/samarthbsss" target="_blank">
                  <Icon as={FaGithub} boxSize={6} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/samarthbsacharya/"
                  target="_blank"
                >
                  <Icon as={FaLinkedin} boxSize={6} />
                </Link>
                <Link
                  href="mailto:samarthbsacharya@example.com"
                  target="_blank"
                >
                  <Icon as={FaEnvelope} boxSize={6} />
                </Link>
                <Link href="tel:+8792801332" target="_blank">
                  <Icon as={FaPhone} boxSize={6} />
                </Link>
                <button
                  id="resume-button-1"
                  onClick={handleButtonClick}
                  width="20%"
                  height="20%"
                >
                  Open Resume
                </button>
              </HStack>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Body;
