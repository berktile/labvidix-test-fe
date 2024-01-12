"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "../../_assets/homepage/logo.svg";
import Link from "next/link";
import User from "../../_assets/homepage/User.svg";
import Dropdown from "../dropdown";
import Logout from "../../_assets/homepage/signout.svg";
import useProfile from "@/app/_hooks/useUser";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const items = [
  {
    icon: "/images/signout.svg",
    link: "/",
    text: "Sign Out",
  },
];

const menuItems = [
  {
    to: "/",
    text: "Extract",
 
  },
  {
    to: "/history",
    text: "History",
   
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const closeDropdown = () => {
    setIsMenuOpen(false);
  };

  const { data, isLoading, error, isError, status } = useProfile();

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  const handleAvatarClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.leftSection}>
          <Link className={styles.logo} href="/">
            <Image src={Logo} alt="Logo" width={0} height={0} />
          </Link>
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li
                key={item.to}
                className={`${styles.item} ${
                  pathname === item.to ? styles.active : ""
                }`}
              >
                <Link href={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.userMail}>
            {status === "success" && data ? (
              <p>{data.email}</p>
            ) : (
              <p>
                {isLoading
                  ? "Loading..."
                  : isError
                  ? "An error has occurred while logging in: " + error
                  : ""}
              </p>
            )}
          </div>
          <div className={styles.avatar} onClick={handleAvatarClick}>
            <Image src={User} alt="Avatar" width={0} height={0} />
            <Dropdown isOpen={isMenuOpen} menuItems={items} />
          </div>
        </div>
      </div>
    </nav>
  );
}
