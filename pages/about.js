import Head from 'next/head'
import { AboutUs, Footer, NavBar } from '../components'

// NAVIGATION


export default function About() {
  return (
      <>
    <div>
      <Head>
        <title>About | Template.io</title>
        <link rel="icon" href="https://osourcegames.firebaseapp.com/canva-big-metal-letter-v-MAAm7Bhyp1o.png" />
      </Head>
     </div>
       <NavBar />
         <AboutUs /> 
       <Footer/>
     </>
  )
}
