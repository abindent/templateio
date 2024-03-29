import Head from 'next/head'
import { Footer, Main, NavBar } from '../components'

export default function Home() {
  return (
      <>
    <div>
      <Head>
        <title>Template.io</title>
        <link rel="icon" href="/canva.png" />
      </Head>
     </div>
       <NavBar />
         <Main /> 
       <Footer/>
     </>
  )
}
