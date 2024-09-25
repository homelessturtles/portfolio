import {
  Stack,
  Text,
  Flex,
  Center,
  Wrap,
  WrapItem,
  SimpleGrid,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns={{ md: "repeat(auto-fill, minmax(500px, 1fr))" }}
    >
      <ProjectCard
        title={"RapidShorts | Senior Capstone Project"}
        tags={[
          "Full Stack",
          "Javascript",
          "Python",
          "Flask",
          "AWS S3",
          "React",
        ]}
        bio={
          <Stack>
            <Text>
              This full-stack application takes a user-provided prompt to
              dynamically generate short-form video content in order to
              streamline the process of video editing and content creation.{" "}
            </Text>
            <Text>
              A React frontend provides a user-interface for inputting prompts
              and sends it to a RESTful API endpoint, powered by Python Flask,
              which utilizes Python scripts I made that uses generative AI to
              source stock video clips, edits the video, and provides a
              voiceover.
            </Text>
          </Stack>
        }
        link={"https://youtu.be/48wo5KINI_g?si=wi4ig7guC2YMatsA"}
      />

      <ProjectCard
        title={"OakPlace | The People's Hackathon"}
        tags={["Presentation", "Hackathon", "Collaboration", "Figma"]}
        bio={
          <Stack>
            <Text>
              Collaborated with a diverse team of 7 to develop a solution for
              Oakland's trash and graffiti issues. In a short timeframe, we
              created a community-based app that incentivizes residents to
              participate in clean-up efforts.{" "}
            </Text>
            <Text>
              The app allows users to post and respond to clean-up tasks,
              earning virtual rewards. We designed the app's interface using
              Figma and presented our prototype to local officials and
              engineers, who praised our innovative approach.
            </Text>
          </Stack>
        }
        link="https://docs.google.com/presentation/d/1XePAkJPaHprs-RQbHF5Yk8BXJKs37fo8dkpLlt696N8/pub?start=false&loop=false&delayms=3000"
      />
      <ProjectCard
        title={"Summer Camps 2024 Website | Code Ninjas"}
        tags={["Frontend", "Figma", "Webflow", "Design"]}
        bio={
          <Text>
            Designed and implemented a website allowing users to sign up for
            Code Ninja's 2024 summer camps as well as view customer testimonials
            and additional camp information which lead to 100+ student sign ups
          </Text>
        }
        link={"https://camps-ebdd1e.webflow.io/"}
      />
      <ProjectCard
        title={
          "First Aid Chatbot | CPSC 491 (Intro to Artificial Intelligence)"
        }
        tags={["Python", "Classification", "AI", "Machine Learning"]}
        bio={
          <Text>
            First aid chatbot that recognizes the user's medical concern and
            gives an appropriate response. A partner and I trained a Multinomial
            Naive Bayes classifier using a first aid dataset from Kaggle to
            associate our processed user input with the intended first aid
            response category. This allows the chatbot to understand and respond
            to dynamic user queries effectively.
          </Text>
        }
        link={"https://github.com/homelessturtles/chatbot-481.git"}
      />
      <ProjectCard
        title={"Anime Review | Personal Project"}
        tags={["Javascript", "Firebase", "Html/Css"]}
        bio={
          <Text>
            This anime review platform is a web application designed to create a
            community for anime enthusiasts. Users can sign up using Google
            authentication, write reviews for their favorite anime films, and
            explore reviews from other users. The platform is built using
            Javascript and Firebase on the backend for storing movie, user, and
            comment data.
          </Text>
        }
        link={"https://homelessturtles.github.io/AnimeReview/"}
      />
    </SimpleGrid>
  );
};

export default Projects;
