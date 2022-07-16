import { Box, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Snackbar from "./components/Snackbar";
import TopBar from "./components/TopBar";

function App() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({
    defaultIsOpen: false,
  });

  function openSnackbar() {
    onOpen();
    setTimeout(() => {
      onClose();
    }, 1000);
  }
  return (
    <VStack>
      <TopBar />
      <Body onOpen={openSnackbar} />
      <Footer onOpen={openSnackbar} />
      <Box position="fixed" bottom="0" right="0">
        <Snackbar isVisible={isVisible} onClose={onClose} />
      </Box>
    </VStack>
  );
}

export default App;
