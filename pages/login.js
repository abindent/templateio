import Head from "next/head"
import {useSession} from "next-auth/react"
import {NavBar, Footer, LoginForm} from "../components"



export default function Login() {
  const {data: session} = useSession()

  return(
<>
      <div>
      <Head>
        <title>Template.io</title>
        <link rel="icon" href="/canva.png" />
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      </Head>
     </div>
    <NavBar />
    {session && <><br/><h1 style={{textAlign: "center", marginBottom: "65vh"}}>You are Logged In</h1></>}
    {!session && <LoginForm />}<br />
    <Footer />
    </>
  )
} 