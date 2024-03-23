import { Link } from "react-router-dom";
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

import { navigationMenuTriggerStyle } from "@components/ui/navigation-menu";
import { ModeToggle } from "../theme/mode-toggle";

const Header = () => {
  return (
    <div className="flex flex-row px-4 m-4 justify-between border-x-4 border-foreground">
      <Link to="/">
        <h1 className="text-primary p-2 rounded-lg text-heavy text-4xl hover:bg-muted">
          NU FL<span className="text-foreground">I</span>CKS
        </h1>
      </Link>
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="navigationMenuTriggerStyle bg-primary">
                Link
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              Item Two
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link2</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Header;
