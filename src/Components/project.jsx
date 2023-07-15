// import { useColorModeValue, Heading } from '@chakra-ui/react';
// import React from 'react';
// import { FiGithub, FiEye } from 'react-icons/fi';
// import data from '../Json/project.json';

// const Projects = () => {
//   const bgColor = useColorModeValue('light.bg', 'nav.bg');
//   const textColor = useColorModeValue('light.text', 'dark.text');
//   const primeColor = useColorModeValue('light.primary', 'dark.primary');

//   return (
//     <div
//       style={{
//         width: '100%',
//         height: '90%',
//         paddingBottom: '3rem',
//         marginBottom: '2rem',
//       }}
//       id="projects"
//     >
//       <Heading
//         as="h2"
//         size="2xl"
//         textAlign="center"
//         color={bgColor}
//         mb={12}
//         p="2rem"
//       >
//         Projects
//       </Heading>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(2, 2fr)',
//           gap: '10px',
//           marginRight: '6px',
//           marginLeft: '6px',
//         }}
//       >
//         {data.map((card, id) => (
//           <div key={card.id} className="project-card">
//             <img src="" alt="" />
//             <div
//               style={{
//                 borderWidth: '1px',
//                 borderRadius: 'lg',
//                 overflow: 'hidden',
//               }}
//             >
//               <img
//                 src={require(`../Projectimg/${card.image}`)}
//                 alt=""
//                 style={{ width: '100%' }}
//               />
//               <div style={{ padding: '20px' }}>
//                 <h4
//                   style={{
//                     fontWeight: 'bold',
//                     fontSize: '24px',
//                     marginBottom: '8px',
//                   }}
//                   className="project-title"
//                 >
//                   {card.projectTitle}
//                 </h4>
//                 <p
//                   style={{ marginBottom: '4px' }}
//                   className="project-description"
//                 >
//                   {card.projectInfo}
//                 </p>
//                 <p
//                   style={{ marginBottom: '10px' }}
//                   className="project-tech-stack"
//                 >
//                   {' '}
//                   {card.tech}
//                 </p>
//                 <div
//                   style={{ display: 'flex', justifyContent: 'space-around' }}
//                 >
//                   <a
//                     href={card.gitlink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="project-github-link"
//                   >
//                     <button>
//                       <FiGithub />
//                     </button>
//                   </a>
//                   <a
//                     href={card.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="project-deployed-link"
//                   >
//                     <button>
//                       <FiEye />
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import {
  useColorModeValue,
  Heading,
  Box,
  Grid,
  Image,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';
import React,{useState} from 'react';
import { FiGithub, FiEye } from 'react-icons/fi';
import data from '../Json/project.json';

const Projects = () => {
  const backDrop =useColorModeValue('white','dark.navbg');
  const base=useColorModeValue('light.bg','dark.bg');
  const bgColor = useColorModeValue('light.bg', 'nav.bg');
  const textColor = useColorModeValue('light.text', 'dark.text');
  const primeColor = useColorModeValue('light.primary', 'dark.primary');
  const buttonColor = useColorModeValue('light.bg','white' );

  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };


  return (
    <Box
      width="100%"
      height="90%"
      p='2rem'
      paddingBottom="5rem"
      boxShadow='xl'
      id="projects"
      background={base}
     
    >
      <Heading
        as="h2"
        size="2xl"
        textAlign="center"
        color={textColor}
        marginBottom="3rem"
        padding="2rem"
      >
        Projects
      </Heading>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap="20px"
        marginRight="6px"
        marginLeft="6px"
      >
        {data.map((card, id) => (
          <Box
            key={card.id}
            className="project-card"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            background={backDrop}
            boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}
            transform = {hoveredIndex === id ? 'scale(1.03)' : ''}
            transition= {'transform 0.1s'}
            onMouseEnter={() => handleMouseEnter(id)}
        onMouseLeave={handleMouseLeave}
        
          >
            <Image
              src={require(`../Projectimg/${card.image}`)}
              alt=""
              width="100%"
              objectFit="cover"
            />
            <Box padding="20px">
              <Text
                fontWeight="bold"
                fontSize="24px"
                marginBottom="8px"
                className="project-title"
              >
                {card.projectTitle}
              </Text>
              <Text marginBottom="4px" className="project-description">
                {card.projectInfo}
              </Text>
              <Text marginBottom="10px" className="project-tech-stack">
                {card.tech}
              </Text>
              <Flex justifyContent="space-around">
                <a
                  href={card.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-link"
                >
                  <Button
                  size="lg"
                  variant="ghost"
                  _hover={{
                    position: "relative",
                    overflow: "hidden",
                    _before: {
                      content: "''",
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      transform: "scale(0)",
                      opacity: 0.2,
                      borderRadius: "50%",
                      background: `${buttonColor}`,
                     
                      animation: "ripple 1s linear infinite",
                    },
                  }}
                  _focus={{ boxShadow: "none" }}
                  css={`
                    @keyframes ripple {
                      0% {
                        transform: scale(0);
                      }
                      100% {
                        transform: scale(3);
                        opacity: 0.4;
                        color:${bgColor};
                      }
                    }
                  `}                 
                  >
                    <FiGithub />
                  </Button>
                </a>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-deployed-link"
                >
                  <Button
                  size="lg"
                  variant="ghost"
                  _hover={{
                    position: "relative",
                    overflow: "hidden",
                    _before: {
                      content: "''",
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      transform: "scale(0)",
                      opacity: 0.2,
                      borderRadius: "50%",
                      background: `${buttonColor}`,
                     
                      animation: "ripple 1s linear infinite",
                    },
                  }}
                  _focus={{ boxShadow: "none" }}
                  css={`
                    @keyframes ripple {
                      0% {
                        transform: scale(0);
                      }
                      100% {
                        transform: scale(3);
                        opacity: 0.4;
                        color:${bgColor};
                      }
                    }
                  `}
                  >
                    <FiEye />
                  </Button>
                </a>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
