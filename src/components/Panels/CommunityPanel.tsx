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
export default function CommunityPanel() {
  return (
    <Center w="80%" paddingTop={100}>
      <VStack spacing={10}>
        <Heading as="h2" size="2xl">
          Community
        </Heading>
        <HStack spacing={0}>
          <Image src="/socialchefs.png" w="40%" h="90%" />
          <Center w="100%">
            <Container padding={5}>
              <VStack spacing={5}>
                <Text fontSize={"lg"}>
                  Join a private community of like minded foodies, food
                  enthusiasts, home cooks and aspiring chefs to better each
                  other's craft, share tips, secrets, recipes and restaraunts,
                  everything food!
                </Text>
                <Text fontSize={"xl"}>
                  Join events, competitions and giveaways!
                </Text>
              </VStack>
            </Container>
          </Center>
        </HStack>
      </VStack>
    </Center>
  );
}
