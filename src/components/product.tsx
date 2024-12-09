import Image from "next/image";
// import Bedroom from "../public/bedroom.png"
export default function Products(){

    interface Card{
        name: string,
        age: number,
        description: string,
        image: string,
        price: string,
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
          name: 'Grifo',
          price: "Rp 1.500.000",
          age: 28,
          image: '/product/image 5.png',
          description: 'Night lamp',
        },
        {
          name: 'Muggo',
          price: "Rp 150.000",
          age: 28,
          image: '/product/image 6.png',
          description: 'Small mug',
        },
        {
          name: 'Pingky',
          price: "Rp 7.000.000",
          age: 28,
          image: '/product/Images (2).png',
          description: 'Cute bed set',
        },
        {
          name: 'Potty',
          price: "Rp 500.000",
          age: 28,
          image: '/product/Images (3).png',
          description: 'Minimalist flower pot',
        },
      ];
    
    return (
    <div className="w-full ">
           <div>
            <h2 className="text-center p-2 font-bold text-5xl">Our Product</h2>
            </div>
            <div className="grid grid-cols-4 items-center justify-center p-20 gap-1">
            {data.map((card, index) => (
              
            <div  key={index} style={{ width: "15rem" }}>
                <Image
                  src={card.image}
                  alt="card"
                  style={{ width: "18rem", height: "18rem" }}
                  
                
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
        <div className="flex items-center justify-center mb-12">
          <button className=" text-button p-2 border-2 border-button">Show More</button>
        </div>
    </div>
    )
}