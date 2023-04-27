import Image from 'next/image'
import {Formik, Field, Form} from "formik"

const TopNavbar2 = () =>{

    return(
        <div className="flex flex-wrap content-center justify-center h-24 nav2-container">
            <div className="flex flex-wrap justify-between w-3/4">
                <div className="flex">
                    <div>
                        <a href="#"><Image src="/pup-logo.png" alt='' height={90} width={90}/></a>
                    </div>
                    <div className="hidden md:flex flex-col flex-wrap content-center pt-2.5 pl-2">
                        <div className="font-serif">
                            <a href="#"><h1 className='font-bold text-red-800 hover:underline'>POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</h1></a>
                            <a href="#"><h2 className='text-sm font-bold text-slate-600'>THE COUNTRY'S 1ST POLYTECHNICU</h2></a>
                        </div>
                        <div className="flex-wrap content-center h-6 font-bold top-navbar2-links mt-3.5 ">
                            <ul className="flex inline font-serif text-sm text-red-800">
                                    <li><a href="#">ABOUT PUP</a></li>
                                    <li><a href="#">ACADEMIC</a></li>
                                    <li><a href="#">STUDENTS</a></li>
                                    <li><a href="#">RESEARCH</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <Formik>
                        <Form>
                            <div className='flex hidden h-6 rounded-sm lg:flex'>
                                <Field placeholder="Type keyword here..." className="search"/>
                                <button disabled className='flex flex-wrap content-center justify-center text-white bg-red-800 rounded-r-sm h-7 w-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar2