import TopNavbar from "@components/top-navbar";
import TopNavbar2 from "@components/top-navbar-2";
import Footer from "@components/pup-home-footer";
import Footer2 from "@components/pup-home-footer2";
import FloatingButtons from "@components/fab/fab";
import Modal from "@components/modal";
import axios from 'axios'
import { useRouter } from 'next/router'
import { ContentLinks } from "@helpers/international_data";
import Link from "next/link";


const Articles = ({article}) => {

    const router = useRouter()

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
                        <h1 className="font-semibold">Title: {article.title}{router.asPath}</h1>
                        <p className="font-normal leading-relaxed mb-14 md:mb-8 md:leading-8">Text: {article.content}</p>
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

export async function getStaticPaths() {
    let data = []
    await axios.get('https://api.ahglab.com/api:W7k9W8HQ/articles').then(function (response) {
      data = response.data
    })
  
    const idPaths = data.map((value) => {
      return {
        params: {
          id: value.id.toString(),
        },
      }
    })
  
    return {
      paths: idPaths,
      fallback: false,
    }
  }
  
  export async function getStaticProps({ params }) {
    let article = []
    await axios.get(`https://api.ahglab.com/api:W7k9W8HQ/articles?=${params.id}`).then(function (response) {
      article = response.data
    })
  
    return {
      props: {
        article: article,
      },
      revalidate: 60,
    }
  }

export default Articles