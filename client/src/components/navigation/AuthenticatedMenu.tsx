import React from "react";
import { useDispatch } from "react-redux";
import { UserState } from "@/store/reducers/users";
import { Link } from "react-router-dom";
import { AppDispatch } from "@/store";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@ui/navigation-menu";

import HeaderDropDown from "./HeaderDropDown";
import { ModeToggle } from "../theme/mode-toggle";
import { signOut } from "@/store/actions/users";
import { Button } from "../ui/button";
function AuthenticatedMenu({ users }: { users: UserState }) {
  const dispatch = useDispatch<AppDispatch>();
  let navigate = useNavigate();
  const signUserOut: VoidFunction = () => {
    dispatch(signOut() as any).then(() => navigate("/"));
  };

  return (
    <div className="">
      <NavigationMenu orientation="vertical" className="">
        <NavigationMenuList className="gap-x-3">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="navigationMenuTriggerStyle bg-primary">
                Link
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {users.auth ? (
            <NavigationMenuItem>
              {" "}
              <Button onClick={() => signUserOut()}>Logout</Button>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem>
              <Link to="/auth">Log In</Link>
            </NavigationMenuItem>
          )}
          <NavigationMenuItem>
            <NavigationMenuContent>
              <NavigationMenuLink>Link2</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {users.auth && (
            <NavigationMenuItem>
              <HeaderDropDown />
            </NavigationMenuItem>
          )}
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  );
}

export default AuthenticatedMenu;
