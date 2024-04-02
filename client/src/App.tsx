import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";
import Home from "./pages/Home";
import MainLayout from "./components/hoc/MainLayout";

import Header from "./components/navigation/Header";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Header />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
