import Image from "next/image";
import React, { useState } from "react";
import { Product } from "../redux/slices/appSlice";

interface Props{
    data: Product;
}

const ProductContainer: React.FC<Props> = ({data}) => {
    const [price] = useState(data.price.toString().split("."))
    const [formattedPrice] = useState(`${price[0]}.${price.length === 2 ? price[1].length === 1 ? `${price[1]}0` : "00" : "00"}`);

    return (
        <button className="w-60 h-80 rounded-md flex items-center justify-between flex-col p-2 bg-white cursor-pointer outline-green-600">
            <Image 
                className="rounded-t-md"
                src={data.images[0]}
                width={238}
                height={238}
            />

            <p>{data.name}</p>

            <strong>{formattedPrice}</strong>
        </button>
    );
}

export default ProductContainer;
