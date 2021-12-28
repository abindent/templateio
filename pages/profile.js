import Head from "next/head"
import  {NavBar, Footer} from "../components"
import {useSession} from "next-auth/react"

export default function Profile(){
    const {data: session } = useSession()
  
    
   
    return(
    <>
    <div>
      <Head>
        <title>Profile | Template.io</title>
        <link rel="icon" href="https://osourcegames.firebaseapp.com/canva-big-metal-letter-v-MAAm7Bhyp1o.png" />
      </Head>
     </div>
     {!session && <><NavBar/>
     <br /><br />
        <div className="h-full">
        <div className="border-b-2 block md:flex">
          <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
            <div className="flex justify-between">
              <span className="text-xl font-semibold block">User Profile</span>
              </div>
            <span className="text-gray-600">This information is secret so be careful</span>
            <div className="w-full p-8 mx-2 flex justify-center">
              <img id="showImage" className="max-w-xs w-32 items-center border" src="/canva.png" alt="img" style={{backgroundColor: "transparent"}} />                          
            </div>
          </div>
          <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
            <div className="rounded  shadow p-6">
              <div className="pb-6">
                <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Name</label>
                <div className="flex">
                  <input disabled id="username" className="border-1  rounded-r px-4 py-2 w-full" type="text" defaultValue="Login to View" />
                </div>
              </div>
              <div className="pb-4">
                <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Email</label>
                <input disabled id="email" className="border-1  rounded-r px-4 py-2 w-full" type="email" defaultValue="Login to View"  />
              </div>
              <div className="pb-4">
                <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Status</label>
                <input disabled id="status" className="border-1  rounded-r px-4 py-2 w-full" type="text" defaultValue="Logged Out"   />
                <span className="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <Footer />
     </>}

     {session && <><NavBar/>
     <br /><br />
        <div className="h-full">
        <div className="border-b-2 block md:flex">
          <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
            <div className="flex justify-between">
              <span className="text-xl font-semibold block">User Profile</span>
              </div>
            <span className="text-gray-600">This information is secret so be careful</span>
            <div className="w-full p-8 mx-2 flex justify-center">
              <img id="showImage" className="max-w-xs w-32 items-center border" src={session.user.image} alt={session.user.name} style={{backgroundColor: "transparent"}} />                          
            </div>
          </div>
          <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
            <div className="rounded  shadow p-6">
              <div className="pb-6">
                <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Name</label>
                <div className="flex">
                  <input disabled id="username" className="border-1  rounded-r px-4 py-2 w-full" type="text" defaultValue={session.user.name}  />
                </div>
              </div>
              <div className="pb-4">
                <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Email</label>
                <input disabled id="email" className="border-1  rounded-r px-4 py-2 w-full" type="email" defaultValue={session.user.email}  />
              </div>
              <div className="pb-4">
                <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Status</label>
                <input disabled id="status" className="border-1  rounded-r px-4 py-2 w-full" type="text" defaultValue="Logged In"  />
                <span className="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <Footer />
     </>}
      </>
    )
}