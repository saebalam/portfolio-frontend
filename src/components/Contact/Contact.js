import React, { useState } from 'react'
import './contact.css'
import line from '../../Assets/Images/fancy-line.png'
import axios from 'axios'
// import { toast, ToastContainer } from 'react-toastify'

import toast,{Toaster} from 'react-hot-toast'

const Contact = () => {

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sent, setSent] = useState(false)

    const changeHandler = (e) => {
        const inputField = e.target.name

        if (inputField == 'name') {
            setName(e.target.value)
        }
        if (inputField == 'mobile') {
            setMobile(e.target.value)
        }
        if (inputField == 'email') {
            setEmail(e.target.value)
        }
        if (inputField == 'message') {
            setMessage(e.target.value)
        }
    }

    const sendMail = (e) => {
        e.preventDefault()
        const payload = { 'name': name, 'mobile': mobile, 'email': email, 'message': message }
        axios.post('https://upset-gold-gopher.cyclic.app/contactMe', payload)
            .then(res => {
                if (res.status == 200) {
                    setName('')
                    setMobile('')
                    setEmail('')
                    setMessage('')
                    toast('Message sent successfully!')
                }
            })
            .catch(err=>{
                console.log(err)
            })
    }
    return (
        <div className='contact'>
            <Toaster />
            <h1>Contact Me</h1>
            <p>Lets keep in touch</p>
            <img src={line} alt="" width='200px' />

            <div className='contact-bg'>
                <div className="contact-form">
                    <form>
                        <label htmlFor="nameField">Name</label>
                        <input type="text" onChange={(e) => changeHandler(e)} value={name} name="name" id="nameField" /><br />

                        <label htmlFor="nameField">Mobile</label>
                        <input type="tel" onChange={(e) => changeHandler(e)} value={mobile} name="mobile" id="mobField" /><br />

                        <label htmlFor="emailField">Email</label>
                        <input type="email" onChange={(e) => changeHandler(e)} value={email} name="email" id="emailField" /><br />

                        <label htmlFor="msgField">Message</label>
                        <textarea name="message" onChange={(e) => changeHandler(e)} value={message} id="msgField" cols="30" rows="2"></textarea><br />

                        <button onClick={(e) => sendMail(e)}>Send</button>
                    </form>
                </div>
                        {/* <ToastContainer /> */} 
            </div>

        </div>
    )
}

export default Contact