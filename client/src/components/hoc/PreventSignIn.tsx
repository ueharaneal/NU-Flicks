import { Navigate, useLocation } from "react-router-dom";
import { UserState } from "@/store/reducers/users";

import Dashboard from "@/pages/Dashboard";
interface PropTypes {
  users: UserState;
  children?: React.ReactNode;
}

const PreventSignIn: React.FC<PropTypes> = (props) => {
  let location = useLocation();
  const isAuthenticated = props.users.auth
  return (
    <>
      {props.users.auth ? (
        <Navigate to="/dashboard" state={{ from: location }} replace />
      ) : (
        props.children
      )}
    </>
  );
};

export default PreventSignIn;
