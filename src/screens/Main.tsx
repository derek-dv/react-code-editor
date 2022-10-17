import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Alert from "../components/Alert";
import Sidebar from "../layout/Sidebar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyFiles from "../pages/MyFiles";
import Public from "../pages/Public";
import Register from "../pages/Register";
import { State } from "../store";

const Main: React.FC<any> = () => {
  const alerts = useSelector((state: State) => state.alerts);
  return (
    <Sidebar>
      {alerts.length > 0 ? (
        <Box w="18rem" pos="absolute" top="3" right="3" zIndex={"modal"}>
          {alerts.map((alert) => (
            <Alert id={alert.id} message={alert.message} type={alert.type} />
          ))}
        </Box>
      ) : null}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/files/my" element={<MyFiles />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/files" element={<Public />} />
      </Routes>
    </Sidebar>
  );
};

export default Main;
