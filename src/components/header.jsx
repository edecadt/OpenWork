"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BriefcaseBusiness, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link.js";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command.jsx";

const Header = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const session = useSession();

  return (
    <div className="relative">
      <div className="bg-gray-100 h-[30px]"></div>
      <div className="bg-white p-[20px] h-[90px] flex items-center">
        <div className="bg-white w-[280px]" />
        <BriefcaseBusiness className="h-[40px] w-[40px] text-blue-500" />
        <div className="bg-white w-[8px]" />
        <span className="text-[24px] font-semibold">OpenWork</span>
        <div className="bg-white w-[32px]" />
        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="ARA">Auvergne-Rhône-Alpes (ARA)</SelectItem>
              <SelectItem value="BFC">Bourgogne-Franche-Comté (BFC)</SelectItem>
              <SelectItem value="BRE">Bretagne (BRE)</SelectItem>
              <SelectItem value="CVL">Centre-Val de Loire (CVL)</SelectItem>
              <SelectItem value="COR">Corse (COR)</SelectItem>
              <SelectItem value="GES">Grand Est (GES)</SelectItem>
              <SelectItem value="HDF">Haut-de-France (HDF)</SelectItem>
              <SelectItem value="IDF">Île-de-France (IDF)</SelectItem>
              <SelectItem value="NOR">Normandie (NOR)</SelectItem>
              <SelectItem value="NAQ">Nouvelle-Aquitaine (NAQ)</SelectItem>
              <SelectItem value="OCC">Occitanie (OCC)</SelectItem>
              <SelectItem value="PDL">Pays de la Loire (PDL)</SelectItem>
              <SelectItem value="PAC">
                Provence-Alpes-Côte d'Azur (PAC)
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="bg-white w-[5px]" />
        <Command className="w-[668px] h-[50px]">
          <CommandInput
            placeholder="Type a command or search..."
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          {isInputFocused && (
            <CommandList
              className="absolute z-40 left-[px] top-[97px] bg-white shadow-lg rounded-b-md"
              style={{ minWidth: "200px" }}
            >
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Search Job</CommandItem>
                <CommandItem>Post Job</CommandItem>
                <CommandItem>Send your opinion</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              {session.data?.user ? (
                <CommandGroup heading="Settings">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Parameter</CommandItem>
                  <CommandItem>
                    <Link href="/api/auth/signout">Sign out</Link>
                  </CommandItem>
                </CommandGroup>
              ) : (
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <Link href="/auth/signin">Sign in</Link>
                  </CommandItem>
                </CommandGroup>
              )}
            </CommandList>
          )}
        </Command>
        <div className="bg-white w-[270px]" />
        <Button asChild>
          <Link href="/create-post">Post A Job</Link>
        </Button>
        <div className="bg-white w-[12px]" />
        {session.data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="w-[45px] h-[45px]">
                <AvatarImage src={session.data.user.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Parameter</DropdownMenuItem>
              <DropdownMenuItem onClick={signOut}>
                <div className="text-red-500">Sign out</div>
                <div className="w-[10px]" />
                <LogOut className="h-[20px] w-[20px] text-red-500" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant="outline" asChild>
            <Link href="/auth/login" className="text-blue-500">
              Sign in
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
