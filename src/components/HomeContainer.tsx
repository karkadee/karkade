import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import React from "react";
import productCategories from "../tests/productCategories";
import productData from "../tests/productData";
import Product from "./Product";

function HomeContainer() {
  return (
    <div className="w-full">
        <div className="w-full flex items-center px-10 sm:px-20 lg:px-0 justify-center lg:justify-between pt-36 sm:pt-24 pb-0 sm:pb-10 md:pt-40 lg:py-0 lg:h-screen">
            <div className="hidden lg:block">
                <Image 
                    src="/images/green-plant.png" 
                    alt="green plant facing up" 
                    priority
                    width={421}
                    height={593}
                />
            </div>

            <h1 className="text-center">Populārākais ziedu salons Rīgā ar vairāk nekā 10 gadu pieredzi</h1>
            
            <div className="hidden lg:block">
                <Image 
                    src="/images/blue-plant.png" 
                    alt="blue plant facing down" 
                    width={374}
                    height={666}
                />
            </div>
        </div>

        <div className="w-full hidden sm:flex flex-col items-center justify-center">
            <div className="w-full sm:w-[600px] md:w-[750px] lg:w-[1000px]">
                <Carousel 
                    autoPlay
                    infiniteLoop
                    interval={5000}
                    showThumbs={false}
                >
                    <div className="w-full">
                        <img 
                            src="/images/bouquets-banner.jpeg"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-full">
                        <img 
                            src="/images/flowers-in-basket-banner.jpeg"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-full">
                        <img 
                            src="/images/roses-banner.jpeg"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Carousel>

                <div className={`hidden md:flex w-full flex-col ss:flex-row items-center justify-center px-2 sm:px-10 py-1 bg-white transition-opacity duration-300`}>
                    {
                        productCategories.map((cat, i) => {
                            return (
                                <button 
                                    key={i}
                                    className={`outline-green-600 p-1 ${productCategories.length - 1 === i ? "" : "mr-4"}`}
                                >
                                    <p className="font-bold hover:text-green-700 transition-colors duration-150">{cat.text}</p>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>

        <div className="w-full flex justify-center">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
                {
                    productData.map((product, i) => {
                        return (
                            <Product 
                                key={i}
                                data={product}
                            />
                        )
                    })
                }
            </div>
        </div>
    </div>
  );
}

export default HomeContainer;