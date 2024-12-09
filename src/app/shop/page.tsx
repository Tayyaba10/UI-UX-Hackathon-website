import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import BlowHero from "@/components/shopBlowHero";

export default function ShopHero() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: 'Syltherine',
      price: "Rp 2.500.000",
      age: 30,
      image: "/product/image 1.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Leviosa',
      price: "Rp 2.500.000",
      age: 25,
      image: "/product/image 7.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Lolito',
      price: "Rp 7.000.000",
      age: 28,
      image: '/product/images.png',
      description: 'Luxury big sofa',
    },
    {
      name: 'Respira',
      price: "Rp 500.000",
      age: 28,
      image: '/product/images (1).png',
      description: 'Outdoor bar table and stool',
    },
    {
      name: 'Syltherine',
      price: "Rp 2.500.000",
      age: 30,
      image: "/product/image 1.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Leviosa',
      price: "Rp 2.500.000",
      age: 25,
      image: "/product/image 7.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Lolito',
      price: "Rp 7.000.000",
      age: 28,
      image: '/product/images.png',
      description: 'Luxury big sofa',
    },
    {
      name: 'Respira',
      price: "Rp 500.000",
      age: 28,
      image: '/product/images (1).png',
      description: 'Outdoor bar table and stool',
    },{
      name: 'Syltherine',
      price: "Rp 2.500.000",
      age: 30,
      image: "/product/image 1.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Leviosa',
      price: "Rp 2.500.000",
      age: 25,
      image: "/product/image 7.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Lolito',
      price: "Rp 7.000.000",
      age: 28,
      image: '/product/images.png',
      description: 'Luxury big sofa',
    },
    {
      name: 'Respira',
      price: "Rp 500.000",
      age: 28,
      image: '/product/images (1).png',
      description: 'Outdoor bar table and stool',
    },
    {
      name: 'Syltherine',
      price: "Rp 2.500.000",
      age: 30,
      image: "/product/image 1.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Leviosa',
      price: "Rp 2.500.000",
      age: 25,
      image: "/product/image 7.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Lolito',
      price: "Rp 7.000.000",
      age: 28,
      image: '/product/images.png',
      description: 'Luxury big sofa',
    },
    {
      name: 'Respira',
      price: "Rp 500.000",
      age: 28,
      image: '/product/images (1).png',
      description: 'Outdoor bar table and stool',
    },
   
  ];

  return (
    <>
      {/* shopsect */}
      <div className="relative">
        <Image src={'/contact/Rectangle 1.png'} alt="Picture of the author" width={1440} height={316}/>
        <div className="absolute top-[29%] left-[47%] flex justify-center flex-col items-center ">
        <Image src={'/navbar-img/logo.png'} alt="logo" width={77} height={77}/>
          <h3 className="font-medium text-5xl">Shop</h3>
          <div className="flex items-center">
            <h3 className="font-medium text-base">Home</h3>
            <IoIosArrowForward />
            <h3 className="font-light text-base">Shop</h3>
          </div>
        </div>
        
      </div>
      <BlowHero />
      <div className="grid grid-cols-4 items-center justify-center p-20 gap-4">
        {data.map((card, index) => (
          <div  key={index} style={{ width: "15rem" }}>
            <Image
              src={card.image}
              alt="card"
              style={{ width: "18rem", height: "18rem" }}
              width={285} height={301}
            />
            <div className="bg-bgcard">
              <h5 style={{ fontWeight: "bold" }}>
                {card.name}
              </h5>
              <p className="text-base font-medium text-cardtext">{card.description}</p>
              <h5  style={{ fontWeight: "bold" }}>
                {card.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex gap-2 justify-center " >
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">1</button>
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">2</button>
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">3</button>
     <button className="w-[4rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">Next</button>

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
    </>
  );
}