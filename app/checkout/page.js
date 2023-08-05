"use client"
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import OrderSuccess from "../success/page"
import { OrderFunction } from '@/lib/OrderFunction'
import { CustomerFunction } from "@/lib/CustomerFunction"
import ClipLoader from "react-spinners/ClipLoader";
export default function Checkout({ allItems }) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [instructions, setInstructions] = useState("")
    const [isPending, setIsPending] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const router = useRouter();
    async function handleOrder(e) {
        e.preventDefault();
        let customerInfo = [name, phone, email, address, allItems, instructions]

        try {
            setIsPending(true)
            await OrderFunction(customerInfo)
            await CustomerFunction(customerInfo)
            setIsPending(false)
            setIsSuccess(true)

            setTimeout(() => {
                setIsSuccess(false)
            }, 3000)
            setName("")
            setEmail("")
            setPhone("")
            setAddress("")
            setInstructions("")
            router.push("/success")
        }
        catch (err) {
            console.log(err)
        }


    }
    return (
        <form onSubmit={handleOrder} className='min-h-screen'>
            <h1 className='text-5xl gradient-text mt-20 text-center'>Checkout</h1>
            <div className='flex flex-col gap-5 shadow-xl px-5 py-8 mx-5 md:mx-20 mt-5'>
                <div className='flex md:flex-row flex-col justify-center gap-10 mt-5'>
                    <span className='text-xl md:w-96'>Enter your Name
                    </span>
                    <input name='name' className='md:w-96 border-b-2 border-gray-400 h-10' type='text' value={name} onChange={e => setName(e.target.value)}>
                    </input>
                </div>
                <div className='flex  md:flex-row flex-col justify-center gap-10 mt-5'>
                    <span className='text-xl md:w-96'>Enter your Phone Number</span> <input name='phone' className='md:w-96 h-10 border-b-2 border-gray-400' type='text' value={phone} onChange={e => setPhone(e.target.value)}></input>
                </div>
                <div className='flex md:flex-row flex-col justify-center gap-10 mt-5'>
                    <div className='flex flex-col md:w-96'>
                        <span className='text-xl '>Enter your Email Address</span>
                        <span className='text-base opacity-70'>You will receive a confirmation email that your order is successfully placed.</span>
                    </div>
                    <input name='email' className='md:w-96 h-10 border-b-2 border-gray-400' type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className='flex  md:flex-row flex-col justify-center gap-10 mt-5'>
                    <span className='text-xl md:w-96'>Enter your Full Delivery Address</span> <textarea name='address' className='resize-none   md:w-96 h-28 border-2 rounded-md border-gray-400' type='text' value={address} onChange={e => setAddress(e.target.value)}></textarea>
                </div>
                <div className='flex  md:flex-row flex-col justify-center gap-10 mt-5'>
                    <span className='text-xl md:w-96'>Any Additional Instructions (if any)</span> <textarea name='instructions' className='resize-none   md:w-96 h-28 border-2 rounded-md border-gray-400' type='text' value={instructions} onChange={e => setInstructions(e.target.value)}></textarea>
                </div>
            </div>
            <div className='flex flex-col mx-10 md:mx-20 items-center my-5'>
                <div className='flex gap-10 mt-10 md:flex-row flex-col'>  <h2 className='text-xl md:text-2xl mt-4'>Available Payment Modes: </h2>
                    <div className='flex gap-6 justify-center'>
                        <Image src="/images/cash icon.png" width={50} height={50} />
                        <Image src="/images/gpay.png" width={50} height={50} />
                        <Image src="/images/phonepe.png" width={50} height={50} />
                        <Image src="/images/paytm.png" width={50} height={50} />
                    </div>
                </div>
                <p className='text-sm md:text-lg mt-5 text-center '> You can pay using Cash/ Gpay/ Phonepe/ Paytm after receiving your order at your doorstep.</p>
            </div>
            <div style={{ backgroundColor: "#FBD85D" }} className='flex gap-4 justify-center items-center py-3 w-3/4 m-auto px-2 md:px-4 rounded-md'>
                <Image src="/images/alert.png" width={30} height={30} />
                <p className='md:text-center text-sm md:text-xl'><strong>Note:</strong> Double-check all the details to have a hassle-free experience in home delivery.</p>
            </div>
            {!isPending && <div className='text-center my-6'>
                <button className='text-white px-4 py-3 rounded-xl font-semibold text-lg' style={{ backgroundColor: "#FF4081", width: "170px" }}>Place Order</button>
            </div>}
            {isPending && <div className='text-center my-6'>
                <button className='text-white py-2 rounded-xl font-semibold text-lg' style={{ backgroundColor: "#FF4081", width: "170px" }}> <ClipLoader
                    color="white"
                    size={25}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /></button>
            </div>

            }
        </form>
    )
}
