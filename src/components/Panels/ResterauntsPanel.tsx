import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
export default function RestaurantsPanel() {
  return (
    <Center w="100%" paddingTop={100}>
      <VStack spacing={10}>
        <Heading as="h2" size="2xl">
          Find hidden gems
        </Heading>
        <HStack spacing={50}>
          <Image src="/restaraunt.jpg" alt="logo" w={"50%"} h={"90%"} />
          <Container padding={5}>
            <VStack spacing={5}>
              <Text>
                Support your local businesses, explore and find new exciting
                under the radar restaurants.
              </Text>
              <Text>
                Seek and tired of the same old pizza place? Find a new one
                recommended by the comunity members.
              </Text>
            </VStack>
          </Container>
        </HStack>
      </VStack>
    </Center>
  );
}
