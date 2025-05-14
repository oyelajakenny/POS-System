import React from 'react'
import OrderCard from '../components/home/OrderCard'

const Orders = () => {
  return (
    <div className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden ">
      <div className="flex items-center justify-between px-10 py-4">
        <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
          Orders
        </h1>
        <div className="flex items-center justify-around gap-4">
          <button className="text-[#ababab] text-lg  rounded-lg px-5 py-2 hover:bg-[#383838] transition-all ease-in-out">
            All
          </button>
          <button className="text-[#ababab] text-lg bg-[#383838] rounded-lg px-5 py-2 hover:bg-[#383831] transition-all ease-in-out">
            In Progress
          </button>
          <button className="text-[#ababab] text-lg  rounded-lg px-5 py-2 hover:bg-[#383838] transition-all ease-in-out">
            Ready
          </button>
          <button className="text-[#ababab] text-lg  rounded-lg px-5 py-2 hover:bg-[#383838] transition-all ease-in-out">
            Completed
          </button>
        </div>
      </div>
      <OrderCard />
    </div>
  );
}

export default Orders