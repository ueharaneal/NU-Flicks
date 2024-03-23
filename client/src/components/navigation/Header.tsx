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

const Header = () => {
  return (
    <div className="flex flex-row px-4 m-4 justify-center border-x-4border-foreground">
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
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Header;
