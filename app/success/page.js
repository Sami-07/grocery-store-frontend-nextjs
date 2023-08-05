"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function OrderSuccess() {
  const [isLegit, setIsLegit] = useState(false)
  return (

    <div className='h-screen flex flex-col justify-center items-center px-2 gap-5'>
      <Image data-aos="fade-up" src="/images/green tick.png" width={100} height={100} />
      <div data-aos="fade-up" className='text-3xl text-center font-bold' style={{ color: "#FF4081" }}>Your Order has been Placed Successfully!</div>
      <p data-aos="fade-up" className='text-center'>You will soon receive a phone call from Qidmat Kirana Store for Order Confirmation.</p>
      <Link href="http://www.gmail.com/">
      <button className='text-white px-4 py-3 rounded-xl font-semibold text-lg ' data-aos="fade-up" style={{ backgroundColor: "#FF4081", width: "180px" }}>View Receipt</button>
    </Link>
    </div >
  )
}
