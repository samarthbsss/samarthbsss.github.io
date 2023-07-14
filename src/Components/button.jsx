
import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const bgColor = useColorModeValue('light.bg', 'nav.bg');
  // const textColor = useColorModeValue('light.text', 'dark.text');
  // const primeColor =useColorModeValue('light.primary','dark.primary');
  const buttonColor = useColorModeValue('light.bg', 'white');
  const colortxt = useColorModeValue('white', 'black');
  const [showButton, setShowButton] = useState(false);

  const oppositeColor = `#${(0xffffff ^ parseInt(bgColor.substring(1), 16))
    .toString(16)
    .padStart(6, '0')}`;

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      bottom="4"
      right="4"
      display={showButton ? 'block' : 'none'}
      transition="opacity 0.3s"
      opacity={showButton ? 1 : 0}
      borderRadius="full"
      rounded="full"
      bg={buttonColor}
    >
      <Button
        onClick={handleScrollToTop}
        // colorScheme="teal"
        bg={buttonColor}
        border={`1px solid ${oppositeColor}`}
        // size="md"
        // leftIcon={<FaArrowUp />}
        color={colortxt}
        //         bg={bgColor}
        borderRadius="full"
        rounded="full"
      >
        <FaArrowUp />
      </Button>
    </Box>
  );
};

export default ScrollToTopButton;
