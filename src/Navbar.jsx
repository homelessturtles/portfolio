import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box px={10} my={4} borderRadius={5}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* left side */}
        <Flex alignItems={"center"} gap={2}>
          <Text fontSize={"large"} fontWeight={"bold"}>
            brian fedelin
          </Text>
        </Flex>
        {/* right side */}
        <Flex gap={4} alignItems={"center"}>
          {/*<Button colorScheme={colorMode === "light" ? "yellow" : "blue"}>
            Resume
          </Button>*/}
          <Button
            onClick={toggleColorMode}
            colorScheme={colorMode === "light" ? "blue" : "yellow"}
          >
            {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
