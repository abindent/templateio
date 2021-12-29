import { LockClosedIcon } from '@heroicons/react/solid'
import {Github, Google} from "react-bootstrap-icons";
import {signIn} from "next-auth/react"

export default function LoginForm() {
    const response = ()=>{
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Customized Login is Not Supported!',
  footer: '<a href="/login">Use Social Login</a>'
})
  }
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/canva.png"
              alt="loginimg"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>


            <div>
              <button
                onClick={response}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            <br />
                 
                  <div className="flex flex-wrap justify-center">
                  <div className="w-full sm:w-1/2 sm:pr-2 mb-3 sm:mb-0">
          <button
            className="w-full bg-black hover:bg-green-900 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="button"
              onClick={()=>{signIn('github')}}
          ><Github size={15}  style={{display: "inline-block"}}/>&nbsp;Login with Github</button>
        </div>
        <div className="w-full sm:w-1/2 sm:pl-2">
          <button
            className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="button"
                onClick={()=>{signIn('google')}}
          ><Google size={15} style={{display: "inline-block"}}/>&nbsp;Login with Google</button>
        </div>
        </div>
        </div>
       </form>
        </div>
      </div>
    </>
  )

}