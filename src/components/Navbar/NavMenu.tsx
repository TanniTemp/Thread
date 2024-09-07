import React, { useState } from "react";
import Menuitems from "./Menuitems";
import { Button } from "../ui/button";

function Navmenu() {
  const [home, setHome] = useState(true);
  const [search, setSearch] = useState(false);
  const [create, setCreate] = useState(false);
  const [activity, setActivity] = useState(false);
  const [profile, setProfile] = useState(false);
  return (
    <div className="flex md:flex-col md:w-full w-[100vw] md:justify-start justify-evenly md:gap-7">
      <Button
        variant={"ghost"}
        onClick={() => {
          setHome(true);
          setSearch(false);
          setCreate(false);
          setActivity(false);
          setProfile(false);
        }}
      >
        {" "}
        <Menuitems
          href={"/"}
          isActive={home}
          activeImage={"/home-selected.svg"}
          notActiveImage={"/home-icon.svg"}
        />
      </Button>
      <Button variant={"ghost"}
        onClick={() => {
            setHome(false);
            setSearch(true);
            setCreate(false);
            setActivity(false);
            setProfile(false);
          }}
          >
        {" "}
        <Menuitems
          href={"/"}
          isActive={search}
          activeImage={"/search-selected.svg"}
          notActiveImage={"/search-icon.svg"}
        />
      </Button>

      <Button variant={"ghost"}
        onClick={() => {
            setHome(false);
            setSearch(false);
            setCreate(true);
            setActivity(false);
            setProfile(false);
          }}
          >
        {" "}
        <Menuitems
          href={"/"}
          isActive={create}
          activeImage={"/create-selected.svg"}
          notActiveImage={"/create-icon.svg"}
        />
      </Button>

      <Button variant={"ghost"}
        onClick={() => {
            setHome(false);
            setSearch(false);
            setCreate(false);
            setActivity(true);
            setProfile(false);
          }}>
        {" "}
        <Menuitems
          href={"/"}
          isActive={activity}
          activeImage={"/heart-selected.svg"}
          notActiveImage={"/heart-icon.svg"}
        />
      </Button>

      <Button variant={"ghost"}
        onClick={() => {
            setHome(false);
            setSearch(false);
            setCreate(false);
            setActivity(false);
            setProfile(true);
          }}>
        {" "}
        <Menuitems
          href={"/"}
          isActive={profile}
          activeImage={"/profile-selected.svg"}
          notActiveImage={"/profile-icon.svg"}
        />
      </Button>
    </div>
  );
}

export default Navmenu;
