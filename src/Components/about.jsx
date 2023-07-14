import React from 'react';
import {
  useColorModeValue,
  Box,
  Image,
  Text,
  Heading,
  Button,
} from '@chakra-ui/react';
import about from '../Images/aboutme.png';
import resume from '../Projectimg/Samarth-B-S-Resume.pdf';

import { AiFillEye } from 'react-icons/ai';

const About = () => {
  const bgColor = useColorModeValue('light.bg', 'nav.bg');
  const backDrop =useColorModeValue('white','dark.bg');
  const textColor = useColorModeValue('light.text', 'dark.text');
  const primeColor = useColorModeValue('light.primary', 'dark.primary');

  const handleDownload = () => {
    window.open(resume, '_blank');
    const link = document.createElement('a');
    link.href = resume;
    link.target = '_blank';
    link.download = 'Samarth-B-S-Resume.pdf';
    link.click();
  };

  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      justifyContent={{ base: 'center', md: 'space-around' }}
      padding="2rem"
      
      paddingTop={4}
      mr={3}
      width="100%"
      height="100%"
      id="about"
      className="about section sections"
      background={backDrop}
    >
      <Box
        flex="1"
        maxWidth={{ base: '100%', md: '40%' }}
        mb={{ base: '2rem', md: '0' }}
      >
        <Image src={about} />
      </Box>
      <Box
        flex="1"
        maxWidth={{ base: '100%', md: '40%' }}
        padding={{ base: '1rem', md: '4rem' }}
      >
        <Heading color={bgColor} size="2xl" textAlign="center" mb="2rem">
          About me
        </Heading>
        <Text
          mb="2rem"
          alignContent="center"
          justifyContent="center"
          width="100%"
          height="100%"
          m={2}
          p={3}
          id="user-detail-intro"
        >
          Full-stack web developer specializing in the MERN stack.
          <br />
          {/* <p id="user-detail-intro"> */}
            proficient in HTML5, CSS3, JavaScript, ReactJs, NodeJs, and Express,
            with a strong grasp of database technologies such as MongoDB.
          {/* </p> */}
          Hands-on experience building React apps in both front-end and back-end
          roles. Portfolio includes six major projects and 15+ mini projects,
          <br /> showcasing teamwork, leadership, and communication skills.
          Quick learner who stays up-to-date with industry trends and
          technologies.
          <br />
          Looking for an opportunity to apply skills and expertise to new and
          challenging projects.
          <br />
          including JavaScript, Node.js, Express.js, MongoDB, TypeScript, and
          AWS.
        </Text>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="20px"
          color={bgColor}
        >
          <Button
            borderColor={bgColor}
            id="resume-button-2"
            as="a"
            onClick={handleDownload}
            target="_blank"
            rel="noopener noreferrer"
            p={5}
            variant="outline"
            borderRadius="0"
            _hover={{ bg: 'white', color: '#1B3C65' }}
            size="sm"
            rightIcon={<AiFillEye />}
          >
            Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
