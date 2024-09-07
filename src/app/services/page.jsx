import Image from "next/image";
import Nav from "../components/navbar/Nav";

export default function ServicePage() {
  return (
    <>
      <Nav />
      <section className="mt-[8rem]">
        <div className="container-1 lg:grid flex lg:flex-row flex-col lg:gap-[2rem] gap-[3rem] lg:grid-cols-3  ">
          <div>
            <h2 className="text-[2rem] text-[#054738]">Buying</h2>
            <p>
              We provide personalized assistance throughout the entire buying
              process, from identifying suitable properties to negotiating
              offers and closing the deal.
            </p>
          </div>

          <div>
            <h2 className="text-[2rem] text-[#054738]">Selling</h2>
            <p>
              Implementing effective marketing strategies, showcasing the unique
              features of each property, and utilizing our network of high-end
              clientele to attract potential buyers and maximize the property's
              value.
            </p>
          </div>

          <div>
            <h2 className="text-[2rem] text-[#054738]">Consultation</h2>
            <p>
              Providing personalized assistance throughout the entire buying
              process, from identifying suitable properties to negotiating
              offers and closing the deal.
            </p>
          </div>
        </div>
      </section>

      <div className="container-1">
        <div className="lg:grid grid-cols-2 mt-[3rem] gap-[2rem]">
          <div>
            <h2 className="lg:text-[5rem] text-[3.5rem] text-[#054738]">Why us</h2>

            <p>
              Gain access to our extensive knowledge and experience in the
              high-end market, ensuring that you make informed decisions and
              navigate the complex process with confidence. Additionally, we
              have a personalized approach that guarantees that your unique
              needs and preferences are prioritized, resulting in a seamless and
              enjoyable real estate experience tailored to your specific
              requirements.
            </p>
          </div>

          <div className="my-[1rem]">
            <Image
              src="/about-firm-2.jpg"
              alt=""
              width={500}
              height={500}
              quality={100}
              className="w-[700px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container-1">
        <div className="lg:grid grid-cols-3 mt-[3rem] gap-[2rem] mb-[2rem]">
          <div>
            <p>
              We are passionate about helping our clients find their dream home
              and achieve their real estate goals. We believe that everyone
              deserves to experience the luxury and exclusivity that high-end
              residential properties can offer.
            </p>
          </div>

          <div>
            <p>
              With over twenty years of experience selling luxury properties, we
              have developed a deep understanding of the luxury real estate
              market and the needs of high-end clientele.
            </p>
          </div>

          <div>
            <h2 className="lg:text-[5rem] text-[3.5rem] lg:my-0 my-[1rem] text-[#054738]">The team you need.</h2>
          </div>
        </div>

        <div>
          <Image
            src="/4.jpeg"
            alt=""
            width={1000}
            height={1000}
            quality={100}
            className="w-full lg:h-[600px] h-[300px] object-cover"
          />
        </div>
      </div>
    </>
  );
}
