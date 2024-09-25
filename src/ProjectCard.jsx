import {
  Stack,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Heading,
  Badge,
  Link,
  Icon,
  useColorMode,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, tags, bio, link }) => {
  const tagDisplay = tags.map((tag) => (
    <WrapItem>
      <Badge colorScheme="green">{tag}</Badge>
    </WrapItem>
  ));
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Card fontSize={{ base: "sm", sm: "md" }}>
      <CardHeader>
        <Stack>
          <Heading size={"sm"}>{title}</Heading>
          <Wrap>{tagDisplay}</Wrap>
        </Stack>
      </CardHeader>
      <CardBody>
        <Stack>{bio}</Stack>
      </CardBody>
      <CardFooter>
        <Link
          href={link}
          color={colorMode === "dark" ? "teal.200" : "teal.800"}
          isExternal
        >
          {"View Project  "}
          <Icon
            color={colorMode === "dark" ? "teal.200" : "teal.800"}
            as={FaExternalLinkAlt}
            boxSize={3}
          ></Icon>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
