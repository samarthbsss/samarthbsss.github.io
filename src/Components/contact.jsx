import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Icon,
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
// import mes from '../Images/send.gif';
import send from '../Images/send.svg';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const bgColor = useColorModeValue('light.bg', 'nav.bg');
  // const textColor = useColorModeValue('light.text', 'dark.text');
  const primeColor =useColorModeValue('white','dark.bg');
  const buttonColor = useColorModeValue('light.bg', 'white');
  const backDrop =useColorModeValue('#F9F9F9','dark.bg');

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
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 2000);
  };

  return (
    <>
     
      {/* <Heading as="h2" size="2xl" textAlign="center" mb={12} color={bgColor}>
        {' '}
        Send me a Message!
      </Heading>
  <Text align="center" fontSize="2xl">
        Got a question or proposal, or just want to say hello? Go ahead.
      </Text> */}
    <div  id="contact">
    <Box p={2} margin="auto"
     background={backDrop}
     paddingTop={['2rem', '2rem', '5rem']} 
     paddingBottom={['2rem', '2rem', '5rem']} 
    align={'center'} >
      <Heading as="h2" size="2xl" textAlign="center" mb={5} color={buttonColor} >
        Send me a Message!
      </Heading>
      <Text align="center" fontSize="2xl">
        Got a question or proposal, or just want to say hello? Go ahead.
      </Text>

      <Flex
       
        direction={['column', 'column', 'row']}
        align={['center', 'center', 'stretch']}
        justify={['center', 'center', 'space-around']}
        padding="2rem"
        //  background='white'
        maxWidth="600px"
      >
        {/* <Box maxWidth={['100%', '100%', '45rem']} height="auto" marginBottom={['2rem', '2rem', '0']}> */}
          {/* <Image src={send} alt="Preview" maxWidth="100%" /> */}
        {/* </Box> */}

        <Box
        //  paddingTop={['2rem', '2rem', '5rem']} 
         width="100%">
          <HStack
            spacing={4}
            gap={2}
            justifyContent="center"
            alignContent="center"
            mb={8}
            mx={['auto', 'auto', '0']}
            color={buttonColor}
          >
            <Link href="https://github.com/samarthbsss" target="_blank" id="contact-github">
              <Icon
                as={FaGithub}
                boxSize={6}
                _hover={{
                  scale: '1.1',
                  transition: '0.5s',
                }}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/samarthbsacharya/" target="_blank" id="contact-linkedin">
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>

            <Link href="mailto:samarthbsacharya@example.com" target="_blank">
              <Icon as={FaEnvelope} boxSize={6} />
            </Link>
            <Link href="tel:+8792801332" target="_blank">
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
                background={primeColor}
              />

              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                m={2}
                background={primeColor}
              />

              <FormLabel>Your Message</FormLabel>
              <Textarea
                placeholder="Drop me a message!"
                value={message}
                onChange={e => setMessage(e.target.value)}
                m={2}
                background={primeColor}
              />

              <Box display="flex" justifyContent="center" alignContent="center">
                <Button
                  mt="1rem"
                  width="15rem"
                  type="submit"
                  colorScheme="teal"
                  size="md"
                  bg={buttonColor}
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
    </Box>

   
      {/* <Flex
        onMouseEnter={() => setIsPlaying(true)}
        onMouseLeave={() => setIsPlaying(false)}
        alignContent="center"
        justifyContent="space-around"
        padding="2rem"
       
      >
        <Box width="100%" height="45rem">
          <Image
            // src={isPlaying ? mes : send}
            src={send}
            alt="Preview"
            height="100%"
            weight="100%"

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
              <Icon as={FaLinkedin} boxSize={6}/>
            </Link>
            
            <Link
                  href="mailto:samarthbsacharya@example.com"
                  target="_blank"
                 
                >
                  <Icon as={FaEnvelope} boxSize={6} />
                </Link>
                <Link href="tel:+8792801332" target="_blank" >
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
           

              <FormLabel>Your Message</FormLabel>
              <Textarea
                placeholder="Drop me a message!"
                value={message}
                onChange={e => setMessage(e.target.value)}
                m={2}
              />
              
              <Box display="flex" justifyContent="center" alignContent="center">
                <Button
                  mt="1rem"
                  width="15rem"
                  type="submit"
                  colorScheme="teal"
                  size="md"
                  //  bg={bgColor}
                  bg={buttonColor}
                 
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
      </Flex> */}

      <div  id="contact-email">
            <a href="mailto:samarthbsacharya@gmail.com"  target={"_blank"}>
            {/* <Icon as={FaEnvelope} boxSize={6}/>
            <p>samarthbsacharya@gmail.com</p> */}
            </a> 

            </div>
                <div   id="contact-phone" >
                  <a href="8792801332" target={"_blank"}> 
                  {/* <Icon as={FaPhone} boxSize={6}/>
                  <p>8792801332</p> */}
                  </a>
                </div>
      </div>
    </>
  );
};

export default Contact;
