import Image from "next/image";
import Link from "next/link";

export default function About () {
    return (
        <section className="about-home pt-[15rem]">
            <div className="about-container container-1 ">
                 <div className="about-content flex items-center lg:flex-row flex-col -mt-[10rem]">
                       <div className="lg:mb-0 mb-[3rem]">
                            <h1 className="lg:text-[4rem] text-[2rem] text-[#054738] tracking-[-1.6px] mb-[1.3rem]">For those that want a home that impresses.</h1>
                            <Link href="/about" className="flex items-center gap-[1rem] lg:justify-start">
                              About us <div className="border border-[#054738] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                         </svg>
                       </div>
                            </Link>
                       </div>


                       <div className="flex items-end justify-end">
                           <div className="">
                           <span className="text-[1.2rem] text-[#054738]">We specialize in selling high-end luxury residential properties all across beautiful LA.</span>
                           <div className="lg:flex items-center gap-[2rem]">
                               <div>
                                <h1 className="text-[96px] text-[#054738]">$100</h1>
                                <span className="text-[1.2rem] text-[#054738]">million in houses sold last year</span>
                               </div>

                               <div>
                                <h1 className="text-[96px] text-[#054738]">20+</h1>
                                <span className="text-[1.2rem] text-[#054738]">years of experience in Real Estate</span>
                               </div>
                           </div>
                           </div>
                       </div>
                 </div>

                 <div className="mt-[4rem]">
                   <Image src="/blog-2.jpeg" alt="" width={1000} height={1000} quality={100} className="w-full h-[600px] object-cover"/>
              </div>
            </div>
        </section>
    )
}