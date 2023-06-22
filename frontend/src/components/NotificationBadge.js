import React from "react";
import { Badge } from "@chakra-ui/react";

const NotificationBadge = ({ count }) => {
  return (
    <Badge colorScheme="red" borderRadius="full" px={2} py={1}>
      {count}
    </Badge>
  );
};

export default NotificationBadge;
