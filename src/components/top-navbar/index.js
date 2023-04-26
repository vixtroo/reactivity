import Image from 'next/image'
const TopNavbar = () => {

    return (
        <div className="flex flex-wrap content-center justify-center border-white h-9 nav-container border-b-[.5px]">
            <div className="flex flex-wrap content-center justify-between w-3/4 h-9">
                <div className="flex">
                    <div className="flex flex-wrap justify-center w-16 hover:bg-red-800">
                        <a href="#"><Image src="/govph.png" alt="" width={30} height={30}/></a>
                    </div>
                    <div className="flex flex-wrap content-center h-9 top-navbar-links">
                        <ul className="flex inline text-sm text-slate-500">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Good Governance</a></li>
                                <li><a href="#">Transparency</a></li>
                                <li><a href="#">International Affairs</a></li>
                                <li><a href="#">Bid Notices and Invitation</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap content-center text-sm h-9 contact text-slate-500 hover:bg-red-800 hover:text-white hover:cursor-pointer">
                        <a href="#">Contact Us</a>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default TopNavbar