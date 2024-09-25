import { Stack, Text, Link, Flex, Center } from "@chakra-ui/react";

const About = () => {
  return (
    <Stack gap={7} fontSize={{ base: "sm", sm: "md" }}>
      <Stack>
        <Text
          bgGradient="linear-gradient(to right, #4b6cb7, #182848)"
          bgClip="text"
          fontSize="xl"
          fontWeight="extrabold"
        >
          Nice to meet you!
        </Text>
        <Text>
          I am a recent Computer Science graduate and I am passionate about all
          things technology. I enjoy coding due to the positive changes it can
          create in society which is why I attended The People's Hackathon. This
          event empowered Bay Area citizens to provide tech solutions to help
          combat Oakland's trash and graffiti problems.
        </Text>
        <Text>
          Additionally, I enjoy community engagement and teaching. During my
          time as an game development coding instructor at{" "}
          <Link
            color={"teal.200"}
            href="https://www.codeninjas.com/ca-newport-beach"
          >
            Code Ninjas
          </Link>
          , I learned how to effectively communicate complex topics in a way
          that children could understand. Through patience, problem solving, and
          empathy, I was able to see significant improvements in my students. I
          was so proud when I would see kids go from barely knowing how to use a
          mouse and keyboard to being able to debug and get creative with their
          coding projects.
        </Text>
      </Stack>
      <Stack gap={4}>
        <Stack>
          <Text
            bgGradient="linear-gradient(to right, #4b6cb7, #182848)"
            bgClip="text"
            fontSize="xl"
            fontWeight="extrabold"
          >
            Hobbies
          </Text>
        </Stack>
        <Flex gap={5}>
          <Center bg={"gray.500"} w={50} h={50} borderRadius={"lg"}>
            <Text fontSize={"3xl"}>🎧</Text>
          </Center>
          <Center bg={"gray.500"} w={50} h={50} borderRadius={"lg"}>
            <Text fontSize={"3xl"}>🎹</Text>
          </Center>
          <Center bg={"gray.500"} w={50} h={50} borderRadius={"lg"}>
            <Text fontSize={"3xl"}>🏋️‍♂️</Text>
          </Center>
          <Center bg={"gray.500"} w={50} h={50} borderRadius={"lg"}>
            <Text fontSize={"3xl"}>🧗‍♂️</Text>
          </Center>
          <Center bg={"gray.500"} w={50} h={50} borderRadius={"lg"}>
            <Text fontSize={"3xl"}>🛹</Text>
          </Center>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default About;
