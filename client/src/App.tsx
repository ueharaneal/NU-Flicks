import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";
import MainLayout from "./components/hoc/MainLayout";
import { RootState, AppDispatch } from "@/store/index";

import { useSelector, useDispatch } from "react-redux";
import { isAuth } from "./store/actions/users";
import { LargeLoader } from "./components/common/utils";

import Home from "./pages/Home";
import Auth from "./components/auth";
import Header from "./components/navigation/Header";
import Dashboard from "./pages/Dashboard";
import { boolean } from "zod";
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(isAuth());
  }, []);
  useEffect(() => {
    if(users.auth !== null){
      setLoading(false)
    }

  }, [users]);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        {loading ? (
          <LargeLoader/>
        ) : (
          <>
            <Header />
            <MainLayout>
              <Routes>
                <Route path="/auth" element={<Auth />}></Route>
                <Route path="/" element={<Home />} />
                <Route  path="/dashboard" element={<Dashboard isAuthenticated={users.auth}/>}/>
              </Routes>
            </MainLayout>
          </>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
