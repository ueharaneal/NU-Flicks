import { RootState } from "@/store";

import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthGuard() {
  const users = useSelector((state: RootState) => state.users);

  return users.auth ? <Outlet/> : <Navigate to="/login" />;
}
