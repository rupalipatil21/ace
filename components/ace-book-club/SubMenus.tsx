"use client"
import Link from "next/link";
import { SubMenu } from "../../styles/ace.styled";

export default function SubMenus() {
  return (
    <SubMenu sx={{ position: "sticky" }}>
      <Link href={""}>VISION & MISSION</Link>
      <Link href={""}>HOW IT WORKS</Link>
      <Link href={""}>CREATIVE CLUB</Link>
    </SubMenu>
  );
}
