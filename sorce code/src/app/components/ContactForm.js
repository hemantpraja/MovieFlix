"use client"
import React, { useState } from 'react'
import styles from "@/app/contact/contact.module.css"
import { Mulish } from 'next/font/google'

const mulish = Mulish({
    fontWeights: '400',
    subsets: ["latin"],
    display: "swap",
});

export default function ContactForm() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        message: ''
    });

    function handleSubmit(event) {
        event.preventDefault();
        console.log(user);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor='username' className={styles.label}>
                    Enter Your Name
                    <input type='text' name='username' id='username' placeholder='Enter your name' className={mulish.className} value={user.username} onChange={handleChange} />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor='email' className={styles.label}>
                    Enter Your Email
                    <input
                        type='mail'
                        name='email'
                        id='email'
                        placeholder='Enter your Email'
                        className={mulish.className}
                        value={user.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor='phone' className={styles.label}>
                    Enter Your Phone Number
                    <input
                        type='number'
                        name='phone'
                        id='phone'
                        placeholder='Enter your Phone Number'
                        className={mulish.className}
                        value={user.phone}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                Enter Your Message
                <label htmlFor='message' className={styles.label}>
                    <input
                        type='textarea'
                        name='message'
                        id='username'
                        placeholder='Enter your Message'
                        className={mulish.className}
                        value={user.message}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <button
                    type='submit' className={mulish.className}>Send Message</button>
            </div>
        </form>
    );
}









