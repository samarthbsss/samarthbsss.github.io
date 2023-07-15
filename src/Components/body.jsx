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
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

import profile from '../Images/removal.png';

// import '../Css/body.css';

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
      <Box bg={bgColor} color={textColor} w={'100%'} id="home">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          p={{ base: '1rem', md: '5rem' }}
    align="center"
          mt={{ base: '5rem', md: '5rem' }} >

          <Box
            display={'flex'}
            justifyContent={'center'}
            position='relative'
            p={1}
            width={{ base: '60%', md: '20%' }}
          height={{ base: '60%', md: '20%' }}
            borderRadius={'full'}
            className="box"
mb={{ base: '2rem', md: '0' }}
          >
            <img class="home-img" alt="" src="" />
            <Image
              boxShadow="2xl"
              width="100%"
              height="100%"
              borderRadius="full"
              src={profile}
              alt="MyProfile"
              objectFit="cover"
              zIndex={0}
              transition="transform 0.3s ease"
            />
          </Box>
          <Box
            p={1}
               ml={{ base: '0', md: '1rem' }}
          w={{ base: '100%', md: '60%' }}
      
        
            display={'flex'}
        
            justifyContent={'center'}
          >
            <VStack align="start" spacing={4}>
              <Text fontSize="md" fontWeight="bold">
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
              <Text fontSize="md" color={primeColor}>
                A Full-Stack Web Developer based in India, working on frontend
                and <br />
                backend technologies including JavaScript, typescript, React,
                Redux, MongoDB, Express and NodeJS.
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
              </HStack>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Body;
