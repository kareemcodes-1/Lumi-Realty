import Image from "next/image";
import Nav from "../components/navbar/Nav";

export default function ListingsPage () {
    return (
        <>
        <Nav />
        <div className="container-1 lg:mt-[3rem] mt-[7rem]">
           <div className="listing-content">
           <h1 className="lg:text-[5rem] text-[3rem] text-[#054738]">Properties for sale</h1>
           <span className="text-[1rem]">Selling some of the nicest houses money can buy.</span>

           <div className="listing-grid lg:grid lg:grid-cols-2 flex lg:flex-row flex-col lg:gap-[1rem] gap-[3rem] mt-[3rem]">
                 <article className="listing-box relative text-[#fff] lg:w-[600px] w-auto">
                       <Image src={'/blog-3.jpeg'} height={500} width={500} quality={100} className="w-full"/>
                       <div className="lg:absolute bottom-[2rem] w-full mt-[2rem]">
                       <div className="flex lg:items-center items-start lg:flex-row flex-col lg:justify-between justify-start lg:mx-[1.5rem] mx-0">
                       <div className="lg:text-[#fff] text-[#054738]">
                           <h2 className="lg:text-[#fff] text-[#054738] text-[24px]">
                               $4,900,000
                           </h2>
                           <h2 className="lg:text-[#fff] text-[#054738] text-[40px] break-words lg:w-[70%] w-auto">2934 Pasadena Court</h2>
                       </div>

                       <div className="lg:w-[50%] w-full">
                           <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]"><span className="text-[2rem] lg:text-white text-[#054738]">6</span> <span className=" lg:text-white text-[#054738]">bedrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]"><span className="text-[2rem] lg:text-white text-[#054738]">4</span> <span className=" lg:text-white text-[#054738]">bathrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]"><span className="text-[2rem] lg:text-white text-[#054738]">4, 996</span> <span className=" lg:text-white text-[#054738]">sq ft</span></div>
                       </div>
                       </div>
                       </div>
                 </article>

                 <article className="listing-box relative text-[#fff] lg:w-[600px] w-auto">
                       <Image src={'/blog-4.jpg'} height={500} width={500} quality={100} className="w-full"/>
                       <div className="lg:absolute bottom-[2rem] w-full mt-[2rem]">
                       <div className="flex lg:items-center items-start lg:flex-row flex-col lg:justify-between justify-start lg:mx-[1.5rem] mx-0">
                       <div className="lg:text-[#fff] text-[#054738]">
                           <h2 className="lg:text-[#fff] text-[#054738] text-[24px]">
                               $17,900,000
                           </h2>
                           <h2 className="lg:text-[#fff] text-[#054738] text-[40px] break-words lg:w-[70%] w-auto">7 Barrow Hill</h2>
                       </div>

                       <div className="lg:w-[50%] w-full">
                           <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]"><span className="text-[2rem] lg:text-white text-[#054738]">6</span> <span className=" lg:text-white text-[#054738]">bedrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]"><span className="text-[2rem] lg:text-white text-[#054738]">4</span> <span className=" lg:text-white text-[#054738]">bathrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]"><span className="text-[2rem] lg:text-white text-[#054738]">4, 996</span> <span className=" lg:text-white text-[#054738]">sq ft</span></div>
                       </div>
                       </div>
                       </div>
                 </article>

                 <article className="listing-box relative text-[#fff] lg:w-[600px] w-auto">
                       <Image src={'/blog-5.jpeg'} height={500} width={500} quality={100} className="w-full"/>
                       <div className="lg:absolute bottom-[2rem] w-full mt-[2rem]">
                       <div className="flex lg:items-center items-start lg:flex-row flex-col lg:justify-between justify-start lg:mx-[1.5rem] mx-0">
                       <div className="lg:text-[#fff] text-[#054738]">
                           <h2 className="lg:text-[#fff] text-[#054738] text-[24px]">
                               $6,499,000
                           </h2>
                           <h2 className="lg:text-[#fff] text-[#054738] text-[40px] break-words lg:w-[70%] w-auto">19 Selford Way</h2>
                       </div>

                       <div className="lg:w-[50%] w-full">
                           <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]"><span className="text-[2rem] lg:text-white text-[#054738]">6</span> <span className=" lg:text-white text-[#054738]">bedrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]"><span className="text-[2rem] lg:text-white text-[#054738]">4</span> <span className=" lg:text-white text-[#054738]">bathrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]"><span className="text-[2rem] lg:text-white text-[#054738]">4, 996</span> <span className=" lg:text-white text-[#054738]">sq ft</span></div>
                       </div>
                       </div>
                       </div>
                 </article>

                 <article className="listing-box relative text-[#fff] lg:w-[600px] w-auto">
                       <Image src={'/hres-1.jpeg'} height={500} width={500} quality={100} className="w-full"/>
                       <div className="lg:absolute bottom-[2rem] w-full mt-[2rem]">
                       <div className="flex lg:items-center items-start lg:flex-row flex-col lg:justify-between justify-start lg:mx-[1.5rem] mx-0">
                       <div className="lg:text-[#fff] text-[#054738]">
                           <h2 className="lg:text-[#fff] text-[#054738] text-[24px]">
                               $17,499,000
                           </h2>
                           <h2 className="lg:text-[#fff] text-[#054738] text-[40px] break-words lg:w-[70%] w-auto">512 Hillside Court</h2>
                       </div>

                       <div className="lg:w-[50%] w-full">
                           <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]"><span className="text-[2rem] lg:text-white text-[#054738]">6</span> <span className=" lg:text-white text-[#054738]">bedrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]"><span className="text-[2rem] lg:text-white text-[#054738]">4</span> <span className=" lg:text-white text-[#054738]">bathrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]"><span className="text-[2rem] lg:text-white text-[#054738]">4, 996</span> <span className=" lg:text-white text-[#054738]">sq ft</span></div>
                       </div>
                       </div>
                       </div>
                 </article>
           </div>
           </div>
        </div>
        </>
    )
}