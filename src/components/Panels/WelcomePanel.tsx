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

export default function WelcomePanel({
  onOpen,
  ...props
}: {
  onOpen: () => void;
}) {
  return (
    <Center w="100%" backgroundImage={"/test.jpg"}>
      <HStack spacing={3}>
        <Image src="/test.jpg" alt="logo" w={400} h={400} />
        <Container padding={5}>
          <VStack spacing={3}>
            <Heading>Food, but in a fun way.</Heading>
            <Box>
              <Text>
                Join our daily email newsletter for an enjoyable, informative
                food reading experience, FOR FREE.
              </Text>
              <HStack paddingTop={4}>
                <Input placeholder="Your email goes here" />
                <Button onClick={onOpen}>Subscribe</Button>
              </HStack>
            </Box>
            <Text>No commitment, no catch, cancel anytime, 100% free.</Text>
          </VStack>
        </Container>
      </HStack>
    </Center>
  );
}
