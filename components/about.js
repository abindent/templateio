import React from 'react'
import {
    PhoneIcon,
    GlobeAltIcon,
    CodeIcon,
    ScaleIcon
} from '@heroicons/react/outline'

const features = [{
            name: 'Fatser Website Builds',
            description: 'Build your website building faster with our readymade templates.',
            icon: GlobeAltIcon,
        },
        {
            name: 'No hidden fees',
            description: 'Our service is totally free, there is no hidden charges.If you have find any please contact us.',
            icon: ScaleIcon,
        },
        {
            name: 'Contact Us',
            description: 'If you need any type of help you can easily contact us by submitting the contact form.',
            icon: PhoneIcon,
        },
        {
            name: 'Materials',
            description: 'These templates can be made using either fully pure HTML, CSS, JS or any cdn like - "Bootstrap" or "TailWindCSS".',
            icon: CodeIcon,
        },
    ]
const AboutUs = () => {
            return ( 
                <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">TEMPLATE.IO</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      A better way to fatser frontend developement
                    </p>
                    <br /><br />
                  </div>
          
                  <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative">
                          <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                              <feature.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                          </dt>
                          <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                </div>
            )
        }

        export default AboutUs