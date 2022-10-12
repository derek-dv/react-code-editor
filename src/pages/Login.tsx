import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin, login } from "../actions/auth/auth";
import { State } from "../store";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error, googleLoading, loading, user } = useSelector(
    (state: State) => state.auth
  );
  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    //@ts-ignore
    dispatch(login(email, password));
  };

  const handleGoogle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(googleLogin());
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  return (
    <Flex
      position="relative"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      {error ? (
        <Box
          position="absolute"
          top="30%"
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
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={10}
        >
          <Stack spacing={4}>
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
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handleLogin}
                disabled={loading}
                isLoading={loading}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
              <Button
                colorScheme="red"
                leftIcon={<FaGoogle />}
                onClick={handleGoogle}
                disabled={googleLoading}
                isLoading={googleLoading}
              >
                Sign in with Google
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
