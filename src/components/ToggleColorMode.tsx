import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, IconButton, useColorMode } from "@chakra-ui/react";

export default function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      aria-label={"Toggle color mode"}
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </IconButton>
  );
}
