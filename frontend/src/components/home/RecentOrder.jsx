import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const Recentorder = () => {
  return (
    <div className="px-8 mt-6">
      <div className="w-full rounded-lg bg-[#1a1a1a] h-[450px]">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a href="#" className="text-[#025cca] text-sm font-semibold">
            View All
          </a>
        </div>
        {/* {SEARCH} */}
        <div className="flex items-center gap-4 bg-[#1f1f1f] px-5 rounded-[15px] py-4 mx-6">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search recent orders"
            className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
          />
        </div>
        {/* {order list} */}
        <div className="mt-6 px-6 overflow-y-scroll h-[300px] scrollbar-hide">
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default Recentorder;
