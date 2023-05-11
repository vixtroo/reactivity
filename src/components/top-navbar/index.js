import Image from 'next/image'
import Link from 'next/link'

const TopNavbar = () => {

    const topNavLinks = [
        {link: '/pup_home', title: 'Home', class: ''},
        {link: '#', title: 'Good Governance', class: 'hidden md:flex'},
        {link: '#', title: 'Transparency', class: 'hidden md:flex'},
        {link: '/dynamic', title: 'International Affairs', class: 'hidden lg:flex'},
        {link: '#', title: 'Bid Notices and Invitation', class: 'hidden md:flex'},
    ]

    return (
        <div className="flex flex-wrap content-center justify-center border-white h-20 md:h-10 nav-container border-b-[.5px]">
            <div className="flex flex-wrap content-center justify-center lg:justify-between h-9 nav">
                <div className="flex">
                    <div className="flex flex-wrap content-center h-10 top-navbar-links">
                        <ul className="flex inline text-3xl md:text-sm">
                                <li className='justify-center w-16'><a href="#"><Image src="/govph.png" alt="" width={30} height={30}/></a></li>
                                {topNavLinks.map((topNavLink, index) => (
                                    <li key={index}><Link href={topNavLink.link} className={topNavLink.class}>{topNavLink.title}</Link></li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap content-center h-10 text-3xl md:text-sm contact hover:bg-red-800 hover:text-white hover:cursor-pointer">
                        <Link href="/contact_us">Contact Us</Link>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default TopNavbar