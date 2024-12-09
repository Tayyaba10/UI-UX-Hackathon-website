import Image from "next/image";

export default function BlowHero(){
    return (
        <>
     <div className=" w-[100%] h-[100px] bg-[#F9F1E7] flex justify-between " >
        <div className="flex items-center justify-center gap-8 ml-16">
        <Image src={'/shop/system-uicons_filtering.png'} width={25} height={25} alt="Picture of the author" />
            <p className="font-normal text-xl">Filter</p>
           <Image src={'/shop/ci_grid-big-round.png'} alt="icon" width={28} height={28}/>
           <Image src={'/shop/bi_view-list.png'} alt="icon" width={24} height={24}/>
           <p className="text-footer">|</p>
            <p className="font-normal text-base"> Showing 1–16 of 32 results</p>
        </div>



        <div className="flex items-center gap-8 mr-32">
            <p className="font-normal text-xl">Show</p>
            
            
            <input className="w-[2.5rem] h-[2.5rem] text-footer text-center self-center" type="text" placeholder="16" name="" id="" />
            <p className="font-normal text-xl">Short by</p>
            <input className="w-[8rem] h-[2.5rem] text-footer text-center self-center" type="text" placeholder="Default" name="" id="" />
         </div>
   </div>
        </>
    )
}