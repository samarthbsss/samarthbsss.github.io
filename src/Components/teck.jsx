import React from 'react';
import {
  // Box,
  // Grid,
  // GridItem,
  Heading,
  // Text,
  // Image,
  useColorModeValue,
} from '@chakra-ui/react';

const TechStacks = () => {
  const bgColor = useColorModeValue('light.bg', 'nav.bg');
  const textColor = useColorModeValue('light.text', 'dark.text');
  const primeColor =useColorModeValue('light.primary','dark.primary');

  const techStacks = [
    { name: 'HTML', imageSrc: 'https://img.icons8.com/color/512/html-5--v1.png' },
    { name: 'CSS', imageSrc: "https://img.icons8.com/fluency/512/css3.png"},
    { name: 'JavaScript', imageSrc: "https://img.icons8.com/color/512/javascript.png" },
    { name: 'React', imageSrc: "https://img.icons8.com/office/512/react.png" },
    { name: 'Chakra UI', imageSrc: "https://img.icons8.com/color/512/chakra-ui.png" },
    { name: 'Express', imageSrc: 'https://img.icons8.com/ios/512/express-js.png'},
    { name: 'Node JS', imageSrc: "https://img.icons8.com/fluency/512/node-js.png"},
    { name: 'Git', imageSrc: "https://img.icons8.com/glyph-neue/512/github.png" },
    { name: 'Bootstrap', imageSrc: "https://img.icons8.com/color/512/bootstrap.png" },
    { name: 'NPM', imageSrc: "https://img.icons8.com/color/512/npm.png" },
    // { name: 'Redux', imageSrc: require('../Images/redux.svg') },
    // { name: 'Postman', imageSrc: "https://img.icons8.com/color/512/bootstrap.png" },
    {name: 'Mongo DB', imageSrc: 'https://img.icons8.com/color/512/mongodb.png'},
    {name : 'Java' , imageSrc:"https://img.icons8.com/?size=512&id=Pd2x9GWu9ovX&format=png"}
  ];

  return (
  <div id='skills'>

  <div
  style={{
    textAlign: "center",
    width: "80%",
    margin: "15% auto", 
    padding: "0% 10px",
  }}
>
  <Heading as="h2" size="2xl" textAlign="center" mb={12} color={bgColor}>
    Relevant Tech Stacks
  </Heading>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      justifyContent: "center",
    }}
  >
    {techStacks.map(({ name, imageSrc }) => (
      <div
        key={name}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
        className="skills-card"
      >
        <img
          src={imageSrc}
          alt={name}
          style={{ height: "10rem", width: "10rem" }}
          className="skills-card-img"
        />
        <p
          style={{
            fontWeight: "bold",
            marginTop: "12px",
            fontSize: "18px",
          }}
          color={bgColor}
          className="skills-card-name"
        >
          {name}
        </p>
      </div>
    ))}
  </div>
</div>

</div>

  );
};


export default TechStacks;
