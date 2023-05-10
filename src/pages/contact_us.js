import TopNavbar from "@components/top-navbar";
import TopNavbar2 from "@components/top-navbar-2";
import Footer from "@components/pup-home-footer";
import Footer2 from "@components/pup-home-footer2";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FloatingButtons from "@components/fab/fab";
import { GeneralConcerns, InquiriesData, Paragraphs, ContentLinks } from "@helpers/contact_us_data";
import Link from "next/link";
import Modal from "@components/modal";

const Home = () => {

    return (
        <div className="flex flex-col flex-wrap justify-center">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="navbar-container">
                <TopNavbar />
                <TopNavbar2/>
            </div>
            <FloatingButtons/>
            <div className="flex flex-wrap justify-center bg-white contact-us-content-container-container py-14">
                <div className="flex flex-col flex-wrap justify-center contact-us-content-container md:flex-row">
                    <div className="w-auto px-4 left-col md:w-3/4">
                        <h1 className="font-semibold">Contact us</h1>
                        {Paragraphs.map((paragraph, index)=>(
                            <p key={index} className="font-normal leading-relaxed mb-14 md:mb-8 md:leading-8">{paragraph.p}</p>
                        ))} 
                        <h2>E-mail</h2>
                        <h3>For general concerns</h3>
                        <div className="inquire-pup">
                            <p>inquire@pup.edu.ph</p>
                        </div>
                        <table cellPadding={3} cellSpacing={0} className="mb-10">
                            <tbody>
                                <tr>
                                    <td className="table-head w-96">Specific Concerns</td>
                                    <td className="w-56 table-head">E-mail</td>
                                </tr>
                                {GeneralConcerns.map((generalConcern, index)=>(
                                    <tr key={index} className="table-data">
                                        <td className="table-col1">{generalConcern.desc}</td>
                                        <td className="text-right table-col2">{generalConcern.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h2>Postal Mail and Telephone</h2>
                        
                        {InquiriesData.map((inquiriesData, index)=>(
                            <div className="inquiries-data-container" key={index}>
                                <h3>{inquiriesData.inquiries}</h3>
                                <p className="leading-8">
                                    Polytechnic University of the Philippines
                                    <br/>
                                    <strong>{inquiriesData.office}</strong>
                                    <br/>
                                    {inquiriesData.unit}
                                    {inquiriesData.unit2 && <><br/>{inquiriesData.unit2}</>}
                                    <br/>
                                    A. Mabini Campus, Anonas Street, Sta. Mesa
                                    <br/>
                                    Manila, Philippines 1016
                                    <br/>
                                    {inquiriesData.num1}
                                    <br />
                                    {inquiriesData.num2}
                                </p>
                            </div>
                        ))}
                        <div className="telephone-container">
                            <p className="mt-5 font-semibold">Telephone</p>
                            <a href="#" className="text-4xl text-red-800 mt-7 md:mt-5 md:text-base hover:underline font-400">View contact information of specific offices and departments</a>
                        </div>
                    </div>
                    <div className="w-auto h-auto px-4 mt-10 md:w-1/4 right-col md:h-10 md:mt-0">
                        <h1>Contents</h1>
                        {ContentLinks.map((contentLink, index)=>(
                            <ul key={index}>
                                <li><Link href="#" className="content-link">{contentLink.link}</Link></li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
            
            <Modal/>
            <Footer/>
            <Footer2/>
        </div>
    )
}

export default Home