"use client"
import styles from "../../styles/contact.module.css"
import { useState } from "react"
// import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import {ContactFunction} from  "@/lib/ContactFunction"
import ClipLoader from "react-spinners/ClipLoader";
export default function Contact() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [sub, setSub] = useState("")
  const [desc, setDesc] = useState("")
  const [status, setStatus] = useState(false)
  const [loading, setLoading] = useState(false)
  async function handleSubmit(e) {
    setLoading(true)
    const data = { name, email, phone, sub, desc }
    e.preventDefault();
    try {
      await ContactFunction(data);
      setLoading(false)
      setStatus(true)
      setTimeout(() => {
        setStatus(false)
      }, 4000)
      setName("")
      setEmail("")
      setPhone("")
      setDesc("")
      setSub("")

    } catch (error) {
      console.error("Error:", error);
    }
  }


  return (
    <div>

      <div className={styles.mainContact} data-aos="fade-up" >
        <p className={`${styles.contactHead} gradient-text`}>CONTACT</p>
        <p className={styles.contactSubHead}>If you have any queries, feel free to message here or connect with me directly via phone call.</p>
        <div className={styles.contactBox} data-aos="fade-up">
          <div className={styles.contactCol1}>
            <p className={styles.contactHead2}>Contact Details</p>
            <p className={styles.contactDesc}>Fill the adjacent form.Describe your query briefly. You will reveive a reply within 24 hours.</p>
            <div className={styles.contactDetails}>
              <div className={styles.contact1}> <div className="bg-white p-2 rounded-full"> <FaPhoneVolume />  </div> <p className={styles.contact1P}>+91 9246178292</p></div>
              <div className={styles.contact1}> <div className="bg-white p-2 rounded-full">     <FaEnvelope /> </div>   <p className={styles.contact1P}>shaikhah.advocate@gmail.com</p></div>
              <div className={styles.contact1}> <div className="bg-white p-2 rounded-full"> <FaLocationDot /> </div>  <p className={styles.contact1P}>8FFR+6CF, St. 6, Omer Colony, Hafiz Baba Nagar South, Hafiz Baba Nagar, Hyderabad, Telangana 500058</p></div>

            </div>

          </div>
          <form onSubmit={handleSubmit} className={styles.contactCol2}>
            <div className={styles.subCol2}>

              <input type="text" placeholder="Your Name" name="user_name" onChange={e => setName(e.target.value)} value={name}></input>

              <input type="email" placeholder="Email" name="user_email" onChange={e => setEmail(e.target.value)} value={email}></input>
              <input type="text" placeholder="Phone No" name="user_phone" onChange={e => setPhone(e.target.value)} value={phone}></input>
            </div>
            <div className={styles.subdiv2}>  <input className={styles.ContactSubject} type="text" placeholder="Subject" name="subject" onChange={e => setSub(e.target.value)} value={sub}></input>
              <textarea className={styles.textarea} placeholder="Describe your query in short here..." name="message" onChange={e => setDesc(e.target.value)} value={desc}></textarea></div>
            <div className={styles.btnDiv}>
              {!status && !loading && <button type="submit" value="send" className={styles.SubmitBtn}>Send</button>}
              {loading && <button type="submit" value="send" className={styles.SubmitBtn}> <ClipLoader
                    color="white"
                    size={25}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /></button>}
              {status && <button type="submit" value="send" style={{ backgroundColor: "#71EFA3", fontSize: "16px", color: "black" }} className={styles.SubmitBtn}>Message Sent</button>}

            


            </div>
          </form>

        </div>

      </div>
      <div data-aos="fade-up" >

      </div>
    </div>
  )
}
