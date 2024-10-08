import { useState } from "react";
import {
  Stack,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  DarkMode,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Hero from "./hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <DarkMode>
      <Stack minH={"100vh"} bg="gray.900" color={"white"}>
        <Hero />
        <Tabs variant="enclosed" px={10} py={10}>
          <TabList>
            <Tab>Projects</Tab>
            <Tab>About</Tab>
            <Tab>Contact</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Projects />
            </TabPanel>
            <TabPanel>
              <About />
            </TabPanel>
            <TabPanel>
              <Contact />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </DarkMode>
  );
}

export default App;
