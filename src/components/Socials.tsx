import { HStack } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

export default function Socials() {
  return (
    <HStack>
      <SocialIcon url="https://twitter.com" />
      <SocialIcon url="https://instagram.com" />
      <SocialIcon url="https://facebook.com" />
      <SocialIcon url="https://discord.com" />
      <SocialIcon url="https://reddit.com" />
    </HStack>
  );
}
