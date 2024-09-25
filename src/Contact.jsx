import { Stack, Text, Flex, Icon } from "@chakra-ui/react";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <Stack py={4}>
      <Flex alignItems={"center"} gap={2}>
        <Icon as={MdOutlineMailOutline} boxSize={8} />
        <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={"extrabold"}>
          brianfedelin1@gmail.com
        </Text>
      </Flex>
      <Flex alignItems={"center"} gap={2}>
        <Icon as={MdOutlinePhoneIphone} boxSize={8} />
        <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={"extrabold"}>
          510-299-2317
        </Text>
      </Flex>
      <Flex alignItems={"center"} gap={2}>
        <Icon as={CiLinkedin} boxSize={8} />
        <a href="https://www.linkedin.com/in/brianfedelin/">
          <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={"extrabold"}>
            linkedin.com/in/brianfedelin/
          </Text>
        </a>
      </Flex>
      <Flex alignItems={"center"} gap={2}>
        <Icon as={FiGithub} boxSize={8} />
        <a href="https://github.com/homelessturtles">
          <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={"extrabold"}>
            github.com/homelessturtles
          </Text>
        </a>
      </Flex>
    </Stack>
  );
};

export default Contact;
