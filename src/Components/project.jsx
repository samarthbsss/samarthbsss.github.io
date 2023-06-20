import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Link,
  Flex,
  IconButton,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

import { FiGithub, FiEye, 
  // FiMoreHorizontal 
} from 'react-icons/fi';
import data from '../Json/project.json';
// import myntra from '../Projectimg/Myntra.png';
// import spotify from '../Projectimg/spotify.png';
// import ajio from '../Projectimg/ajio.png';

function Projects() {
  const bgColor = useColorModeValue('light.bg', 'dark.bg');
  const textColor = useColorModeValue('light.text', 'dark.text');
  const primeColor = useColorModeValue('light.primary', 'dark.primary');
 

  return (
    <Box
      width="100%"
      height="90%"
      bg={bgColor}
      color={textColor}
      pb="3rem"
      mb="2rem"
      id="projects"
    >
      <Heading as="h2" size="2xl" textAlign="center" mb={12} p="2rem">
        Projects
      </Heading>
      {/* <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',

          lg: 'repeat(2, 1fr)',
        }}
        gap={10}
        mr={6}
        ml={6}
      >
        <GridItem>
          <Box class="project-card" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={spotify} alt="Project 2" />
            <Box p={4}>
              <Text  fontWeight="bold" fontSize="xl" mb={2} >
                Spotify-Clone
              </Text>
              <Text mb={4} color={primeColor}>
             
                Spotify UI Clone built using React + Chakra Ui + Spotify Web
                Api.
              </Text>
              <Flex justifyContent="space-between">
                <Link
                  href="https://github.com/thisiskmv/Spotify-Clone"
                  target="_blank"
                  isExternal
                  class="project-github-link"
                >
                  <IconButton
                    icon={<FiGithub />}
                    aria-label="GitHub Link"
                    variant="ghost"
                
                    // border='1px solid black'
                    // padding='10px'
                  />
                </Link>
                <Link
                class="project-deployed-link"
                  href="https://spotify-two-virid.vercel.app/"
                  target="_blank"
                  isExternal
                >
                  <IconButton
                    icon={<FiEye />}
                    aria-label="View Project Link"
                    variant="ghost"
                  />
                </Link>
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiMoreHorizontal />}
                    aria-label="More Link"
                    variant="ghost"
                    class="project-tech-stack"
                  />
                </Link>
              </Flex>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box class="project-card" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={myntra} alt="Project 1" />
            <Box p={4}>
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                Myntra-Clone
              </Text>
              <Text mb={4} color={primeColor}>
                Short description of Project 1 goes here.
              </Text>
              <Flex justifyContent="space-between">
                <Link
                  href="https://github.com/Vishalll069/Myntra-Clone"
                  target="_blank"
                  isExternal
                  class="project-github-link"
                >
                  <IconButton
                    icon={<FiGithub />}
                    aria-label="GitHub Link"
                    variant="ghost"
                  />
                </Link>
                <Link
                  href="https://myntra-clone-v.netlify.app/"
                  target="_blank"
                  isExternal
                >
                  <IconButton
                    icon={<FiEye />}
                    aria-label="View Project Link"
                    variant="ghost"
                  />
                </Link>
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiMoreHorizontal />}
                    aria-label="More Link"
                    variant="ghost"
                  />
                </Link>
              </Flex>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box class="project-card" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={ajio} alt="Project 4" />
            <Box p={4}>
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                Ajio-Clone
              </Text>
              <Text mb={4}>Short description of Project 4 goes here.</Text>
              <Flex justifyContent="space-between">
                <Link
                  href="https://github.com/samarthbsss/Ajio-Clone"
                  target="_blank"
                  isExternal
                  class="project-github-link"
                >
                  <IconButton
                    icon={<FiGithub />}
                    aria-label="GitHub Link"
                    variant="ghost"
                  />
                </Link>
                <Link
                  href="https://tiny-gelato-e54cd3.netlify.app/index.html"
                  target="_blank"
                  isExternal
                >
                  <IconButton
                    icon={<FiEye />}
                    aria-label="View Project Link"
                    variant="ghost"
                  />
                </Link>
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiMoreHorizontal />}
                    aria-label="More Link"
                    variant="ghost"
                  />
                </Link>
              </Flex>
            </Box>
          </Box>
        </GridItem>
      </Grid> */}
    
      <Grid templateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)',}}
        gap={10}
        mr={6}
        ml={6}>  
          {
            data.map((card,id)=>{
              return <GridItem key={card.key}>
                <div class="project-card">
                  <img src='' alt=''/>
                  <div class="project-title"></div>
                  <div class="project-description"></div>
                  <div class="project-tech-stack"></div>
                  <div class="project-github-link"></div>
                  <div class="project-deployed-link"></div>
                </div>
                  <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                  <Image src={require(`../Projectimg/${card.image}`)} alt=''/>
                  <Box p={4}>
              <Text fontWeight={"bold"} fontSize={"xl" } mb={'2'}  >
                {card.projectTitle}
              </Text>
              <Text mb={4} color={primeColor} >{card.projectInfo}</Text>
              <Flex justifyContent="space-around">
                <Link
                  href={card.gitlink}
                  target="_blank"
                  isExternal
                  class="project-github-link"
                >
                  <IconButton
                    icon={<FiGithub />}
                    aria-label="GitHub Link"
                    variant="ghost"
                  />
                </Link>
                <Link
                  href={card.link}
                  target="_blank"
                  isExternal
                >
                  <IconButton
                    icon={<FiEye />}
                    aria-label="View Project Link"
                    variant="ghost"
                  />
                </Link>
                {/* <Link href="#" isExternal>
                  <IconButton
                    icon={<FiMoreHorizontal />}
                    aria-label="More Link"
                    variant="ghost"
                  />
                </Link> */}
              </Flex>

                  </Box>
                  </Box>

                  
              </GridItem>
            })
          }

      </Grid>

    </Box>
  );
}

export default Projects;