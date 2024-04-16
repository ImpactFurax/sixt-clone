import React, { useEffect, useState } from 'react'

const FilterSection = ({ carFilter, setBrand, orderPrice }: any) => {

  const [brandList, setBrandList] = useState<any>([]);

  const BrandSet = new Set();

  useEffect(() => {
    if (carFilter) {
      handlerFilter();
    }
  }, [carFilter])

  const handlerFilter = () => {
    carFilter.forEach((element: any) => {
      BrandSet.add(element.marque);
    });
    setBrandList(Array.from(BrandSet));
  }

  return (
    <div className='flex justify-end gap-3 p-3'>
      <select
        onChange={(e) => orderPrice(e.target.value)}
        className="w-full max-w-xs border border-gray-300 p-4 rounded-xl outline-none cursor-pointer"
      >
        <option disabled selected>Trier par prix</option>
        <option value={-1}>Par prix croissant</option>
        <option value={1}>Par prix decroissant</option>
      </select>

      <select
        onChange={(e) => setBrand(e.target.value)}
        className="w-full max-w-xs border border-gray-300 p-4 rounded-xl outline-none cursor-pointer"
      >
        <option disabled selected>Trier par marque</option>
        {brandList.map((item: string, index: number) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default FilterSection