import React from "react";
import { GiFertilizerBag, GiPlantWatering } from "react-icons/gi";
import { PiPlantThin } from "react-icons/pi";

const DailyCare = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center ">Plants Daily Care </h1>
      <div className="py-10 flex gap-4">
        <div className="bg-slate-100 rounded-2xl w-full space-y-2 p-2">
          <div className="flex flex-col items-center">
            <GiPlantWatering className="w-24 h-12" />
            <h1 className="text-3xl font-semibold">Watering</h1>
          </div>
          <ul className="list-disc ml-6">
            <li>Check your plants at least once per week</li>
            <li>Only water when the top two inches of soil feel dry</li>
            <li>In summer, plants may dry out quickly</li>
          </ul>
        </div>
        <div className="bg-slate-100 rounded-2xl w-full space-y-2 p-2">
          <div className="flex flex-col items-center">
            <GiFertilizerBag className="w-24 h-12" />
            <h1 className="text-3xl font-semibold">Fertilizers</h1>
          </div>
          <ul className="list-disc ml-6">
            <li> Basic Nutrients</li>
            <li>Supplementary Plant Nutrients</li>
            <li> Bio-Compost</li>
          </ul>
        </div>
        <div className="bg-slate-100 rounded-2xl w-full space-y-2 p-2">
          <div className="flex flex-col items-center">
            <PiPlantThin className="w-24 h-12" />
            <h1 className="text-3xl font-semibold">Checking Health</h1>
          </div>
          <ul className="list-disc ml-6">
            <li>Leaf Cleaning</li>
            <li>Repotting your Houseplants</li>
            <li>Fertilizing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DailyCare;
