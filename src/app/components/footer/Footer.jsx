import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer mt-[4rem] mb-[2rem]">
      <div className="bg-[#054738] mb-[2rem] text-white lg:h-[80vh] h-auto lg:p-[7rem] py-[5rem] text-center flex flex-col justify-center items-center">
        <h2 className="lg:text-[5rem] text-[3.5rem] text-white">
          Let’s find your dream <br /> home.
        </h2>
        <Link
          href="/contact"
          className="flex items-center gap-[1rem] justify-center"
        >
          Get in touch{" "}
          <div className="border border-white rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </Link>
      </div>

      <div className="container-1 flex lg:items-center lg:flex-row flex-col justify-between">
        <div className="flex items-start flex-col gap-[2rem] lg:mb-0 mb-[1.5rem]">
          <span>
            Stay up-to-date on my latest listings and <br /> market trends.
          </span>

          <div className="flex items-center gap-[3rem]">
            <div>
              <input
                type="text"
                placeholder="Enter your email"
                className="input-border h-[2rem]"
                name=""
                id=""
              />
            </div>

            <button className="btn">Submit</button>
          </div>

          <span className="text-[#054738]">© 2023 Lumi Realty.</span>
        </div>

        <div className="flex items-center gap-[10rem]">
          <div className="flex flex-col gap-[2rem]">
            <a href="/listings">Listings</a>
            <a>Styleguide</a>
            <a href="/services">Services</a>
            <a>Changelog</a>
          </div>

          <div className="flex flex-col gap-[2rem]">
            <a href="/about">About</a>
            <a>Licensing</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
