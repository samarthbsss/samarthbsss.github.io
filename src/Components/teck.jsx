import React from 'react';
// import {
//   Box,
//   Grid,
//   GridItem,
//   Heading,
//   Text,
//   Image,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import boot from '../Images/boot.svg';
// import chakra from '../Images/chakra.jpg';
import html from '../Images/html.svg';
// import css from '../Images/css.svg';
// import js from '../Images/javascript.svg';
// import react from '../Images/react.svg';
// // import mon from '../Images/mon.png'
// // import mongo from '../Images/mongo.svg'
// import express from '../Images/express.jpg';
// import nodejs from '../Images/nodejs.png';
// import git from '../Images/git.svg';
// import redux from '../Images/redux.svg';
// import npm from '../Images/npm.png';
// import post from '../Images/post.png';

const TechStacks = () => {
  // const techStacks = [
  //   { name: 'HTML', imageSrc: html },
  //   { name: 'CSS', imageSrc: css },
  //   { name: 'JavaScript', imageSrc: js },
  //   { name: 'React', imageSrc: react },
  //   { name: 'Chakra UI', imageSrc: chakra },
  //   // { name: "Mongo DB", imageSrc: mongo },
  //   // { name: "Mongoose", imageSrc: mon },
  //   { name: 'Express', imageSrc: express },
  //   { name: 'Node JS', imageSrc: nodejs },
  //   { name: 'Git', imageSrc: git },
  //   { name: 'NPM', imageSrc: npm },
  //   { name: 'Postman', imageSrc: post },
  //   { name: 'Redux', imageSrc: redux },
  //   { name: 'Bootstrap', imageSrc: boot },
  // ];
  // const bgColor = useColorModeValue('light.bg', 'nav.bg');
  // // const textColor = useColorModeValue('light.text', 'dark.text');
  // // const primeColor =useColorModeValue('light.primary','dark.primary');

  // return (
  //   <Box pt={8} pb={16} id="skills">
  //     <Box maxW="7xl" mx="auto">
  //       <Heading as="h2" size="2xl" textAlign="center" mb={12} color={bgColor}>
  //         Relevant Tech Stacks
  //       </Heading>
  //       <Grid
  //         templateColumns={{
  //           base: 'repeat(2, 1fr)',
  //           md: 'repeat(3, 1fr)',
  //           lg: 'repeat(7, 1fr)',
  //         }}
  //         gap={6}
  //       >
  //         {techStacks.map(({ name, imageSrc }) => (
  //           <div className="skills-card">
  //             <div className="skills-card-name" ></div>
  //             <div className="skills-card-img"></div>
  //           <GridItem key={name} justifyContent="center" alignContent="center" 
  //           //  class="skills-card"
  //            >
  //             <Box
  //               borderRadius="md"
  //               boxShadow="md"
  //               overflow="hidden"
  //               h="15rem"
  //               w="10rem"
  //             >
  //               <Box
  //                 m={1}
  //                 p={2}
  //                 h="10rem"
  //                 w="10rem"
  //                 display="flex"
  //                 justifyContent="center"
  //                 alignContent="center"
  //               >
  //                 <Image src={imageSrc} alt={imageSrc}
  //                 //  class="skills-card-img"
  //                  />
  //               </Box>
  //               <Box p={4}>
  //                 <Text
  //                   fontWeight="bold"
  //                   display="flex"
  //                   justifyContent="center"
  //                   alignContent="center"
  //                   // class="skills-card-name"
  //                 >
  //                   {name}
  //                 </Text>
  //               </Box>
  //             </Box>
           
  //           </GridItem>
  //           </div>
  //         ))}
  //       </Grid>
  //     </Box>
  //   </Box>
  // );

  // Form hear










  const techStacks = [
    { name: 'HTML', imageSrc: 'https://img.icons8.com/color/512/html-5--v1.png' },
    { name: 'CSS', imageSrc: "https://img.icons8.com/fluency/512/css3.png"},
    { name: 'JavaScript', imageSrc: "https://img.icons8.com/color/512/javascript.png" },
    { name: 'React', imageSrc: "https://img.icons8.com/office/512/react.png" },
    { name: 'Chakra UI', imageSrc: "https://img.icons8.com/color/512/chakra-ui.png" },
    { name: 'Express', imageSrc: 'https://img.icons8.com/ios/512/express-js.png'},
    { name: 'Node JS', imageSrc: "https://img.icons8.com/fluency/512/node-js.png"},
    { name: 'Git', imageSrc: "https://img.icons8.com/glyph-neue/512/github.png" },
    // { name: 'NPM', imageSrc: require('../Images/npm.png') },
    // { name: 'Postman', imageSrc: require('../Images/post.png') },
    // { name: 'Redux', imageSrc: require('../Images/redux.svg') },
    { name: 'Bootstrap', imageSrc: "https://img.icons8.com/color/512/bootstrap.png" },
    {name: 'Mongo DB', imageSrc: 'https://img.icons8.com/color/512/mongodb.png'},
    {name : 'Java' , imageSrc:"https://img.icons8.com/?size=512&id=Pd2x9GWu9ovX&format=png"}
  ];

  return (
    <div  sx={{ width: "80%", margin: "15% auto", padding: "0% 10px" }} id="skills">
      <div sx={{ borderTop: "2px solid rgb(35,53,84)", position: "relative" }}>
        <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>
          Relevant Tech Stacks
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '6px',
          }}
        >
          {techStacks.map(({ name, imageSrc }) => (
            <div key={name} style={{ justifyContent: 'center', alignContent: 'center' }} className="skills-card">
              <div style={{ borderRadius: 'md', boxShadow: 'md', overflow: 'hidden', height: '15rem', width: '10rem', margin: '1px', padding: '2px', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <img className="skills-card-img" src={imageSrc} alt={name} style={{ height: '10rem', width: '10rem' }} />
              </div>
              <div style={{ padding: '4px' }}>
                <p style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignContent: 'center' }} className="skills-card-name">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// };

export default TechStacks;
