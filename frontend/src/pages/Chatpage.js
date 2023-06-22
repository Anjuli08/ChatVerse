import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Chatbox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/chatProvider";

const Chatpage = () => {
  //   const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
        // flexDirection="row"
      >
        {user && <MyChats />}
        {user && <Chatbox />}
      </Box>
    </div>
  );
};

export default Chatpage;
