import React from 'react'
import StyleSheet from "@/app/styles/common.module.css";
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className={StyleSheet.container}>
        <div className={StyleSheet.error_page }>
            <h1>404</h1>
            <h3>Sorry, the page you tried cannot be found</h3>
            <Link href='/'>
                <button>Back to Home</button>
            </Link>
        </div>
    </section>
  )
}
