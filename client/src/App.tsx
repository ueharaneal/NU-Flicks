import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";
import Home from "./pages/Home";

import Header from "./components/navigation/Header";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
