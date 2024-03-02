"use client"; // 이게 있더라도 server side render 를 먼저 거침

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

export default function Navigation() {
  const path = usePathname(); // need use client keyword
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
