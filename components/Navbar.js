"use client"
import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div>
            <nav className='md:flex justify-between text-white h-14 fixed top-0 z-10 w-screen' style={{ backgroundColor: "#FF4081" }}>
                <Image src="/images/white Q logo.png" width={50} height={50} className='w-10 h-10 mt-2 ml-5' />
                <ul style={{ backgroundColor: "#FF4081" }} className={`md:flex gap-10 mr-10 md:mt-4 font-semibold flex-col md:flex-row w-full md:w-auto absolute text-center md:relative py-4 md:py-0  ${isClicked ? `flex` : `hidden`}`}>
                    <Link href="/" onClick={e => setIsClicked(false)}>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link href="/about" onClick={e => setIsClicked(false)}>
                        <li>
                            About
                        </li>
                    </Link>
                    <Link href="/order" onClick={e => setIsClicked(false)}>
                        <li>
                            Home Delivery
                        </li>
                    </Link>
                    <Link href="/contact" onClick={e => setIsClicked(false)}>
                        <li>
                            Contact Us
                        </li>
                    </Link>
                </ul>
                <div onClick={e => setIsClicked(!isClicked)} className='hamburger absolute top-4 right-2 px-5 flex flex-col gap-1 items-center justify-center cursor-pointer md:hidden'>
                    <div className='line w-7 h-px pt-1 rounded bg-white'></div>
                    <div className='line w-7 h-px pt-1 rounded bg-white'></div>
                    <div className='line w-7 h-px pt-1 rounded bg-white'></div>
                </div>
            </nav>
        </div>
    )
}


