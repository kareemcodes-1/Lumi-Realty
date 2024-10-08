import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <section className="mx-auto relative home">
        <div>
          <div className="absolute bottom-[0rem] lg:left-[10rem] right-[1rem]">
            <div className="flex flex-col items-end justify-end w-full">
              <Link
                href="/listings"
                className="text-white lg:mt-0 mt-[1rem] flex items-center gap-[1rem] lg:justify-center justify-start"
              >
                Find your next home{" "}
                <div className="border border-[#fff] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center">
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

              <div className="lg:text-[2rem] text-[1rem] mt-[1rem] text-[#fff]">
                Luxury Residential Properties in California.
              </div>

              <div className="flex items-start gap-[.5rem] justify-start text-[#fff]">
                <span className="lg:text-[8rem] text-[2.5rem]">
                  Exclusivity
                </span>
                <span className="lg:text-[8rem] text-[2.5rem]">&nbsp;defined.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
