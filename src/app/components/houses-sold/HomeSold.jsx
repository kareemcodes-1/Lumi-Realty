import Image from "next/image";

export default function HomeSold() {
  return (
    <section className="homesold section">
      <div className="homesold-container container-1">
        <div className="homesold-content flex items-center lg:flex-row flex-col gap-[4rem]">
          <div className="w-[300px] text-[#054738]">
            <p>
              {" "}
              We are passionate about helping our clients find their dream home
              and achieve their real estate goals. We believe that everyone
              deserves to experience the luxury and exclusivity that high-end
              residential properties can offer.
            </p>
          </div>

          <div className="w-[300px] text-[#054738]">
            <p>
              With over twenty years of experience selling luxury properties, we
              have developed a deep understanding of the luxury real estate
              market and the needs of high-end clientele.
            </p>
            <div>About us</div>
          </div>

          <div className="">
            <h1 className="lg:text-[5rem] text-[3rem] text-[#054738]">
              A Realtor that delivers.
            </h1>
          </div>
        </div>

        <div className="flex lg:items-center items-start lg:flex-row flex-col lg:gap-[10rem]">
          <div className="flex flex-col text-[#054738] lg:w-[40%] w-full">
            <div>
              <div className="flex items-center justify-between border-b border-[#054738]">
                <h1 className="lg:text-[7rem] text-[5rem] text-[#054738]">
                  375+
                </h1>
                <span className="text-[#054738]">happy clients</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h1 className="lg:text-[7rem] text-[5rem] text-[#054738]">
                  85+
                </h1>
                <span className="text-[#054738]">houses sold</span>
              </div>

              <div className="h-[1px] w-full bg-[#054738]" />
            </div>
          </div>

          <div className="lg:w-[50%] w-full">
            <Image
              src="/about-firm-1.jpg"
              className="w-full h-[35rem] object-cover"
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
