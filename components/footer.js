import React from 'react'
import {Pinterest, Github, Reddit, Twitch, Discord, Linkedin} from "react-bootstrap-icons";

const Footer = () => {
    return (
        <>
           <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src="https://osourcegames.firebaseapp.com/canva-big-metal-letter-v-MAAm7Bhyp1o.png" alt="favicon" width="9%" />
            <span className="text-xl">Template IO</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2022 Template IO —
            <a href="https://osourcegames.firebaseapp.com" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@opensourcegames</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="ml-3 text-gray-400" href="https://github.com/abindent" >
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
      </footer>
        </>
    )
}

export default Footer
