import Image from "next/image";

import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
  return (
  
    <div>
      <div className="relative">
        <Image src={'/contact/Rectangle 1.png'} alt="Picture of the author" width={1440} height={316}/>
        <div className="absolute top-[29%] left-[47%] flex justify-center flex-col items-center ">
          <Image src={'/navbar-img/logo.png'} alt="logo" width={77} height={77}/>
          <h3 className="font-medium text-5xl">Cart</h3>
          <div className="flex items-center">
            <h3 className="font-medium text-base">Home</h3>
            <IoIosArrowForward />
            <h3 className="font-light text-base">cart</h3>
          </div>
        </div>
       
      </div>

      <div className="">
        <div className=" producDetails flex justify-around items-center p-4 w-[817px] h-[55px] bg-[#F9F1E7] ">
          <h2 className="font-semibold text-base ">Product</h2>
          <h2 className="font-semibold text-base ">Price</h2>
          <h2 className="font-semibold text-base ">Quantity</h2>
          <h2 className="font-semibold text-base ">Subtotal</h2>
        </div> 
      <div>

<br />            
        <div className="flex items-center justify-evenly gap-1">
            <Image src="/Mask group (2).png" width={111} height={90} alt="Picture of the author" className="bg-[#F9F1E7]"/>
            <p className="font-normal text-base text-footer">Asgaard sofa</p>
            <p className="font-normal text-base text-footer">Rs. 250,000.00</p>
            <input type="text" placeholder="1" className="border-[1px] border-footer w-[32px] h-[32px]  "/>
            <p className="font-normal text-base">Rs. 250,000.00</p>
            <Image src={'/delete.png'} alt="icon" width={21} height={21}/>


        <div className="bg-[#F9F1E7] text-center w-[24rem] h-[24rem] pt-[1rem] ">
          <h2 className="font-semibold text-[32px] ">Cart Totals</h2>
          <p className="font-normal text-base text-footer p-8"><span className="font-medium text-base text-black">Subtotal </span>  Rs. 250,000.00</p>
          <p className="font-medium text-[20px] text-button "><span className="font-medium text-base text-black ">Total</span> Rs. 250,000.00</p>

          <button className="mt-16 rounded-xl w-[222px] font-normal text-[20px] border-gray-900 border-2 p-2 pr-3 pl-3">Check Out</button>
        </div>
        </div>
        </div>

      </div>

      <div className=" mt-14 mb-5 flex justify-evenly items-center p-2 w-[100%] h-[270px] bg-[#FAF3EA]">
        
        < div className="flex gap-4">
    
        <Image src="/contact/trophy 1.png" width={60} height={60} alt="Picture of the author" />
         <div>
          <h4 className="font-semibold text-[25px]">High Quality</h4>
          <p className="font-medium text-lg text-cardtext">crafted from top materials</p>
         </div>
        </div>

        <div className="flex gap-4">
        <Image src="/contact/guarantee.png" width={60} height={60} alt="Picture of the author" />
          <div>
          <h4 className="font-semibold text-[25px]">Warranty Protection</h4>
          <p className="font-medium text-lg text-cardtext">Over 2 years</p>
          </div>
        </div>

        <div className="flex gap-4">
        <Image src="/contact/shipping.png" width={60} height={60} alt="Picture of the author" />
          <div>
          <h4 className="font-semibold text-[25px]">Free Shipping</h4>
          <p className="font-medium text-lg text-cardtext">Order over 150 $</p>
          </div>
        </div>

        <div className="flex gap-4">
        <Image src="/contact/Vector (2).png" width={60} height={60} alt="Picture of the author" />
          <div>
          <h4 className="font-semibold text-[25px]">24 / 7 Support</h4>
          <p className="font-medium text-lg text-cardtext">Dedicated support</p>
          </div>
        </div>
      </div>
 </div>

  );
}