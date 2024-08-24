import Image from 'next/image'
import React from 'react'

const Quote = () => {
  return (
    <section className="quote section">
        <div className="quote-container container-1 flex items-center lg:flex-row flex-col gap-[2rem]">
              <div className="quote-content lg:text-[3rem] text-[2rem] lg:w-[70%] w-full text-[#054738]">
                 Tyler made the process of buying my dream home easy and stress-free. Her professionalism and attention to detail are unparalleled.
              </div>

              <div className="flex lg:items-center items-start gap-[1rem]">
                  <Image src="/people01.png" alt="" className="w-[5rem] h-[5rem] object-contain rounded-full" width={1000} height={1000} quality={100}/>
                  <div>
                       <h1 className="text-[1.4rem] font-normal">Daniel Roberts</h1>
                       <p className="text-[1rem]">New Homeowner</p>
                  </div>
              </div>
        </div>
    </section>
  )
}

export default Quote