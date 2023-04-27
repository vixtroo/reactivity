import Image from 'next/image'

const Footer2 = () =>{
    return(
        <div className="flex flex-wrap content-center justify-center h-60 bg-zinc-900">
            <div className="flex flex-wrap content-center justify-center w-3/4 h-56">
                <div className="w-2/5 footer2-items">
                    <div>
                        <Image src="/govph-seal.png" width={150} height={200} alt=''/>
                    </div>
                    <div>
                        <h1>Republic of the Philippines</h1>
                        <p style={{width: '170px'}}>All content is in the public domain unless otherwise stated.</p>
                    </div>
                </div>
                <div className="flex flex-col w-2/5 pl-10 footer2-items">
                    <h1>About GOVPH</h1>
                    <p style={{width: '280px'}}>Learn more about the Philippine government, its structure, how government works and the people behind it.</p>
                    <ul className='mt-1 text-xs leading-6'>
                        <li><a href="#">Official Gazette</a></li>
                        <li><a href="#">Open Data Portal</a></li>
                    </ul>
                </div>
                <div className="flex-col w-1/5 footer2-items">
                    <h1>Government Links</h1>
                    <ul className='text-xs leading-5'>
                        <li><a href="#">Office of the President</a></li>
                        <li><a href="#">Office of the Vice President</a></li>
                        <li><a href="#">Senate of the Philippines</a></li>
                        <li><a href="#">House of Representatives</a></li>
                        <li><a href="#">Supreme Court</a></li>
                        <li><a href="#">Court of Appeals</a></li>
                        <li><a href="#">Sandiganbayan</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer2