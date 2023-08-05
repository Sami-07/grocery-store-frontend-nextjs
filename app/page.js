import Image from 'next/image'
import Link from "next/link"
import About from './about/page';
import Contact from './contact/page';
export default function Home() {
  return (
    <main>
      <Image src="/images/Home page bg.jpg" data-aos="fade-up" width={2000} height={1000} className='hidden md:block w-full h-1/3 mt-16 md:mt-0 lg:w-full relative md:' />
      <Image src="/images/mobile home bg.jpg" data-aos="fade-up" width={2000} height={1000} className='md:hidden w-full h-1/3 lg:w-full' />
      <div className='lg:absolute md:top-0 lg:top-1/4 2xl:top-1/2 lg:ml-14'>
        <h1 data-aos="fade-up" className='text-3xl px-2 text-center lg:text-5xl mt-3 lg:w-5/12 gradient-text md:px-5 md:w-full' >Qidmat Kirana & General Store Wholesale & Retail </h1>
        <h3 className='lg:text-xl mt-4 text-center font-semibold lg:w-5/12 px-5 ' data-aos="fade-up">Your one-stop destination for all your grocery needs!</h3>
        <div className='flex flex-col text-center lg:w-5/12 lg:flex-row mt-5 gap-4 lg:justify-center'>
          <Link href="/order" >
            <button className='text-white px-4 py-3 rounded-xl font-semibold text-lg ' data-aos="fade-up" style={{ backgroundColor: "#FF4081", width: "190px" }}>Home Delivery</button></Link>
          <Link href="/contact" >
            <button className='text-white px-4 py-3 rounded-xl font-semibold text-lg ' data-aos="fade-up" style={{ backgroundColor: "#FF4081", width: "190px" }}>Contact Us</button>
          </Link>
        </div>
      </div>
      <div className='mt-10'>
        <About />
      </div>

      <div className='mt-10'>
        <Contact />
      </div>

    </main>

  )
}
