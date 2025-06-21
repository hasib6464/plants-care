import React from "react";
import Banner from "../../Pages/Banner";
import Categories from "../../Pages/Categories";
import DailyCare from "../../Pages/DailyCare";
import PlantsCategories from "../../Pages/PlantsCategories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <DailyCare></DailyCare>
      <PlantsCategories></PlantsCategories>
    </div>
  );
};

export default Home;
