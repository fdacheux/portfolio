import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-12 pb-6 border-t-4 border-brand-red mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <Image
              alt=""
              width={40}
              height={10}
              src="/images/logo.png"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white"
            />
            <span className="font-bold text-xl tracking-tight">
              Fanny <span className="text-brand-red">D&T</span>
            </span>
          </div>
          {/* Social */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/fanny-dacheux-18692184/"
              className="relative  w-12 h-12 rounded-full bg-white/5 hover:bg-[#0077b5] flex items-center justify-center transition-colors duration-300 text-xl"
            >
              <span className="sr-only">Linkedin</span>
              <Image
                alt=""
                height={30}
                width={30}
                src="/images/linkedin-icon.svg"
                className="absolute bottom-2.5 right-2"
              />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-white/10 hover:bg-brand-orange border border-white/20 hover:border-brand-orange px-6 py-3 rounded-full transition-all duration-300 font-medium"
            >
              <Image
                alt=""
                src="/icons/mail.svg"
                height={30}
                width={30}
              />
              Me contacter par Mail
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
