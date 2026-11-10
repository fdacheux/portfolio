import Link from "next/link";
import Image from "next/image";

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
              <li className="navbar-links">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            {/* Change Language Button */}
            <button
              className="flex items-center gap-2 text-white border border-white/30 bg-black/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
              aria-label="Change Language"
            >
              <Image src="/icons/globe.svg" alt="" width={17} height={17} />
              <span className="text-sm pb-0.5">FR</span>
              <Image
                src="/icons/chevron-up.svg"
                alt=""
                width={16}
                height={16}
                className="transform rotate-180"
              />
            </button>
            {/* Hamburger Menu for Mobile */}
            {/* Hamburger button*/}
            <div className="md:hidden flex items-center">
              <button className="text-white hover:text-brand-orange focus:outline-none transition-colors cursor-pointer hamburger" aria-label="Menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
