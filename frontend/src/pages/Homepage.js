import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent={"center"}
        textAlign="center"
        p={3}
        bg={"#100B11"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="5px"
      >
        <Text
          fontSize="4xl"
          fontFamily="Work sans"
          color="white"
          fontWeight="bold"
        >
          ChatVerse
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="5px" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
