import Image from "next/image";
import Nav from "../components/navbar/Nav";
import { Listings } from "../data";

export default function ListingsPage() {
  return (
    <>
      <Nav />
      <div className="container-1 lg:mt-[5rem] mt-[7rem]">
        <div className="listing-content">
          <h1 className="lg:text-[5rem] text-[3rem] text-[#054738]">
            Properties for sale
          </h1>
          <span className="text-[1rem]">
            Selling some of the nicest houses money can buy.
          </span>

          <div className="listing-grid lg:grid lg:grid-cols-2 flex lg:flex-row flex-col lg:gap-[1rem] gap-[3rem] mt-[3rem]">
            {Listings.map((listing) => (
                           <article key={listing.id} className="listing-box relative text-[#fff] lg:w-[600px] w-auto">
                           <Image
                             src={listing.img}
                             height={500}
                             width={500}
                             quality={100}
                             className="w-full"
                           />
                           <div className="lg:absolute bottom-[2rem] w-full mt-[2rem]">
                             <div className="flex lg:items-center items-start lg:flex-row flex-col lg:justify-between justify-start lg:mx-[1.5rem] mx-0">
                               <div className="lg:text-[#fff] text-[#054738]">
                                 <h2 className="lg:text-[#fff] text-[#054738] text-[24px]">
                                 {listing.price}
                                 </h2>
                                 <h2 className="lg:text-[#fff] text-[#054738] text-[40px] break-words lg:w-[70%] w-auto">
                                 {listing.location}
                                 </h2>
                               </div>
             
                               <div className="lg:w-[50%] w-full">
                                 <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]">
                                   <span className="text-[2rem] lg:text-white text-[#054738]">
                                   {listing.bedrooms}
                                   </span>{" "}
                                   <span className=" lg:text-white text-[#054738]">
                                     bedrooms
                                   </span>
                                 </div>
                                 <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]">
                                   <span className="text-[2rem] lg:text-white text-[#054738]">
                                   {listing.bathrooms}
                                   </span>{" "}
                                   <span className=" lg:text-white text-[#054738]">
                                     bathrooms
                                   </span>
                                 </div>
                                 <div className="flex gap-[.5rem] items-center border-b lg:border-white border-[#054738]">
                                   <span className="text-[2rem] lg:text-white text-[#054738]">
                                   {listing.sqft}
                                   </span>{" "}
                                   <span className=" lg:text-white text-[#054738]">
                                     sq ft
                                   </span>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
