import {
  Center,
  Heading,
  HStack,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import ToggleColorMode from "./ToggleColorMode";

export default function TopBar() {
  const { colorMode } = useColorMode();
  return (
    <HStack w="100%" h="4em">
      <Center w="95%">
        <Image
          src={colorMode === "light" ? "/logo.png" : "/logo-darkmode.png"}
          w={20}
          h={20}
        />
        <Heading>Foodies News</Heading>
      </Center>
      <ToggleColorMode />
    </HStack>
  );
}
