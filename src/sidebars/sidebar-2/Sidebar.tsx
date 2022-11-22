import { useState } from "react";
// import Logo from "./logo.svg";
import Logo from './Logo.png'
import { Icon } from "./Icon";
import { Button } from "./Button";
import Image from 'next/image';
import styles from '../../../styles/globals.css';



const menuItems = [
  {
    name: "Introduction",
    icon: "home",
  },
  {
    name: "About Us",
    icon: "subscriptions",
  },
  {
    name: "Login",
    icon: "video_library",
  },
  {
    name: "Signup",
    icon: "explore",
  },
  {
    name: "Trending",
    icon: "mode_heat",
  },
  {
    name: "Music",
    icon: "music_note",
  },
  {
    name: "Watch Later",
    icon: "schedule",
  },
  {
    name: "Settings",
    icon: "settings",
  },
  {
    name: "Privacy",
    icon: "lock",
  },
];

const NavHeader = () => (
  <header className='sidebar-header'>
    <button type="button">
      <Icon icon="menu"/>
    </button>

    //? TRY SVG INSTEAD!
    <Image src='/Logo.png' height='50' width='50' className="sidebar-logo"/>
  </header>
);

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (item: string) => {
    console.log("activeItem", activeItem);
    setActiveItem(item !== activeItem ? item : "");
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavHeader />
        {menuItems.map((item) => (
          <Button
            onClick={handleClick}
            name={item.name}
            icon={item.icon}
            isActive={activeItem === item.name}
          />
        ))}
      </nav>
    </aside>
  );
};
