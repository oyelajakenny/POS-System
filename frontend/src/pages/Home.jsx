import React from "react";
import Greetings from "../components/home/Greetings";
import MiniCard from "../components/home/MiniCard";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrder from "../components/home/Recentorder";
import PopularDishes from "../components/home/PopularDishes";

const Home = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* {LEFT DIV} */}
      <div className="flex-[3] ">
        <Greetings />
        <div className="flex items-center w-full gap-3 px-8 mt-8">
          <MiniCard
            title="Total Earnings"
            icon={<BsCashCoin />}
            number={512}
            footerNum={1.6}
          />
          <MiniCard
            title="In Progress"
            icon={<GrInProgress />}
            number={16}
            footerNum={3.6}
          />
        </div>
        <RecentOrder />
      </div>
      {/* {RIGHT DIV} */}{" "}
      <div className="flex-[2]">
        <PopularDishes />
      </div>
    </section>
  );
};

export default Home;
