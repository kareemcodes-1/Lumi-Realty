import Nav from "../components/navbar/Nav";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <section className="lg:mt-[8rem] mt-[7rem]">
        <div className="container-1 lg:grid grid-cols-2 gap-[3rem]">
          <div>
            <h2 className="lg:text-[4rem] text-[3rem] text-[#054738]">
              Let’s talk about working together.
            </h2>

            <div className="lg:grid grid-cols-2 mt-[2rem]">
              <div>
                <span className="mb-[1.5rem]">contact@lumirealty.com</span>
                <p className="mt-[1.5rem]">123-456-7891</p>
              </div>

              <div>
                <p>
                  Interested in any properties or have any questions? Then get
                  in touch today and we’ll get back to you as soon as possible.
                </p>
                <div className="flex items-center gap-[1rem] mt-[2rem]">
                  <p>Instagram</p>
                  <p>Facebook</p>
                  <p>Twitter</p>
                </div>
              </div>
            </div>
          </div>

          <form
            class="w-full max-w-[35rem] flex flex-col gap-[1.5rem] lg:mt-0 mt-[3rem]"
            id="form"
          >
            <div class="flex items-center border-b border-[#054738] py-2">
              <input
                class="placeholder:text-[#054738] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none text-[2rem]"
                type="text"
                placeholder="Your name?"
                aria-label="Full name"
              />
            </div>

            <div class="flex items-center border-b border-[#054738] py-2">
              <input
                class="placeholder:text-[#054738] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none text-[2rem]"
                type="email"
                placeholder="Your email?"
                aria-label="Email"
              />
            </div>

            <div class="flex items-center border-b border-[#054738] py-2">
              <input
                class="placeholder:text-[#054738] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none text-[2rem]"
                type="text"
                placeholder="Your number?"
                aria-label="Full name"
              />
            </div>

            <div class="flex items-center border-b border-[#054738] py-2">
              <input
                class="placeholder:text-[#054738] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none text-[2rem]"
                type="text"
                placeholder="Message?"
                aria-label="Full name"
              />
            </div>

            <button className="btn">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}
