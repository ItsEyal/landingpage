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

export default function EducationalPanel() {
  return (
    <Center w="100%" paddingTop={100}>
      <VStack spacing={50}>
        <Heading as="h2" size="2xl">
          Learn and improve
        </Heading>
        <HStack>
          <Image src="/thinking.png" alt="logo" w={400} h={400} />
          <Container padding={5}>
            <Text>
              Each day, receieve a news related piece, food science, tips from
              top chefs and more, presented in a fun way to better help you own
              your craft.
            </Text>
          </Container>
        </HStack>
      </VStack>
    </Center>
  );
}
