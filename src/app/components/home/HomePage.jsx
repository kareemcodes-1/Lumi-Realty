import React from 'react';

const HomePage = () => {
  return (
    <div>
        <section className="mx-auto relative home">
         <div>

             {/* <div className="flex items-end justify-end h-[90vh] w-full"> */}
            <div className="absolute bottom-[0rem] lg:left-[10rem] right-[1rem]">
                 <div className="flex flex-col items-end justify-end w-full">
                     <p className="text-[#fff] lg:text-[1.3rem] text-[1rem]">Find your next home.</p>
                     <div></div>

                     <div className="lg:text-[2rem] text-[1rem] mt-[1rem] text-[#fff]">
                        Luxury Residential Properties in California.
                     </div>

                     <div className="flex items-start gap-[.5rem] justify-start text-[#fff]">
                        <span className="lg:text-[8rem] text-[2.5rem]">Exclusivity</span> <span className="lg:text-[8rem] text-[2.5rem]">defined.</span>
                     </div>
                 </div>
            </div>
      </div>
    </section>
    </div>
  )
}

export default HomePage;