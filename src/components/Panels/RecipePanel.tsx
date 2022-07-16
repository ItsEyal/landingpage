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

export default function RecipePanel() {
  return (
    <Center w="100%" paddingTop={50}>
      <VStack spacing={50}>
        <Heading as="h2" size="2xl">
          Get Inspired!
        </Heading>
        <HStack spacing={15} alignItems="flex-start">
          <Container>
            <VStack spacing={10}>
              <Text fontSize="2xl">Looking for a challenge?</Text>
              <Text fontSize="lg">
                Have you gotten into the boring habit of making the same thing
                over and over again?
              </Text>
              <Text>
                Looking for a new dish but too lazy to start forage the web for
                a good recipe?
              </Text>
              <Text>
                Everyday, a new, handpicked recipe straight into your inbox,
                selected and or created by the community.
              </Text>
            </VStack>
          </Container>
          <Image src="/recipe.jpg" alt="logo" w={500} h={400} />
        </HStack>
      </VStack>
    </Center>
  );
}
