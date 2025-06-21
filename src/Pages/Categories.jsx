import React from "react";

const Categories = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold ">All Categories</h1>
      <div className="flex  items-center justify-evenly pt-10">
        <div className="">
          <div className="avatar">
            <div className="w-32 rounded-full">
              <img src="https://i.ibb.co/tnWbj7V/img2.webp" />
            </div>
          </div>
          <h1 className="text-3xl font-medium p-10 rounded-2xl bg-slate-100">
            In Door
          </h1>
        </div>
        <div className="">
          <div className="avatar ">
            <div className="w-32 rounded-full">
              <img src="https://i.ibb.co/n88yQy67/indor5.jpg" />
            </div>
          </div>
          <h1 className="text-3xl font-medium p-10 rounded-2xl bg-slate-100 ">
            Out Door
          </h1>
        </div>
        <div className="">
          <div className="avatar">
            <div className="w-32 rounded-full">
              <img src="https://i.ibb.co/sdhkk68X/bonsai5.webp" />
            </div>
          </div>
          <h1 className="text-3xl font-medium p-10 rounded-2xl bg-slate-100">
            Bonsai
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
