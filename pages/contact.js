import Head from 'next/head'
import { ContactForm, Footer, NavBar } from '../components'

export default function Contact() {
  return (
      <>
    <div>
      <Head>
        <title>Contact | Template.io</title>
        <link rel="icon" href="https://osourcegames.firebaseapp.com/canva-big-metal-letter-v-MAAm7Bhyp1o.png" />
      </Head>
     </div>
       <NavBar />
         <ContactForm /> 
       <Footer/>
     </>
  )
}
