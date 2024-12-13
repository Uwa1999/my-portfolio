import Head from 'next/head'
import React from 'react'
import './styles.css'

export default function Portfolio() {
  return (
    <div className='container'>
        <Head>
            <title>My Portfolio</title>
            <meta name='description'content='Welcome to my personal portfolio'/>
            <link rel='icon' href='/favicon.ico'/>
        </Head>

        <header className='header'>
<img src='/next_portfolio.jpg' alt='Header Image' className='header-image'/>
<h1>Welcome to My Portfolio</h1>
<p>Hi, I'm Joshua Arban, a passionate Web Developer.</p>
        </header>

        <main className='main'>
            <section className='about'>
<h2>About Me</h2>
<p>
    I'm a beginner web developer passionate about creating a web application using react and next.js.
    I'm constantly leaning and exploring new technologies
</p>
            </section>

            <section className='projects'>
                <h2>
                    My project
                </h2>
                <li>
                    <h3>Project 1: Personal Blog</h3>
                    <p>A simple personal blog built with next.js</p>
                </li>
                <li>
                    <h3>Project 2: Portfolio Website</h3>
                    <p>This portfolio site is built with next.js</p>
                </li>
            </section>

            <section className='contact'>
<h2>Contact</h2>
<p>You can reach me via Email: joshua.arban@fortress-asya.com</p>
            </section>
        </main>

        <footer className='footer'>
            <p>&copy; 2024 Joshua Arban. All Rights Reserved.</p>
        </footer>
    </div>
  )
}
