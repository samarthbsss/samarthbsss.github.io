import { Box, Text ,Divider,useColorModeValue } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import '../Css/footer.css'

function Footer() {
  const bgColor = useColorModeValue('#4831D4', 'black');
  // const textColor = useColorModeValue('light.text', 'dark.text');
  // const primeColor = useColorModeValue('light.primary', 'dark.primary');

  return <>  
    <Divider/>
    
    <Box py={4} bg={bgColor} pt='2rem' pb='2rem' w='100%'>
       
      <Text textAlign="center" color="white" fontSize="sm">
 
        © 2023 Built by Samarth BS
              <span>    <AiFillHeart className="heart-beat"/></span>. 
              All rights reserved.  
     
       
      </Text>
   
    </Box>
  
    </>
 
}

export default Footer;

