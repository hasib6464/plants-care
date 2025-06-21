import React from "react";

const PlantsCategories = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-6">
        <img className="h-full" src="https://i.ibb.co/B5h09KN8/img3.webp"></img>
      </div>
      <div className="col-span-6">
        <div className="grid grid-cols-2 gap-4 relative">
          <div>
            <img src="https://i.ibb.co/SXRgYGB5/imgCart1.jpg" />
            <h1 className="text-white font-bold text-center text-2xl absolute top-9 left-24">
              Ferns Plants
            </h1>
          </div>
          <div>
            <img className="h-full" src="https://i.ibb.co/gsptzGp/img1.png" />
            <h1 className=" text-white font-bold text-center text-2xl absolute top-9 right-16">
              Tripical plants
            </h1>
          </div>
          <div>
            <img src="https://i.ibb.co/VWSc7wLL/indor3.jpg" />
          </div>
          <div>
            <img src="https://i.ibb.co/svTpfYP0/bonsai3.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsCategories;
