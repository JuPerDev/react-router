import React from "react";
import { NavBar } from "./components/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./routes/HomeScreen";
import { AboutScreen } from "./routes/AboutScreen";
import { ContactScreen } from "./routes/ContactScreen";
import { UserProvider } from "./context/UserProvider";
import { LoginScreen } from "./routes/LoginScreen";

export const App = () => {
  return (
    <UserProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </UserProvider>
  );
};
