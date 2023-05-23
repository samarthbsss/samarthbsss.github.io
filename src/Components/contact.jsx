import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Icon,
  //  Link,
  Spinner,
  Box,
  Text,
  Link,
  Flex,
  FormControl,
  Input,
  Image,
  FormLabel,
  Heading,
  HStack,
  Button,
  Textarea,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import mes from '../Images/send.gif';
import send from '../Images/send.svg';
// import {  animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const bgColor = useColorModeValue('light.bg', 'nav.bg');
  // const textColor = useColorModeValue('light.text', 'dark.text');
  // const primeColor =useColorModeValue('light.primary','dark.primary');
  const buttonColor = useColorModeValue('light.bg', 'white');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const toast = useToast();

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    if (name === '' || email === '' || message === '') {
      return toast({
        status: 'error',

        duration: 3000,
        title: 'Enter all the Details',
        isClosable: true,
      });
    }

    emailjs
      .send(
        'service_gddn7sa',
        'template_unqriku',
        templateParams,
        '5TpgmwBFIoimtU3j9'
      )
      .then(
        response => {
          console.log('SUCCESS!', response.status, response.text);
        },
        error => {
          console.log('FAILED...', error);
        }
      );
    toast({
      title: 'Message Sent!',
      description: 'Thanks for sending me a Message.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSend = () => {
    // setIsLoading(true);

    // Simulating an API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 2000);
  };

  return (
    <>
      <Heading as="h2" size="2xl" textAlign="center" mb={12} color={bgColor}>
        {' '}
        Send me a Message!
      </Heading>
      {/* <Text align='center' fontSize='4xl'
    ref={aboutRef}
    bg={bgColor} color={textColor} p={2} mt='1rem'>Send me a Message!</Text> */}

      <Text align="center" fontSize="2xl">
        Got a question or proposal, or just want to say hello? Go ahead.
      </Text>

      <Flex
        onMouseEnter={() => setIsPlaying(true)}
        onMouseLeave={() => setIsPlaying(false)}
        alignContent="center"
        justifyContent="space-around"
        padding="2rem"
        id="contact"
      >
        <Box width="100%" height="45rem">
          <Image
            src={isPlaying ? mes : send}
            alt="Preview"
            height="100%"
            weight="100%"
            // borderRadius="full" // This sets the border radius to make it round
            // overflow="hidden" // This ensures the GIF stays within the rounded border
            boxShadow="md" // This adds a shadow effect (optional)
            maxWidth="100%"
          />
        </Box>

        <Box
          paddingTop="5rem"
          //  border='1px solid red'
          w="100%"
          h="100%"
        >
          <HStack
            color={buttonColor}
            spacing={4}
            gap={2}
            display="flex"
            justifyContent="center"
            alignContent="center"
          >
            <Link href="https://github.com/samarthbsss" target="_blank"  id="contact-github">
              <Icon
                as={FaGithub}
                boxSize={6}
                _hover={{
                  scale: '1.1',
                  transition: '0.5s',
                }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/samarthbsacharya/"
              target="_blank"
              id="contact-linkedin"
            >
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>

            <Link href="mailto:samarthbsacharya@example.com" target="_blank"  id="contact-email">
              <Icon as={FaEnvelope} boxSize={6} />
            </Link>
            <Link href="tel:+8792801332" target="_blank"  id="contact-phone">
              <Icon as={FaPhone} boxSize={6} />
            </Link>
          </HStack>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Your Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
                m={2}
              />

              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                m={2}
              />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}

              <FormLabel>Your Message</FormLabel>
              <Textarea
                placeholder="Drop me a message!"
                value={message}
                onChange={e => setMessage(e.target.value)}
                m={2}
              />
              {/* <Button type='submit'>Submit</Button> */}
              <Box display="flex" justifyContent="center" alignContent="center">
                <Button
                  mt="1rem"
                  width="15rem"
                  type="submit"
                  colorScheme="teal"
                  size="md"
                  //  bg={bgColor}
                  bg={buttonColor}
                  // textColor='black'
                  //  color={bgColor}
                  isLoading={isLoading}
                  disabled={isSent}
                  onClick={handleSend}
                  loadingText="Sending..."
                  spinner={<Spinner color="textColor" size="sm" />}
                  _disabled={{
                    opacity: 0.6,
                    cursor: 'not-allowed',
                  }}
                  _hover={{ bg: '', scale: '1.1', transition: '0.5s' }}
                >
                  Send
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
