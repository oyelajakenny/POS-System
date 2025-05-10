import React from 'react'
import Greetings from '../components/greetings'

const Home = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
{/* {LEFT DIV} */}
<div className='flex-[3] bg-red-400'>
<Greetings/>
</div>

{/* {RIGHT DIV} */}
<div className='flex-[2] bg-slate-400'>
Hello
</div>
    </section>
  )
}

export default Home