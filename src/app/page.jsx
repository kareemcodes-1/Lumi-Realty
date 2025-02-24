"use client";
import { useEffect } from "react";
import About from "./components/about/About";
import HomePage from "./components/home/HomePage";
import HomeSold from "./components/houses-sold/HomeSold";
import Listings from "./components/listings/Listings";
import NavWhite from "./components/navbar/NavWhite";
import Quote from "./components/quote/Quote";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'

export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
      console.log(e);
    });
  }, []);

  return (
    <div>
      <NavWhite />
      <HomePage />
      <About />
      <Quote />
      <Listings />
      <HomeSold />
    </div>
  );
}
