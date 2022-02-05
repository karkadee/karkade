import Image from "next/image";
import React from "react";
import { Product } from "../redux/slices/appSlice";

interface Props{
    data: Product;
}

const ProductContainer: React.FC<Props> = ({data}) => {
  return (
    <div className="w-60 h-80 rounded-md flex items-center justify-between flex-col p-2 bg-white">
        <Image 
            className="rounded-t-md"
            src={data.images[0]}
            width={238}
            height={238}
        />

        <p>{data.name}</p>

        <strong>{data.price}</strong>
    </div>
  );
}

export default ProductContainer;
