import { FaGasPump, FaCarAlt, FaUser } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { useEffect, useState } from 'react';
import Image from "next/image";

const Card = (props: any) => {

  const [car, setCar] = useState<any>();

  useEffect(() => {
    if (props.car) {
      setCar(props.car);
    }
  }, [props.car])

  return car && (
    <div className="border-4 border-white hover:border-gray-500 rounded-xl p-1">
      <div className="relative bg-gradient-to-b from-[#1a1a1a] via-gray-500 to-[#1a1a1a] border shadow-md gap-2 flex flex-col justify-between rounded-xl cursor-pointer text-[#fff] p-5">
        <h2 className="font-bold text-[20px]">
          {car?.name}
        </h2>
        <p className="absolute top-0 right-2 flex items-center gap-1 my-3 p-2 rounded-md font-bold text-[10px] bg-[#ff5f00]">
          <GiSteeringWheel size={20} />
          <span>{car?.typeBoite}</span>
        </p>
        <div className="flex items-center gap-2 text-xs">
          <p className="bg-gray-300 text-gray-700 p-2 rounded-md flex items-center gap-1">
            <FaUser size={20} />
            <span>{car?.places}</span>
          </p>
          <p className="bg-gray-300 text-gray-700 p-2 rounded-md flex items-center gap-1">
            <FaGasPump size={20} />
            <span>{car?.type}</span>
          </p>
          <p className="bg-gray-300 text-gray-700 p-2 rounded-md flex items-center gap-1">
            <FaCarAlt size={20} />
            <span>{car?.marque}</span>
          </p>
        </div>
        <Image
          src={car?.image?.url}
          alt={car?.name}
          width={260}
          height={150}
          className="w-full object-cover"
        />
        <p className="text-xs">
          ✅ incl. 500 km
        </p>

        <p>
          <span className="font-bold text-2xl">
            {car?.price}€
          </span>
          {' '}
          <span className="text-sm">
            / par jour
          </span>
        </p>
      </div>
    </div>
  )
}

export default Card