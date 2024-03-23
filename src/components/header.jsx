"use client";
import React, { useState } from "react";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link.js";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "./ui/command.jsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";

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
        <span className="text-[20px] font-semibold">OpenWork</span>
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
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          )}
        </Command>
        <div className="bg-white w-[270px]" />
        <Button asChild>
          <Link href="/create-post">Post A Job</Link>
        </Button>
        <div className="bg-white w-[12px]" />
        {session.data?.user ? (
          <Avatar className="w-[45px] h-[45px]">
            <AvatarImage src= {session.data.user.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
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
