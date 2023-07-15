// import React from 'react';
// import { Box, Flex,  Heading, useColorModeValue } from '@chakra-ui/react';
// import GitHubCalendar from 'react-github-calendar';
// import '../Css/git.css';

// const Git = () => {
 
//   const bgColor = useColorModeValue('light.bg', 'nav.bg');
  
  

//   return (
//     <>
//       <Box mb="4rem" id='git'>
//         <Heading as="h2" size="2xl" textAlign="center" mb={12} color={bgColor}>
//           My GitHub Contribution
//         </Heading>
//         <Flex alignContent="center" justifyContent="center" gap={4}>
//         {/* [![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=samarthbsss)](https://git.io/streak-stats) */}
//           <img
//             // className="gitlang"
//             id="github-stats-card"
//             alt='streak'
//             src="https://github-readme-stats.vercel.app/api?username=samarthbsss&theme=dark&hide_border=true&include_all_commits=false&count_private=true"
//           />
         
//             <img
//             id="github-streak-stats"
//               // className="gitlang"
//               // src="https://github-readme-streak-stats.herokuapp.com/?user=samarthbsss&theme=dark&hide_border=true"
//               src='https://github-readme-streak-stats.herokuapp.com?user=samarthbsss&theme=dark&hide_border=true'
//               alt='githubtop'
//             />
         
//         </Flex>
//         <div
//           // className="gitcal"
//           style={{
//             padding: '2rem',
//             marginLeft: '4rem',
//             display: 'flex',
//             alignContent: 'center',
//             justifyContent: 'center',
//             width: '93%',
//           }}
//         >
//           <GitHubCalendar
//             username="samarthbsss"
//             style={{
//               background: 'transparent',
//               text: '#333'
//             }}
//           />
//           <br></br>
//         </div>
//         <div
//           style={{
//             display: 'flex',
//             alignContent: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <img
//             id="github-top-langs"
//             src="https://github-readme-stats.vercel.app/api/top-langs/?username=samarthbsss&theme=dark&hide_border=true&include_all_commits=false&count_private=true&layout=compact"
//             alt="most used"
//           />
//         </div>
//       </Box>
//     </>
//   );
// };

// export default Git;

import React from 'react';
import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import '../Css/git.css';

const Git = () => {
  const bgColor = useColorModeValue('light.bg', 'nav.bg');
  const backDrop =useColorModeValue('white','dark.bg');
  
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
   
    <Box  pb={'6rem'} pt={'3rem'} w="100%" maxW="100%" padding={'5% auto'} alignContent={'center'} m={'auto'}background={backDrop} id='git'>
      <Heading as="h2" size="2xl" textAlign="center" mb={12} color={bgColor}>
        My GitHub Contribution
      </Heading>
      <Flex align="center" justifyContent="center" flexWrap="wrap" gap={4}>
        <img
          id="github-stats-card"
          alt="streak"
          src="https://github-readme-stats.vercel.app/api?username=samarthbsss&theme=transparent&hide_border=true&include_all_commits=false&count_private=true"
        />
        <img
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com?user=samarthbsss&theme=transparent&hide_border=true"
          alt="githubtop"
        />
      </Flex>
      <Box
        mt={8}
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        maxWidth="800px"
      >
        <GitHubCalendar
          username="samarthbsss"
          transformData={selectLastHalfYear} 
  hideColorLegend
  labels={{
    totalCount: '{{count}} contributions in the last half year',
  }}
          style={{
            background: 'transparent',
            color: '#333',
            width: '100%',
          }}
        />
      </Box>
      <Box
        mt={8}
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        maxWidth="800px"
      >
        <img
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=samarthbsss&theme=transparent&hide_border=true&include_all_commits=false&count_private=true&layout=compact"
          alt="most used"
        />
      </Box>
    </Box>
  );
};

export default Git;

