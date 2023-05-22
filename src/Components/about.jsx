import React from 'react';
import { useColorModeValue, Box, Image, Text, Heading } from '@chakra-ui/react';
// import gif from '../Images/gif.gif';
import coding from '../Images/coding.gif';
// import work from '../Images/work.gif';
import '../Css/main.css'

const About = () => {
  const bgColor = useColorModeValue('light.bg', 'nav.bg');
  // const textColor = useColorModeValue('light.text', 'dark.text');
  // const primeColor = useColorModeValue('light.primary', 'dark.primary');
  return (
    <>
      {/* <Heading
      // as="h2"
       size="2xl" textAlign="center" 
    //  mb={12}
      border='1px solid red' >About me</Heading> */}
      <Box
        alignContent="center"
        justifyContent="space-around"
        padding="4rem"
        mt={2}
        mr={3}
      
        // border="1px solid red"
        width="100%"
        height="100%"
        display={{ base: 'block', md: 'flex' }}
        id="about"
      >
        <Image
          src={coding}
          borderRadius="50%"
          //  border="1px solid red"
          ml={3}
        />
        <Box
          // display='flex'  alignContent='center' justifyContent='center'
          // border="1px solid red"
          padding="4rem "
        >
          <Heading
            // as="h2"
            color={bgColor}
            size="2xl"
            textAlign="center"
            //  mb={12}
            // border="1px solid red"
          >
            About me
          </Heading>
          {/* <Heading as="h2" size="lg" mb={4}>About Me</Heading> */}
          <Text
            alignContent="center"
            justifyContent="center"
            width="100%"
            height="100%"
            m={2}
            p={3}
            class="about section"
          >
            Full-stack web developer specializing in the MERN stack.
            <br />
            Proficient in data structures and algorithms with strong
            problem-solving skills.
            <br />
            Hands-on experience building React apps in both front-end and
            back-end roles. Portfolio includes six major projects and 15+ mini
            projects,
            <br /> showcasing teamwork, leadership, and communication skills.
            Quick learner who stays up-to-date with industry trends and
            technologies.
            <br />
            Looking for an opportunity to apply skills and expertise to new and
            challenging projects.
            <br />
            including javascript, nodejs, express.js, MongoDb, Websockets,
            Redis, Typescript and AWS.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default About;
