import Image from "next/image";
import Link from "next/link";

export default function Listings() {
  return (
    <section className="listings section">
      <div className="listings-container container-1 flex items-center lg:flex-row flex-col gap-[2rem]">
        <Image
          src="/house.jpeg"
          alt=""
          className="w-[700px] h-[400px] object-cover"
          width={1000}
          height={1000}
          quality={100}
        />

        <div>
          <Image
            src="/house-2.jpeg"
            alt=""
            className="w-[700px] h-[350px] object-cover"
            width={1000}
            height={1000}
            quality={100}
          />
          <div className="lg:flex items-center justify-between mt-[1rem]">
            <div>
              <p className="lg:w-[300px] w-full text-[#054738]">
                Providing extensive experience and deep understanding of luxury
                real estate.
              </p>
            </div>

            <Link
              href="/listings"
              className="lg:mt-0 mt-[1rem] flex items-center gap-[1rem] lg:justify-center justify-start"
            >
              View listings{" "}
              <div className="border border-[#054738] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center">
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
        </div>
      </div>
    </section>
  );
}
