import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin, register } from "../actions/auth/auth";
import { State } from "../store";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const navigate = useNavigate();
  const { error, loading, googleLoading, user, registerMessage } = useSelector(
    (state: State) => state.auth
  );
  const dispatch = useDispatch();
  useEffect(()=>{
    if (user)
      navigate("/")
  }, [user])

  const handleRegister = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(register(email, password, first, last));
  };

  const handleGoogle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(googleLogin());
  };
  return (
    <Flex
      align={"center"}
      position="relative"
      justify={"center"}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      {error ? (
        <Box
          position="absolute"
          top="25%"
          left="50%"
          bg="red.300"
          textAlign="center"
          py="0.5"
          px="1"
          fontSize="small"
          rounded="md"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          {error}
        </Box>
      ) : null}
      {registerMessage ? (
        <Box
          position="absolute"
          top="25%"
          left="50%"
          bg="green.300"
          textAlign="center"
          py="0.5"
          px="1"
          fontSize="small"
          rounded="md"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          {registerMessage}
        </Box>
      ) : null}
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign up to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool ✌️ featoures
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={10}
        >
          <Stack spacing={4}>
            <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" value={first} onChange={(e)=>setFirst(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" value={last} onChange={(e)=>setLast(e.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link color={"blue.400"}>Don't have an account?</Link>
              </Stack>
              <Button
                disabled={loading}
                isLoading={loading}
                onClick={handleRegister}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Register
              </Button>
              <Button
                colorScheme="red"
                disabled={googleLoading}
                isLoading={googleLoading}
                leftIcon={<FaGoogle />}
                onClick={handleGoogle}
              >
                Register with Google
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
