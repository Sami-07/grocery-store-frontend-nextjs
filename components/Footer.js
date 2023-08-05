"use client"
import styles from "../styles/footer.module.css"
import Link from "next/link"
import AOS from "aos"
import "aos/dist/aos.css";
import Image from "next/image"

import { useEffect, useState } from "react";
export default function Footer() {
    const [newYear, setNewYear] = useState()
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const handleClick = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
      
        setNewYear(currentYear)
    }, [])
    return (
        <div className={styles.footerContainer}>
            <div className={styles.logoTitle}>
                <Image className={styles.footerLogo} src="/images/white Q logo.png" width={50} height={50} alt="AHS logo" />
                <h2>Qidmat Kirana & General Store Wholesale & Retail</h2>
            </div>
            <div className={styles.allNavi}>

                <Link onClick={handleClick} href="/" >
                    Home
                </Link>
                <Link onClick={handleClick} href="/about" >
                    About
                </Link>
                <Link onClick={handleClick} href="/order" >
                Home Delivery
                </Link>
                <Link onClick={handleClick} href="/contact" >
                    Contact
                </Link>

            </div>

            <p className={styles.copyRight}>Qidmat Kirana Store copyright &copy; {newYear} All rights reserved.</p>
            {/* <p className={styles.creator}>
                Website designed and created by <a href="https://www.linkedin.com/in/shaikh-abdul-sami-879287211/">
                    <br /> Shaikh Abdul Sami</a>

            </p> */}

        </div>
    )
}





