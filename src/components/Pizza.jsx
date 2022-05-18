import React from "react";
import { DecToInt } from "../utils";

export default function Pizza({ img, title, price, desc }) {
  return (
    <div className="flex flex-col">
      <div className="relative cursor-pointer container-pizza grow">
        <img className="w-full image-pizza" src={img} alt={title} />
        <div className="absolute top-0 w-full h-full p-2 text-lg bg-gray-700 select-none desc-pizza grow sm:text-md">{desc}</div>
      </div>
      <div className="px-3 py-2 text-lg bg-gray-700">
        <div className="font-bold uppercase">{title}</div>
        <div className="text-orange-400 ">{DecToInt(price)}</div>
      </div>
    </div>
  );
}
