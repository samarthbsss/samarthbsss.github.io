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
  Button,
  ButtonGroup
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

import { AiOutlineDownload ,AiFillEye} from "react-icons/ai";
import Typewriter from 'typewriter-effect';
// import profile from '../Images/profile.jpg'
import profile from '../Images/removal.png';

import '../Css/body.css';

const resume =require('../Projectimg/Samarth-B-S-Resume.pdf')

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
      <Box bg={bgColor} color={textColor} w={"100%"} id='home'>
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
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            position={"relative"}
            // p={{ base: '1rem', md: '5rem' }}
            p={1}
            width={"20%"}
            height={"20%"}
            borderRadius={"full"}
            className="box"
         
          >
            <img class="home-img" alt='' src=''/>
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
            w={'60%'}
            h={'60%'}
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            // border='1px solid red'
            // id="user-detail-name"
          >
            <VStack
              align="start"
              // p={1}
            >
              <Text fontSize="md" fontWeight="bold">
                HEY
                <span className="wave">👋</span>, I AM
              </Text>
              <Text fontSize="4xl" fontWeight="medium" id="user-detail-name">
                Samarth B S
              </Text>
              <div style={typestyle}  >
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
              
                {/* button space */}
                <ButtonGroup spacing={"5"}>
                      <Button
                        id="resume-button-1"
                        as={"a"}
                        variant={"outline"}
                        borderRadius={"0"}
                        _hover={{ bg: "white", color: "#1B3C65" }}
                        size={"xs"}
                        href={resume} 
                        // href ='../Projectimg/Samarth-B-S-Resume.pdf'
                        target="_blank"
                        rel="noreferrer"
                        rightIcon={<AiOutlineDownload/>}
                        // download='../Projectimg/Samarth-B-S-Resume.pdf'
                        download={'Samarth-BS-Resume'}

                      >
                        Resume
                      </Button>
                      <Button
                        id="resume-button-2"
                        as={"a"}
                        variant={"outline"}
                        borderRadius={"0"}
                        _hover={{ bg: "white", color: "#1B3C65" }}
                        size={"xs"}
                        href='https://www.dropbox.com/s/c1dhnaj5tp7hnf2/Samarth-B-S-Resume.pdf?dl=0'
                        rel="noreferrer"
                        target="_blank"
                        rightIcon={<AiFillEye/>}
                          
                      >
                        Resume
                      </Button>
                    </ButtonGroup>
                    {/* button ButtonGroup */}
              </HStack>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Body;
