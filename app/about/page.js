import React from 'react'
import Image from "next/image"
export const metadata = {
  title: 'About Qidmat Kirana Store',
  description: 'Qidmat Kirana & General Store. Wholesale & Retail',
}
export default function About() {
  return (
    <div>
      <div className='flex-col lg:mt-10 flex lg:items-center lg:flex-row-reverse lg:justify-center lg:gap-10 lg:px-10'>
        <div>
          <h2 className='text-3xl lg:text-5xl gradient-text font-bold text-center px-5' data-aos="fade-up">Welcome to Qidmat Kirana Store!</h2>
          <h3 className='lg:text-xl mt-2 font-medium text-center px-5' data-aos="fade-up">Where Quality Meets Convenience: Your Trusted Grocery Partner!</h3>
        </div>
        <Image className='rounded-md mt-5 px-5' data-aos="fade-up" src="/images/cropped store pic.jpg" width={800} height={800} />
      </div>
      <h1 className='md:text-5xl text-4xl gradient-text text-center mt-10 mb-10' data-aos="fade-up">About Us</h1>
      <div className='flex flex-col justify-between items-center lg:gap-5 lg:w-3/4 m-auto  lg:flex-row-reverse'>
        <Image src="/images/about pic 1.jpg" className='px-5' width={400} height={400} data-aos="fade-up" />
        <p className='lg:w-1/2 px-5 mt-10 text-lg font-thin' data-aos="fade-up">At  <span style={{ color: "#FF4081" }} >Qidmat Kirana Store</span>, we take pride in providing top-quality, handpicked daily essentials to our valued customers. With a wide array of products ranging from nutritious pulses, fragrant rice, and wholesome flour to aromatic spices, nourishing cooking oils, and refreshing dairy products like milk and curd, we have got everything you need to fill your kitchen with goodness.</p>
      </div>
      <div className='flex justify-between flex-col items-center lg:gap-5 lg:w-3/4 mt-10 m-auto lg:flex-row'>
        <Image src="/images/about pic 2.png" data-aos="fade-up" width={400} height={400} />
        <p className='lg:w-1/2 mt-10 text-lg px-5' data-aos="fade-up">At <span style={{ color: "#FF4081" }}>Qidmat Kirana Store</span>, we believe that convenience should be a part of your shopping experience. That is why we offer a hassle-free home delivery service on orders above 1000 rupees, right to your doorstep. No more lugging heavy grocery bags or waiting in long queues—just sit back, relax, and let us bring the goodness to you.</p>
      </div>

      <div>

      </div>

      <h1 className='gradient-text text-4xl text-center mt-16 mb-5 px-5' >We Undertake all kinds of Party Orders</h1>
      <div className='flex flex-col lg:flex-row gap-10 px-2 lg:p-10 justify-center items-center'>
        <Image data-aos="fade-up" src="/images/party.jpg" width={600} height={600} className='lg:w-1/2 h-1/3 rounded px-5' />
        <p data-aos="fade-up" className='lg:w-1/2 text-base lg:text-xl px-5' >Unlock the chef within with our raw material delivery service! We bring all the essential ingredients straight to your party venue, ensuring the freshest and finest produce. Cook up a storm and impress your guests with delicious dishes made from scratch. Take the hassle out of party food preparation and let us deliver culinary perfection to your doorstep.</p>
      </div>

    </div>
  )
}
