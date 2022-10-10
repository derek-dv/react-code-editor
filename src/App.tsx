import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./screens/Main"

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/app/*" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
