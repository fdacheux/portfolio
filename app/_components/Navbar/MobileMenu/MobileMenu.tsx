'use client'

import Link from "next/link";
import { openContactModal } from "../../ContactModal/ContactModal";
function MobileMenu() {
  return (
    <ul className="md:hidden absolute -right-4 top-14 bg-red-900 w-35 z-10 border-2 border-white rounded-b-sm">
      <li className="navbar-links border-b pb-1 pl-2 border-b-white">
        <Link href="/CV">CV</Link>
      </li>
      <li className="navbar-links pb-1 pl-2 border-b  border-b-white">
        <Link href="/projects">Projets</Link>
      </li>
      <li className="navbar-links pb-1 pl-2 border-b  border-b-white">
        <Link href="/about">À propos du site</Link>
      </li>
      <li className="navbar-links pb-1 pl-2">
        <button type="button" onClick={openContactModal}>Contact</button>
      </li>
    </ul>
  );
}

export default MobileMenu;
