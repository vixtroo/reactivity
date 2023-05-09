import Image from 'next/image'
import {Formik, Field, Form} from "formik"
import { topNav2links } from '@helpers/nav_data'
import { useState } from 'react'

const TopNavbar2 = () =>{

    const useToggle = () =>{
        const [isClicked, setIsClicked] = useState(false);

        const toggle = () =>{
            setIsClicked(!isClicked)
        }
        return [isClicked, toggle]
    }

    const [isClicked, toggle] = useToggle();
    return(
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="flex flex-wrap content-center justify-between h-32 px-8 md:justify-center md:h-24 nav2-container md:px-0">
                <div className="flex flex-wrap justify-between pl-0 nav2 md:pl-5">
                    <div className="flex">
                        <div>
                            <a href="#"><Image src="/pup-logo.png" alt='' height={90} width={90}/></a>
                        </div>
                        <div className="hidden md:flex flex-col flex-wrap content-center pt-2.5 pl-2">
                            <div className="font-serif">
                                <a href="#"><h1 className='font-bold text-red-800 hover:underline'>POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</h1></a>
                                <a href="#"><h2 className='text-sm font-bold text-slate-600'>THE COUNTRY'S 1ST POLYTECHNICU</h2></a>
                            </div>
                            <div className="flex-wrap content-center h-6 font-bold top-navbar2-links mt-3.5">
                                <ul className="flex inline font-serif text-sm text-red-800 pup-links">
                                    {topNav2links.map((topNav2link, index)=>(
                                        <li key={index}className='h-7'><a href={topNav2link.link}>{topNav2link.title}</a>
                                            <ul className="dropdown-container">
                                                {topNav2link.subLinks.map((subLink, subIndex)=>(
                                                    <a key={subIndex} href={subLink.url}><li>{subLink.subLinkTitle}</li></a>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <Formik>
                            <Form>
                                <div className='flex hidden h-6 rounded-sm md:flex'>
                                    <Field placeholder="Type keyword here..." className="search"/>
                                    <button disabled className='flex flex-wrap content-center justify-center text-white bg-red-800 rounded-r-sm h-7 w-7'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <button className='flex mt-3 text-white hover:bg-red-800 md:hidden burger' onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            {isClicked && 
                <div className="block bg-white mobile-menu md:hidden">
                <ul className='px-8 text-2xl pt-9'>
                    {topNav2links.map((topNav2link, index)=>(
                        <li key={index}className='flex flex-wrap content-center justify-between h-20 '>
                            <a href={topNav2link.link} className='flex'>{topNav2link.title}</a>  
                            <span className='nav-arrow'>
                                <i className='fa fa-angle-right'></i>
                            </span>                     
                        </li>
                    ))}                                
                </ul>
            </div>
            }
        </>
    )
}

export default TopNavbar2
