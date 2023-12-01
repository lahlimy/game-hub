import { HStack, Button } from "@chakra-ui/react";
import React from "react";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </HStack>
  );
};

export default ColorMode;
