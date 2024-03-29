import React, {  Fragment} from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon,  XIcon} from '@heroicons/react/outline';
import Link from "next/link"
import { withRouter } from 'next/router'
import { useSession } from "next-auth/react"
import {signIn, signOut} from "next-auth/react"




const NavBar = ({router}) => {
    const {data: session} = useSession()
    return ( 
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/canva.png"
                    alt="OpenSource"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/canva.png"
                    alt="OpenSource"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                     <Link href="/"         ><a  className={`px-3 py-2 rounded-md text-sm font-medium ${router.pathname === "/" ?'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white'}`} >Home</a></Link>
                     <Link href="/about"    ><a  className={`px-3 py-2 rounded-md text-sm font-medium ${router.pathname === "/about" ?'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} >About</a></Link>
                     <Link href="/templates"><a  className={`px-3 py-2 rounded-md text-sm font-medium ${router.pathname === "/templates" ?'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} >Templates</a></Link>
                     <Link href="/contact"  ><a  className={`px-3 py-2 rounded-md text-sm font-medium ${router.pathname === "/contact" ?'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} >Contact</a></Link>
                     {!session && <Link  href="/login" ><a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full"style={{cursor: "pointer"}}> Login/SignUp</a></Link>}
                </div>
                </div>
              </div>
              
             {session && <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative" style={{zIndex: "1"}}>
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={session.user.image}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                          <Link href="/profile"><a
                            className='block px-4 py-2 text-sm text-gray-700'
                            style={{cursor: "pointer"}}
                          >
                            Profile
                          </a></Link>
                      </Menu.Item>
                      
                      <Menu.Item>
                          <a
                            onClick={()=>{signOut()}}
                            className='block px-4 py-2 text-sm text-gray-700'
                            style={{cursor: "pointer"}}
                          >
                            Sign out
                          </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              }
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
                     <Link href="/"         ><a className={`block px-3 py-2 rounded-md text-base font-medium ${router.pathname === "/" ?'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} >Home</a></Link>
                     <Link href="/about"    ><a className={`block px-3 py-2 rounded-md text-base font-medium ${router.pathname === "/about" ?'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} >About</a></Link>
                     <Link href="/templates"><a className={`block px-3 py-2 rounded-md text-base font-medium ${router.pathname === "/templates" ?'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} >Temaplates</a></Link>
                     <Link href="/contact"  ><a className={`block px-3 py-2 rounded-md text-base font-medium ${router.pathname === "/contact" ?'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} >Contact</a></Link>
                     {!session && <><a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full" onClick={()=>{signIn("github")}}> Login/SignUp</a></>}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default withRouter(NavBar)