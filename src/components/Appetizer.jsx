import { DecToInt } from "../utils";
export default function Appetizer({ title, desc, price, className }) {
  return (
    <div className={`flex flex-col text-black ${className}`}>
      <div className="text-lg font-bold uppercase">{title}</div>
      <div className="w-full my-2 text-lg text-gray-700">{desc}</div>
      <div className="text-lg font-bold text-gray-700">{DecToInt(price)}</div>
    </div>
  );
}
