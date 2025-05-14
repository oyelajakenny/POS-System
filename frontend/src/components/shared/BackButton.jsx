import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router'

const BackButton = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>navigate(-1)} className='bg-[#025cca] p-3 text-xl text-white font-bold rounded-lg'>
            <IoArrowBackOutline  />
        </button>
    </div>
  )
}

export default BackButton