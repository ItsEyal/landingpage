import {
  Box,
  HStack,
  Image,
  Container,
  Text,
  Input,
  Button,
  Heading,
  Center,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

export default function WhatIsPanel() {
  return (
    <Center
      w="100%"
      backgroundImage="/newspaper.jpg"
      p={10}
      marginTop="0"
      border="0"
    >
      <VStack spacing={25}>
        <Heading as="h2" size="3xl" color="gray.900">
          What is Foodies news?
        </Heading>
        <HStack spacing={50}>
          <Image src="/newspaper.jpg" alt="logo" w={"50%"} h={"90%"} />
          <Container w="100%" padding={5} border="dashed 2px grey">
            <Text fontSize="xl" color="gray.900">
              Foodies news is a passion project founded by an aspiring home cook
              who sought for inspiration and knowledge.
            </Text>
            <br />
            <Text fontSize={"xl"} color="gray.900">
              On a daily basis, you will receive recepies, tips and tricks from
              experts, hidden gems - restaurant, and join a community of like
              minded home cooks.
            </Text>
          </Container>
        </HStack>
      </VStack>
      <Box h={500}></Box>
    </Center>
  );
}
