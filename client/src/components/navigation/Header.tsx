import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthenticatedMenu from "./AuthenticatedMenu";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
  
//LOGGED OUT HEADER
const Header = () => {
  const users = useSelector((state:RootState)=>state.users)
  const dispatch = useDispatch()
  return (
    <div className="fixed-top flex flex-row px-5 m-4 justify-between border-x-4 border-foreground">
      <Link to="/">
        <h1 className="text-primary p-2 rounded-lg text-heavy text-4xl hover:bg-muted">
          NU FL<span className="text-foreground">I</span>CKS
        </h1>
      </Link>
      <AuthenticatedMenu users={users}/>
    </div>
  );
};

export default Header;
