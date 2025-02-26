"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";


export default function Nav() {

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  


  return (
    <header
      className={
        `lg:fixed absolute top-0 w-full px-[1.5rem] py-[1.5rem] h-[4.5rem] z-[100] ${scrolled ? 'shadow-lg bg-[#fff]': ''}`
      }
    >
      <div>
        <nav className="flex items-center justify-between pb-[1rem]">
          <div className="nav_logo">
            <Link href="/">Carl Homes</Link>
          </div>

          <div className="lg:flex hidden items-center gap-[1rem]">
            <Link href="/listings">Listings</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? <X size={25} className="text-[#054738]" /> : <Menu size={25} className="text-[#054738]" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#054738] text-white shadow-md flex flex-col gap-4 p-6 lg:hidden">
            <Link href="/" className="text-white" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="text-white" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className="text-white" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/works" className="text-white" onClick={() => setIsOpen(false)}>Our Works</Link>
            <Link href="/contact" className="text-white" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        )}
        </nav>
      </div>
    </header>
  );
}
