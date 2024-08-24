import Image from "next/image";
import NavWhite from "../components/navbar/NavWhite";
import Link from "next/link";

export default function AboutPage () {
    return (
         <>
            <NavWhite />
            <section className="about section">
                <div className="mt-[10rem] mx-[1.5rem]">
                      <div className="flex items-end justify-end flex-col-reverse gap-[1.5rem]">
                            <h2 className="lg:text-[5rem] text-[3.5rem] text-start text-white flex items-center lg:ml-[3rem] ml-0 justify-center">Experience that you need with an agency you can trust.</h2>

                            <div>
                                <p className="text-[1.2rem] text-white flex lg:items-end items-start lg:justify-end justify-start lg:w-[400px] w-full">For over 20 years we've been helping potential
                                    buyers find the home of their dreams.</p>
                            </div>
                      </div>
                </div>
         </section>

          <div className="container-1">
              <div className="lg:grid lg:grid-cols-3 flex lg:flex-row flex-col lg:gap-[2rem] gap-[2rem] mt-[3rem] ">
                    <div className="lg:w-[300px] w-full">
                    With over twenty years of experience selling luxury properties, we have developed a deep understanding of the luxury real estate market and the needs of high-end clientele.
                    </div>

                    <div className="lg:w-[300px] w-full">
                    We have a proven track record of successfully selling high-end properties at top prices and can provide our clients with unparalleled service and expertise throughout the buying or selling process.
                    </div>

                    <div>
                        <h2 className="lg:text-[4rem] text-[3rem] text-[#054738]">Vancouver based Realtor.</h2>
                    </div>
              </div>
          </div>

          
          <div className="container-1">
              <div className="lg:grid lg:grid-cols-2 flex flex-col mt-[3rem] gap-[2rem]">
                    <div>
                        <h2 className="lg:text-[5rem] text-[3rem] text-[#054738]">Why I do what I do</h2>

                        <p>we are passionate about helping our clients find their dream home and achieve their real estate goals. We believe that everyone deserves to experience the luxury and exclusivity that high-end residential properties can offer.</p>
                    </div>

                     <div>
                        <Image src="/1.jpeg" alt="" width={500} height={500} quality={100} className="w-[700px] object-cover"/>
                     </div>
              </div>
          </div>

          <div className="container-1 mt-[5rem]">
              <div className="flex items-start lg:justify-end justify-start flex-col gap-[2rem]">
                    <div className="border-b border-[#054738] flex lg:items-end lg:flex-row flex-col lg:ml-auto lg:w-[80%] w-full lg:justify-between pb-[2rem]">
                        <h2 className="lg:text-[4rem] text-[2.5rem] text-[#054738] text-start flex items-start justify-start">Communication</h2>
                        <p className="w-[300px]">Clear and frequent communication is essential for building trust and ensuring our clients are always informed and up-to-date throughout the buying or selling process.</p>
                    </div>

                    <div className="border-b border-[#054738] flex lg:items-end lg:flex-row flex-col lg:ml-auto lg:w-[80%] w-full lg:justify-between pb-[2rem]">
                        <h2 className="lg:text-[4rem] text-[2.5rem] text-[#054738] text-start flex items-start justify-start">Knowledgeable</h2>
                        <p className="lg:w-[400px] w-full">Committed to staying up-to-date with the latest trends and developments in the luxury real estate market, allowing us to provide his clients with expert advice and guidance.</p>
                    </div>

                    <div className="border-b border-[#054738] flex lg:items-end lg:flex-row flex-col lg:ml-auto lg:w-[80%] w-full lg:justify-between pb-[2rem]">
                        <h2 className="lg:text-[4rem] text-[2.5rem] text-[#054738] text-start flex items-start justify-start">Available</h2>
                        <p className="lg:w-[400px] w-full">Real estate transactions can be time-sensitive. We are always available to assist our clients, whether it’s answering questions, arranging property viewings, or negotiating.</p>
                    </div>

                     <div className="border-b border-[#054738] flex lg:items-end lg:flex-row flex-col lg:ml-auto lg:w-[80%] w-full lg:justify-between pb-[2rem]">
                        <h2 className="lg:text-[4rem] text-[2.5rem] text-[#054738] text-start flex items-start justify-start">Personal</h2>
                        <p className="lg:w-[400px] w-full">We provide personalized attention and tailored services to ensure our clients have a stress-free and enjoyable real estate experience that meet their needs..</p>
                    </div>
              </div>
          </div>

          <div className="container-1 mt-[5rem]">
              <div className="flex items-start flex-col">
                    <div className="flex flex-col gap-[1rem] mb-[1rem]">
                        <h2 className="lg:text-[4.5rem] text-[3rem] text-[#054738]">The numbers don't lie</h2>
                        <p className="lg:w-[400px] w-full">For over 20 years we have been helping potential buyers find the home of their dreams.</p>
                        <Link href="/contact" className="flex items-center gap-[1rem] lg:justify-center justify-start">Reach out <div className="border border-[#054738] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                         </svg>
                       </div>
                      </Link>
                    </div>


                    <div className="flex lg:items-end gap-[2rem] lg:justify-end lg:ml-auto lg:flex-row flex-col"> 
                        <div>
                             <h2 className="text-[5rem] text-[#054738]">$100</h2>
                             <span>million in houses sold last year</span>
                        </div>

                        <div>
                             <h2 className="text-[5rem] text-[#054738]">20+</h2>
                             <span>years of experience in Real Estate</span>
                        </div>

                        <div>
                             <h2 className="text-[5rem] text-[#054738]">32</h2>
                             <span>Sold in the last 18 months alone</span>
                        </div>
                    </div>
              </div>
          </div>

          <section className="listings section">
             <div className="listings-container container-1 flex lg:items-center lg:flex-row flex-col gap-[2rem]">
                       <Image src="/25.jpeg" alt="" className="w-[700px] h-[400px]" width={1000} height={1000} quality={100}/>

                  <div>
                       <Image src="/about.jpeg" alt="" className="w-[700px] h-[350px]" width={1000} height={1000} quality={100}/>
                       <div className="flex items-center justify-between mt-[1rem]">
                           <p className="w-[300px] text-[#054738]">Providing extensive experience and deep understanding of luxury real estate.</p>

                           <Link href="/listings" className="lg:mt-0 mt-[1rem] flex items-center gap-[1rem] lg:justify-center justify-start">View listings <div className="border border-[#054738] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                         </svg>
                       </div>
                      </Link>
                       </div>
                  </div>
             </div>
        </section>
         </>
    )
}