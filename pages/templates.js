import Head from 'next/head'
import { Footer, Template, NavBar } from '../components'

export default function Home() {
  return (
      <>
    <div>
      <Head>
        <title>Templates | Template.io</title>
        <link rel="icon" href="https://osourcegames.firebaseapp.com/canva-big-metal-letter-v-MAAm7Bhyp1o.png" />
      </Head>
     </div>
       <NavBar />
         <Template />
       <Footer/>
     </>
  )
}