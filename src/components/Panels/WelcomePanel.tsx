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
import React from "react";

export default function WelcomePanel({
  onOpen,
  ...props
}: {
  onOpen: () => void;
}) {
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
            },
            body: JSON.stringify({
              email: value,
              status: "enabled",
              lists: [1],
              attribs: { country: "" },
            }),
          }
        );
        const content = await rawResponse.json();
        if (content?.data?.id) onOpen();
      })();
  }
  const handleChange = (event: any) => setValue(event.target.value);

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
                <Input
                  placeholder="Your email goes here"
                  value={value}
                  onChange={handleChange}
                />
                <Button onClick={subscribe}>Subscribe</Button>
              </HStack>
            </Box>
            <Text>No commitment, no catch, cancel anytime, 100% free.</Text>
          </VStack>
        </Container>
      </HStack>
    </Center>
  );
}
