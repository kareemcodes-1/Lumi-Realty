import About from "./components/about/About";
import HomePage from "./components/home/HomePage";
import HomeSold from "./components/houses-sold/HomeSold";
import Listings from "./components/listings/Listings";
import NavWhite from "./components/navbar/NavWhite";
import Quote from "./components/quote/Quote";

export default function Home() {
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
