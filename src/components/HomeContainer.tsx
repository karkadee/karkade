import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import React from "react";

function HomeContainer() {
  return (
    <div className="w-full">
        <div className="w-full flex items-center justify-between h-screen">
            <Image 
                src="/images/green-plant.png" 
                alt="green plant facing up" 
                priority
                width={421}
                height={593}
            />

            <h1 className="text-center">Populārākais ziedu salons Rīgā ar vairāk nekā 10 gadu pieredzi</h1>

            <Image 
                className="absolute top-40"
                src="/images/blue-plant.png" 
                alt="blue plant facing down" 
                width={374}
                height={666}
            />
        </div>

        <div className="w-full px-80">
            <div className="w-full">
                <Carousel 
                    autoPlay
                    infiniteLoop
                    interval={3000}
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
            </div>
        </div>
    </div>
  );
}

export default HomeContainer;
