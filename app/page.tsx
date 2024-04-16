'use client';

import { useEffect, useState } from "react";
import DevisesSection from "./components/DevisesSection";
import GalerieSection from "./components/GalerieSection";
import HeaderSection from "./components/HeaderSection";
import SloganSection from "./components/SloganSection";
import { getCarList } from "@/services";
import FilterSection from "./components/FilterSection";

export default function Home() {

  const [carList, setCarList] = useState<any>([]);
  const [carFilter, setCarFilter] = useState<any>([]);

  useEffect(() => {
    getCars();
  }, [])

  const getCars = async () => {
    const result: any = await getCarList();
    setCarList(result.carLists);
    setCarFilter(result.carLists)
  }

  const filterCardList = (brand: string) => {
    const filterList = carFilter.filter((item: any) => item.marque === brand);
    setCarList(filterList);
  }

  const filterPrice = (order: any) => {
    const data = [...carFilter].sort((a, b) => order == -1 ? a.price - b.price : b.price - a.price);
    setCarList(data);
  }

  return (
    <>
      <SloganSection />
      <HeaderSection />
      <DevisesSection />
      <FilterSection carFilter={carFilter} setBrand={(value: string) => filterCardList(value)} orderPrice={(value: string) => filterPrice(value)} />
      <GalerieSection carList={carList} />
    </>
  );
}
