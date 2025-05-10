import React, {useState, useEffect} from 'react'

const Greetings = () => {
const [dateTime, setDateTime] = useState(new Date())

useEffect(()=>{
    const timer = setInterval(()=> setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
}, [])

const formatDate =(date)=>{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, "0")}, ${date.getFullYear()}`;
}

  return (
    <div className='flex justify-between items-center px-8 mt-5'>
        <div>
            <h1 className='text-[#f5f5f5] text-2xl font-semibold tracking-wide'>Good Morning, Hussein</h1>
            <p className='text-[#ababab] text-sm'>Give your best services for customer</p>
        </div>
    </div>
  )
}

export default Greetings