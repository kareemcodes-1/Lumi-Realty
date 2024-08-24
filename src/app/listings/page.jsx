import Image from "next/image";
import Nav from "../components/navbar/Nav";

export default function ListingsPage () {
    return (
        <>
        <Nav />
        <div className="container-1 mt-[3rem]">
           <div className="listing-content">
           <h1 className="text-[5rem] text-[#054738]">Properties for sale</h1>
           <span className="text-[1rem]">Selling some of the nicest houses money can buy.</span>

           <div className="listing-grid grid grid-cols-2 gap-[1rem] mt-[3rem]">
                 <article className="listing-box relative text-[#fff] w-[600px]">
                       <Image src={'/blog-3.jpeg'} height={500} width={500} quality={100} className="w-full"/>
                       <div className="absolute top-[30%] w-full">
                       <div className="flex items-center justify-between mx-[1.5rem]">
                       <div className="text-[#fff]">
                           <h2 className="text-[#fff] text-[24px]">
                               $490000
                           </h2>
                           <h2 className="text-[#fff] text-[40px] break-words w-[70%]">2934 Pasadena Court</h2>
                       </div>

                       <div className="w-[50%]">
                           <div className="flex gap-[.5rem] items-center border-b border-white"><span className="text-[2rem]">6</span> <span>bedrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b border-white"><span className="text-[2rem]">4</span> <span>bathrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b border-white"><span className="text-[2rem]">4, 996</span> <span>sq ft</span></div>
                       </div>
                       </div>
                       </div>
                 </article>

                 <article className="listing-box relative text-[#fff] w-[600px]">
                       <Image src={'/blog-4.jpg'} height={500} width={500} quality={100} className="w-full"/>
                       <div className="absolute top-[30%] w-full">
                       <div className="flex items-center justify-between mx-[1.5rem]">
                       <div className="text-[#fff]">
                           <h2 className="text-[#fff] text-[24px]">
                               $490000
                           </h2>
                           <h2 className="text-[#fff] text-[40px] break-words w-[70%]">2934 Pasadena Court</h2>
                       </div>

                       <div className="w-[50%]">
                           <div className="flex gap-[.5rem] items-center border-b border-white"><span className="text-[2rem]">6</span> <span>bedrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b border-white"><span className="text-[2rem]">4</span> <span>bathrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b border-white"><span className="text-[2rem]">4, 996</span> <span>sq ft</span></div>
                       </div>
                       </div>
                       </div>
                 </article>

                 <article className="listing-box relative text-[#fff] w-[600px]">
                       <Image src={'/blog-5.jpeg'} height={500} width={500} quality={100} className="w-full"/>
                       <div className="absolute top-[30%] w-full">
                       <div className="flex items-center justify-between mx-[1.5rem]">
                       <div className="text-[#fff]">
                           <h2 className="text-[#fff] text-[24px]">
                               $490000
                           </h2>
                           <h2 className="text-[#fff] text-[40px] break-words w-[70%]">2934 Pasadena Court</h2>
                       </div>

                       <div className="w-[50%]">
                           <div className="flex gap-[.5rem] items-center border-b border-white"><span className="text-[2rem]">6</span> <span>bedrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b border-white"><span className="text-[2rem]">4</span> <span>bathrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b border-white"><span className="text-[2rem]">4, 996</span> <span>sq ft</span></div>
                       </div>
                       </div>
                       </div>
                 </article>

                 <article className="listing-box relative text-[#fff] w-[600px]">
                       <Image src={'/hres-1.jpeg'} height={500} width={500} quality={100} className="w-full"/>
                       <div className="absolute top-[30%] w-full">
                       <div className="flex items-center justify-between mx-[1.5rem]">
                       <div className="text-[#fff]">
                           <h2 className="text-[#fff] text-[24px]">
                               $490000
                           </h2>
                           <h2 className="text-[#fff] text-[40px] break-words w-[70%]">2934 Pasadena Court</h2>
                       </div>

                       <div className="w-[50%]">
                           <div className="flex gap-[.5rem] items-center border-b border-white"><span className="text-[2rem]">6</span> <span>bedrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b border-white"><span className="text-[2rem]">4</span> <span>bathrooms</span></div>
                           <div className="flex gap-[.5rem] items-center border-b border-white"><span className="text-[2rem]">4, 996</span> <span>sq ft</span></div>
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