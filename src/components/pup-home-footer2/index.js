import Image from 'next/image'

const Footer2 = () =>{

    const aboutGovPh = [
        {link: '#', title: 'Official Gazette'},
        {link: '#', title: 'Open Data Portal'},
    ]

    const govLinks = [
        {link: '#', title: 'Office of the President'},
        {link: '#', title: 'Office of the Vice President'},
        {link: '#', title: 'Senate of the Philippines'},
        {link: '#', title: 'House of Representatives'},
        {link: '#', title: 'Supreme Court'},
        {link: '#', title: 'Court of Appeals'},
        {link: '#', title: 'Sandiganbayan'},
    ]

    return(
        <div className="flex flex-wrap content-start justify-center h-auto md:h-60 bg-zinc-900">
            <div className="flex flex-wrap content-center justify-center h-56 footer-links-container-container">
                <div className="w-2/5 footer2-items">
                    <div>
                        <Image src="/govph-seal.png" width={160} height={180} alt=''/>
                    </div>
                    <div>
                        <h1>Republic of the Philippines</h1>
                        <p className='w-1/2 text-sm leading-10 md:leading-2 md:w-44 md:text-xs mt-7 md:mt-0'>All content is in the public domain unless otherwise stated.</p>
                    </div>
                </div>
                <div className="flex flex-col flex-wrap w-2/5 pl-0 footer2-items md:pl-10">
                    <h1>About GOVPH</h1>
                    <p className='w-1/2 md:w-72 mt-7 md:mt-0'>Learn more about the Philippine government, its structure, how government works and the people behind it.</p>
                    <ul className='mt-1 text-xs leading-6'>
                        {aboutGovPh.map((about, index)=>(
                            <li key={index}><a href={about.link}>{about.title}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="flex-col w-1/5 footer2-items">
                    <h1>Government Links</h1>
                    <ul className='text-xs leading-5 mt-7 md:mt-0'>
                        {govLinks.map((govLink, index)=>(
                            <li key={index}><a href={govLink.link}>{govLink.title}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer2