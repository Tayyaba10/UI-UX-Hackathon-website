export default function Footer(){
    return (
        <>
        <footer>

        <div className="flex items-center justify-evenly mt-8  p-5 border-t-2 leading-10  border-gray-300">
            <div className="w-[14rem] mb-16 ">
                <h2 className="font-bold text-2xl ">Funiro.</h2>
                <p className=" text-base font-normal text-footer mt-8">400 University Drive Suite 200 Coral Gables,
               <br/> FL 33134 USA</p>
            </div>


            <div className="flex flex-col ">
                <h4 className="text-footer font-medium text-base mt-14">Links</h4>
                <ul >
                    <li className="font-medium text-base mt-8">Home</li>
                    <li className="font-medium text-base mt-8">Shop</li>
                    <li className="font-medium text-base mt-8">About</li>
                    <li className="font-medium text-base mt-8">Contact</li>
                </ul>
            </div>


            <div>
                <h4 className="text-footer font-medium text-base">Help</h4>
                <ul>
                    <li className="font-medium text-base mt-8">Payment Option</li>
                    <li className="font-medium text-base mt-8">Returns</li>
                    <li className="font-medium text-base mt-8">Privacy Policies</li>
                </ul>
            </div>

            <div className="flex flex-col">
                <h4 className="text-footer font-medium text-base mb-32">Newsletter</h4>
               
            <div className="flex gap-2 underline">
            <input type="text" placeholder="Enter Your Email Address" className="font-normal text-sm text-footer " />
            <button type="submit" className="font-medium text-sm ">SUBSCRIBE</button>
            </div>
            </div> 
            
        </div>
        <div  className="pt-[16px] w-full border-t border-[#D9D9D9] ml-32">   
            <p className="text-base font-normal ">2023 furino. All rights reverved</p>
        </div>
        </footer>
        </>
    )

}