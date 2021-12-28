import React from 'react'
import Image from 'next/image'
import {Pinterest, Github, Reddit, Twitch, Discord, Linkedin} from "react-bootstrap-icons"

const Logo = ({ src, width, quality }) => {
    return `https://i.imgur.com/${src}}`
  }
const Template = () => {
    return (
        <>
   <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
             loader={Logo}
             src="cRIQ5cX.png"
             alt="Picture of the author"
             width={400}
             height={400}
    />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">1) PERSONAL PORTFOLIO | TEMPLATE IO</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Faster Frontend Designing</h1>
              <div className="flex mb-4">
         <span className="flex items-center">
         <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span className="ml-3">4 Reviews</span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2"></span>
            <a className="text-gray-400" href="https://github.com/abindent" >
                    <Github size={20}/>
            </a>  

            <a className="ml-3 text-gray-400" href="https://www.linkedin.com/in/sinchan-maitra-22a303217/">
                   <Linkedin size={20} />
            </a>

            <a className="ml-3 text-gray-400" href="https://in.pinterest.com/maitrababai2007" >
                <Pinterest size={20}/>
            </a>   

            <a className="ml-3 text-gray-400" href="https://reddit.com/r/Abindent" >
                <Reddit size={20}/>
            </a>   

            <a className="ml-3 text-gray-400" href="https://twitch.tv/smduniya187357" >
                <Twitch size={20}/>
            </a>   

            <a className="ml-3 text-gray-400" href="https://discord.io/Abindentcommunity" >
                <Discord size={20}/>
            </a>   
                </span>
                </div>
              <p className="leading-relaxed">A personal portfolio website design with pure HTML, CSS, JS. It is a multipage static website. This contains 5 different pages such as - Home, Intro, Blog, Sevices/Products, Contact with inbuilt <kbd className="kbd">sendMail()</kbd> function waiting for credentials to work.</p>
              <br />
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">FREE</span>
                <a className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" href="/Portfolio.rar" target="_blank" rel="noreferrer">Download</a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Template
