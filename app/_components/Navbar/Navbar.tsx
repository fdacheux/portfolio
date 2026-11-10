import Link from "next/link";
import Image from "next/image";
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-brand-red to-red-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo  & text*/}
          <div className="shrink-0 flex items-center cursor-pointer gap-3 group">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Home"
                width={60}
                height={60}
                className="rounded-xl border group-hover:scale-105 transition-transform duration-300"
              />
              <span className="sr-only">Home</span>
            </Link>
            <span className="font-extrabold text-2xl tracking-tight text-white brand">
              Fanny<span className="text-slate-900">D&T</span>
            </span>
          </div>
          {/* Navigation Links */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* List of links */}
            <ul className="hidden md:flex space-x-8">
              <li className="navbar-links">
                <Link href="/CV">CV</Link>
              </li>
              <li className="navbar-links">
                <Link href="/projects">Projets</Link>
              </li>
              <li className="navbar-links">
                <Link href="/about">À propos du site</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
