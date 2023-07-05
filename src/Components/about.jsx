import React from 'react';
import { useColorModeValue, Box, Image, Text, Heading } from '@chakra-ui/react';
import about from '../Images/aboutme.png'
// import coding from '../Images/coding.gif';
// import AOS from "aos";

import resume from '../Projectimg/Samarth-B-S-Resume.pdf';
import '../Css/main.css';

const About = () => {
  const bgColor = useColorModeValue('light.bg', 'nav.bg');

  const handleDownload = () => {
    window.open(resume, '_blank');
    const link = document.createElement('a');
    link.href = resume;
    link.target = '_blank';
    link.download = 'Samarth-B-S-Resume.pdf';
    link.click();
  };
  return (
    <>
      <Box
        alignContent={"center"}
        justifyContent={"space-around"}
        padding={"4rem"}
        mt={2}
        mr={3}
        width={"100%"}
        height={"100%"}
        display={{ base: 'block', md: 'flex' }}
        id="about"
        className="about section sections"
      
      >
        <Box h='60%' w='60%'> 
        <Image src={about} borderRadius={"50%"} ml={3} />

        </Box>
        <Box padding="4rem ">
          <Heading color={bgColor} size="2xl" textAlign="center">
            About me
          </Heading>

          <Text
          
            alignContent="center"
            justifyContent="center"
            width="100%"
            height="100%"
            m={2}
            p={3}
           
          >
            Full-stack web developer specializing in the MERN stack.
            <br />
            <p id="user-detail-intro"  >         proficient in HTML5, CSS3, JavaScript, ReactJs, NodeJs, and Express, with a strong grasp of database technologies such as MongoDB.</p>
         
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
            including javascript, nodejs, express.js, MongoDb, Typescript and
            AWS.
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'20px', margin:"10px", }}>
            <button  
                        
                        id="resume-button-2"     
                                    //  href={resume}
                        // target="_blank"
                        // rel="noreferrer"
                        // download={'Samarth-BS-Resume'}
                        onClick={handleDownload}  
                        // ref={(button) => {
                        //   if (button) {
                        //     button.addEventListener('click', handleDownload);
                        //   }
                        // }}
                        >
                    Resume
                    </button>
            </div>
           
          </Text>
        </Box>
     
      </Box>
    </>
  );
};

export default About;
