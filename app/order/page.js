"use client"

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Checkout from '../checkout/page'
export default function Order() {

  const [item, setItem] = useState("")
  const [allItems, setAllItems] = useState([])
  const [clicked, setClicked] = useState(false)
  const [alreadyAdded, setAlreadyAdded] = useState(false)
  const checkoutPage = useRef()
  const inputFocus = useRef();
  function clearList(){
    setItem("")
    setAllItems("")
  }
  function handleClick(e) {
    let trimmedItem = item.trim();
    if (trimmedItem) {
      if (!allItems.includes(trimmedItem)) {
        setAllItems([...allItems, trimmedItem])
        setItem("")
        inputFocus.current.focus();
        setAlreadyAdded(false)
      }
      else {
        setAlreadyAdded(true)
      }

    }
  }
  function handleDelete(e) {
    setAllItems(allItems.filter(item => {
      return item != e.target.value
    }))
  }
  return (
    <div className='min-h-screen'>
      <h1 className='text-4xl text-center my-5 font-black gradient-text mt-24' data-aos="fade-down">Book a Home Delivery</h1>
      <div className='flex items-center flex-col lg:flex-row justify-center px-5'>
        <div>
          <h2 className='text-xl font-thin' data-aos="fade-up">We Offer Free Home Delivery Service for orders above ₹1,000/- </h2>
          <p className='mr-10 mt-5' data-aos="fade-up">After adding all the required items, click on checkout button and fill out the details for home delivery.</p>
          <div data-aos="fade-up">
            <label className='flex flex-col mt-10'>
              <span>Enter an Item</span>
              <div className='flex gap-10'>
                <input ref={inputFocus} className='h-10 mb-10 pl-3 mt-3 md:w-1/3 border-b-2 border-gray-400' type='text' placeholder='eg: Tuvar Dal 2kg' onChange={e => {
                  setItem(e.target.value)
                  setAlreadyAdded(false)
                }} value={item} ></input>
                <button data-aos="fade-up" style={{ backgroundColor: "#FF4081" }} onClick={handleClick} className='text-5xl text-white rounded-full w-14 h-14' >+</button>
              </div>
              {alreadyAdded && <p><strong>{item} </strong> is already in your list</p>}
            </label>
          </div>

        </div>
        {/* md:w-1/3 */}
        <div className='flex flex-col shadow-2xl  py-10 w-full md:w-1/2 px-5' data-aos="fade-up">
          <p className='gradient-text text-2xl text-center'>Your Kirana List</p>
          <div className='flex flex-col gap-3 mt-5 mx-auto'>
            {allItems.length < 1 && <p>Your List is Empty.</p>}
            {allItems.map((item, i) => {
              return (
                <div key={item} className='flex gap-3'>
                  <p>{i + 1}.</p>
                  <p className='break-all'>{item}</p>
                  <button style={{ backgroundColor: "#FF4081" }} onClick={handleDelete} value={item} className='text-white px-2 py-1 h-8 rounded-xl font-md'>Remove</button>
                </div>
              )
            })
            }
          </div>

          <button onClick={() => {
            setClicked(true)
            checkoutPage.current.scrollIntoView({
              behavior: "smooth"
            })
          }} className='text-white px-4 py-3 mt-10 rounded-xl mx-auto font-semibold  text-lg' style={{ backgroundColor: "#FF4081", width: "170px" }}>Checkout</button>

        </div>
      </div>
      <div ref={checkoutPage}>
        {clicked && <Checkout allItems={allItems} clearList={clearList}/>}
      </div>

    </div>
  )
}
