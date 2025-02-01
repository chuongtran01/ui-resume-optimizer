"use client";

import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { Book, Sunset, Trees, Zap } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { persistor, RootState } from "@/redux/store";
import authService from "@/services/auth";
import { resetPrincipalAction } from "@/redux/features/principal/principalSlice";
import { useRouter } from "next/navigation";

export default function UserNavbar() {
  const principalState = useSelector((state: RootState) => state.principal);
  const dispatch = useDispatch();
  const router = useRouter();

  const onClickLogout = async () => {
    console.log("test");

    await authService.logout();
    dispatch(resetPrincipalAction());
    await persistor.purge();
    router.push("/login");
  };

  const subMenuItemsOne = [
    {
      title: "Blog",
      description: "The latest industry news, updates, and info",
      icon: <Book className="size-5 shrink-0" />,
    },
    {
      title: "Compnay",
      description: "Our mission is to innovate and empower the world",
      icon: <Trees className="size-5 shrink-0" />,
    },
    {
      title: "Careers",
      description: "Browse job listing and discover our workspace",
      icon: <Sunset className="size-5 shrink-0" />,
    },
    {
      title: "Support",
      description: "Get in touch with our support team or visit our community forums",
      icon: <Zap className="size-5 shrink-0" />,
    },
  ];

  const subMenuItemsTwo = [
    {
      title: "Help Center",
      description: "Get all the answers you need right here",
      icon: <Zap className="size-5 shrink-0" />,
    },
    {
      title: "Contact Us",
      description: "We are here to help you with any questions you have",
      icon: <Sunset className="size-5 shrink-0" />,
    },
    {
      title: "Status",
      description: "Check the current status of our services and APIs",
      icon: <Trees className="size-5 shrink-0" />,
    },
    {
      title: "Terms of Service",
      description: "Our terms and conditions for using our services",
      icon: <Book className="size-5 shrink-0" />,
    },
  ];

  return (
    <div className="border-b flex justify-center">
      <div className="flex h-16 items-center px-4 container">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="https://shadcnblocks.com/images/block/block-1.svg" className="w-8" alt="logo" />
            <span className="text-lg font-semibold">Website</span>
          </div>
          <div className="flex items-center">
            <a
              className={cn(
                "text-muted-foreground",
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: "ghost",
                })
              )}
              href="/"
            >
              Home
            </a>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="text-muted-foreground">
                  <NavigationMenuTrigger>
                    <span>Products</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-80 p-3">
                      <NavigationMenuLink asChild>
                        <div>
                          <ul>
                            {subMenuItemsOne.map((item, idx) => (
                              <li key={idx}>
                                <a
                                  className={cn(
                                    "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  )}
                                  href="#"
                                >
                                  {item.icon}
                                  <div>
                                    <div className="text-sm font-semibold">{item.title}</div>
                                    <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="text-muted-foreground">
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-80 p-3">
                      <NavigationMenuLink asChild>
                        <div>
                          <ul>
                            {subMenuItemsTwo.map((item, idx) => (
                              <li key={idx}>
                                <a
                                  className={cn(
                                    "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  )}
                                  href="#"
                                >
                                  {item.icon}
                                  <div>
                                    <div className="text-sm font-semibold">{item.title}</div>
                                    <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a
              className={cn(
                "text-muted-foreground",
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: "ghost",
                })
              )}
              href="#"
            >
              Pricing
            </a>
            <a
              className={cn(
                "text-muted-foreground",
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: "ghost",
                })
              )}
              href="#"
            >
              Blog
            </a>
          </div>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <div>
            <Input type="search" placeholder="Search..." className="md:w-[100px] lg:w-[300px]" />
          </div>
          {principalState.isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">shadcn</p>
                    <p className="text-xs leading-none text-muted-foreground">m@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onClickLogout()}>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button>Log in</Button>
          )}
        </div>
      </div>
    </div>
  );
}
