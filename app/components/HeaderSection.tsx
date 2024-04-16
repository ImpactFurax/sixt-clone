import React from 'react'
import Navbar from './Navbar'
import Form from './Form'

const HeaderSection = () => {
  return (
    <div className='bg-cover bg-bottom bg-no-repeat h-[70vh] p-3' style={{ backgroundImage: "url('/images/img-home.webp')" }}>
      <div className='max-w-[1200px] m-auto'>
        <Navbar />
        <Form />
      </div>
    </div>
  )
}

export default HeaderSection