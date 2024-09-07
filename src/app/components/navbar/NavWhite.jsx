import Link from "next/link";

export default function NavWhite() {
  return (
    <header
      className={
        "lg:fixed absolute top-0 w-full px-[1.5rem] py-[1.5rem] z-[100]"
      }
    >
      <nav className="flex items-center justify-between pb-[1rem] text-white">
        <div className="nav_logo">
          <Link href="/">Lumi Realty</Link>
        </div>

        <div className="flex items-center gap-[1rem]">
          <Link href="/listings">Listings</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
