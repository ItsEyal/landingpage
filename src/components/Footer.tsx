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
import React from "react";
import Socials from "./Socials";

export default function Footer({ onOpen, ...props }: { onOpen: () => void }) {
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const [value, setValue] = React.useState("");
  function subscribe() {
    if (validateEmail(value))
      (async () => {
        const rawResponse = await fetch(
          "https://foodiesnews.tk/api/subscribers",
          {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain",
              ContentType: "application/json",
              Authorization: `Basic ${Buffer.from(
                `listmonk:listmonk`,
                "base64"
              )}`,
            },
            body: JSON.stringify({
              email: value,
              name: "",
            }),
          }
        );
        const content = await rawResponse.json();
        if (content?.data?.id) onOpen();
      })();
  }
  const handleChange = (event: any) => setValue(event.target.value);
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
          <Input
            placeholder="Your Email goes here"
            value={value}
            onChange={handleChange}
          />
          <Button onClick={subscribe}>Subscribe</Button>
        </HStack>
        <Socials />
      </VStack>
    </Center>
  );
}
