import Image from 'next/image'
const TopNavbar = () => {

    return (
        <div className="flex flex-wrap content-center justify-center border-white h-10 nav-container border-b-[.5px]">
            <div className="flex flex-wrap content-center justify-center w-3/4 lg:justify-between h-9 nav">
                <div className="flex">
                    {/* <div className="flex flex-wrap justify-center w-16 hover:bg-red-800">
                        
                    </div> */}
                    <div className="flex flex-wrap content-center h-10 top-navbar-links">
                        <ul className="flex inline text-sm">
                                <li className='justify-center w-16'><a href="#"><Image src="/govph.png" alt="" width={30} height={30}/></a></li>
                                <li><a href="#">Home</a></li>
                                <li><a href="#" className='hidden md:flex'>Good Governance</a></li>
                                <li><a href="#" className='hidden md:flex'>Transparency</a></li>
                                <li><a href="#" className='hidden lg:flex'>International Affairs</a></li>
                                <li><a href="#" className='hidden md:flex'>Bid Notices and Invitation</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap content-center h-10 text-sm contact hover:bg-red-800 hover:text-white hover:cursor-pointer">
                        <a href="#">Contact Us</a>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default TopNavbar