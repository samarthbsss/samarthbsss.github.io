import React from 'react';
import { Box, Flex, Image, Heading, useColorModeValue } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import '../Css/git.css';

const Git = () => {
  // const [isHovering, setIsHovering] = useState(false);
  const bgColor = useColorModeValue('light.bg', 'nav.bg');
  // const textColor = useColorModeValue('light.text', 'dark.text');
  // const primeColor = useColorModeValue('light.primary', 'dark.primary');

  return (
    <>
      <Box mb="4rem" id='git'>
        <Heading as="h2" size="2xl" textAlign="center" mb={12} color={bgColor}>
          My GitHub Contribution
        </Heading>
        <Flex alignContent="center" justifyContent="center" gap={4}>
          <Image
            // className="gitlang"
            id="github-streak-stats"
          
            src="https://github-readme-stats.vercel.app/api?username=samarthbsss&theme=dark&hide_border=true&include_all_commits=false&count_private=true"
          />
          <Box>
            <Image
            id="github-top-langs"
              // className="gitlang"
              src="https://github-readme-streak-stats.herokuapp.com/?user=samarthbsss&theme=dark&hide_border=true"
            />
          </Box>
        </Flex>
        <div
          className="gitcal"
          style={{
            padding: '2rem',
            marginLeft: '4rem',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            width: '93%',
          }}
        >
          <GitHubCalendar
            username="samarthbsss"
            style={{
              // background: 'transparent',
              text: '#333',
              // grade4: 'green',
              // grade3: 'green',
              // grade2: 'yellowgreen',
              // grade1: 'orange',
              // grade0: 'red',
            }}
          />
          <br></br>
        </div>
        <div
          // className="gitlang"
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=samarthbsss&theme=dark&hide_border=true&include_all_commits=false&count_private=true&layout=compact"
            alt="most used"
          />
        </div>
      </Box>
    </>
  );
};

export default Git;
