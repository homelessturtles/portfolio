import {
  Stack,
  Flex,
  Text,
  Center,
  Box,
  Heading,
  Icon,
  Image,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Hero = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"space-between"} px={10} py={5} alignItems={"center"}>
      <Flex gap={4}>
        <Image src="/briangradmemoji.png" width={{ base: 70, md: 125 }}></Image>
        <Stack justifyContent={"center"}>
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize={{ base: "md", md: "4xl" }}
            fontWeight="extrabold"
            px={0}
            mx={0}
          >
            Hi, I'm Brian!
          </Text>
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "small", md: "md" }}
            color={"white"}
          >
            Recent CS Grad / Coding Instructor
          </Text>
        </Stack>
      </Flex>
      <Flex gap={8} mt={3} alignItems={"center"} color={"white"}>
        <Flex gap={3} display={{ base: "none", md: "flex" }}>
          <a href="https://github.com/homelessturtles">
            <Icon as={FiGithub} boxSize={8} />
          </a>
          <a href="https://www.linkedin.com/in/brianfedelin/">
            <Icon as={CiLinkedin} boxSize={9} />
          </a>
          <a href="mailto: brianfedelin1@gmail.com">
            <Icon as={MdOutlineMailOutline} boxSize={9} />
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
