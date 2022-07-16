import {
  Button,
  Center,
  ChakraProps,
  Heading,
  HStack,
  Input,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Socials from "./Socials";

export default function Footer({ onOpen, ...props }: { onOpen: () => void }) {
  const { colorMode } = useColorMode();
  return (
    <Center
      w="100%"
      p={10}
      backgroundColor={colorMode === "light" ? "#DFE0DF" : ""}
      {...props}
    >
      <VStack>
        <Heading>Food, but in a fun way.</Heading>
        <Text>
          Join our daily email newsletter for an enjoyable, informative food
          reading experience, 100% Free.
        </Text>
        <HStack w="100%">
          <Input placeholder="Your Email goes here" />
          <Button onClick={onOpen}>Subscribe</Button>
        </HStack>
        <Socials />
      </VStack>
    </Center>
  );
}
