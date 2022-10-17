import { SmallCloseIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { removeAlert } from "../actions/alerts/alerts";

export interface AlertState {
  id: string;
  message?: string;
  type?: "success" | "error" | "info";
}

const Alert: React.FC<AlertState> = ({ message, type, id }) => {
  const bg = type === "success" ? "green" : type === "error" ? "red" : "blue";
  const dispatch = useDispatch();
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      gap="2"
      borderStartRadius="md"
      fontSize="md"
      bgColor={bg}
      px="1.5"
      py="1"
      mb="0.5"
      opacity="0.8"
    >
      <Text>{message}</Text>
      <IconButton aria-label="Cancel" icon={<SmallCloseIcon onClick={()=>{
        //@ts-ignore
        dispatch(removeAlert(id));
        }
      } />} size="sm" />
    </Flex>
  );
};

export default Alert;
