// import {
//   Box,
//   Grid,
//   GridItem,
//   Image,
//   Text,
//   Link,
//   Flex,
//   IconButton,
//   Heading,
//   useColorModeValue,
// } from '@chakra-ui/react';

// import { FiGithub, FiEye, 
//   // FiMoreHorizontal 
// } from 'react-icons/fi';
// import data from '../Json/project.json';

// function Projects() {
//   const bgColor = useColorModeValue('light.bg', 'dark.bg');
//   const textColor = useColorModeValue('light.text', 'dark.text');
//   const primeColor = useColorModeValue('light.primary', 'dark.primary');
 

//   return (
//     <Box
//       width="100%"
//       height="90%"
//       bg={bgColor}
//       color={textColor}
//       pb="3rem"
//       mb="2rem"
//       id="projects"
//     >
//       <Heading as="h2" size="2xl" textAlign="center" mb={12} p="2rem">
//         Projects
//       </Heading>

//       <Grid templateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)',}}
//         gap={10}
//         mr={6}
//         ml={6}>  
//           {
//             data.map((card,id)=>{
//               return <GridItem key={card.key}>
//                 <div class="project-card">
//                   <img src='' alt=''/>
//                   <div class="project-title"></div>
//                   <div class="project-description"></div>
//                   <div class="project-tech-stack"></div>
//                   <div class="project-github-link"></div>
//                   <div class="project-deployed-link"></div>
//                 </div>
//                   <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
//                   <Image src={require(`../Projectimg/${card.image}`)} alt=''/>
//                   <Box p={4}>
//               <Text fontWeight={"bold"} fontSize={"xl" } mb={'2'}  >
//                 {card.projectTitle}
//               </Text>
//               <Text mb={4} color={primeColor} >{card.projectInfo}</Text>
//               <Flex justifyContent="space-around">
//                 <Link
//                   href={card.gitlink}
//                   target="_blank"
//                   isExternal
//                   class="project-github-link"
//                 >
//                   <IconButton
//                     icon={<FiGithub />}
//                     aria-label="GitHub Link"
//                     variant="ghost"
//                   />
//                 </Link>
//                 <Link
//                   href={card.link}
//                   target="_blank"
//                   isExternal
//                 >
//                   <IconButton
//                     icon={<FiEye />}
//                     aria-label="View Project Link"
//                     variant="ghost"
//                   />
//                 </Link>
//                 {/* <Link href="#" isExternal>
//                   <IconButton
//                     icon={<FiMoreHorizontal />}
//                     aria-label="More Link"
//                     variant="ghost"
//                   />
//                 </Link> */}
//               </Flex>

//                   </Box>
//                   </Box>

                  
//               </GridItem>
//             })
//           }

//       </Grid>

//     </Box>
//   );
// }

import {
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import { FiGithub, FiEye } from 'react-icons/fi';
import data from '../Json/project.json';

function Projects() {
  const bgColor = useColorModeValue('light.bg', 'dark.bg');
  //   const textColor = useColorModeValue('light.text', 'dark.text');
  //   const primeColor = useColorModeValue('light.primary', 'dark.primary');


  return (
    <div
      style={{
        width: '100%',
        height: '90%',
        paddingBottom: '3rem',
        marginBottom: '2rem',
      }}
      id="projects"
    >
      <h2 style={{textAlign: 'center',fontSize:"40px", marginBottom: '2rem', padding: '2rem' ,color:bgColor}}>

     
        Projects
      </h2>
      <Heading as="h2" size="2xl" textAlign="center" mb={12} p="2rem">
        Projects
      </Heading>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 2fr)',
          gap: '10px',
          marginRight: '6px',
          marginLeft: '6px',
        }}
      >
        {data.map((card, id) => (
          <div key={card.key} className="project-card">
            <img src="" alt="" />
          
     
         
          
            <div
              style={{
                borderWidth: '1px',
                borderRadius: 'lg',
                overflow: 'hidden',
              }}
            >
              <img
                src={require(`../Projectimg/${card.image}`)}
                alt=""
                style={{ width: '100%' }}
              />
              <div style={{ padding: '16px' }}>
                <h4
                  style={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    marginBottom: '8px',
                  }}
                  className="project-title"
                >
                  {card.projectTitle}
                </h4>
                <p style={{ marginBottom: '4px', color: 'blue' }} className="project-description">
                  {card.projectInfo}
                </p>
                <p className="project-tech-stack"> {card.projectInfo}</p>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <a
                    href={card.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-link"
                  >
                    <button>
                      <FiGithub />
                    </button>
                  </a>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-deployed-link"
                  >
                    <button>
                      <FiEye />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




export default Projects;
