import { onlineServices, downloads, quickLinks, socialIcons, pupWebsite, contactUs } from "@helpers/footer_data"

const Footer = () =>{

    return(
        <div className="flex flex-wrap content-center justify-center h-auto pt-12 pb-12 bg-neutral-100 md:h-96">
            <div className="flex flex-wrap content-center h-80 footer-links-container-container">
                <div className="footer-links">
                    <p>ONLINE SERVICES</p>
                    <ul className="quick-links">
                        {onlineServices.map((onlineService, index)=>(
                            <li key={index}><a href={onlineService.link}>{onlineService.title}</a></li>
                        ))}
                    </ul>
                    <p className="mt-7">DOWNLOADS</p>
                    <ul className="quick-links">
                        {downloads.map((download, index)=>(
                            <li key={index}><a href={download.link}>{download.title}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="footer-links">
                    <p className="mt-7 md:mt-0">QUICK LINKS</p>
                    <ul className="quick-links">
                        {quickLinks.map((quickLink, index)=>(
                            <li key={index}><a href={quickLink.link}>{quickLink.title}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col flex-wrap w-1/2 h-auto md:h-72">
                    <p className="mt-7 md:mt-0">KEEP IN TOUCH</p>
                    <div className="flex flex-wrap content-center justify-between h-40 pl-5 mb-5 md:pl-0 md:h-14 social-icons-container">
                        <ul className="flex inline">
                            {socialIcons.map((socialIcon, index)=>(
                                <li key={index}>
                                    <a href={socialIcon.link} className={`social-icons ${socialIcon.class}`} target="blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" className={socialIcon.className} fill="currentColor" viewBox="0 0 24 24">
                                            <path transform={socialIcon.transform} d={socialIcon.d} />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="mt-7 md:mt-0">CONTACT US</p>
                    <ul className="mb-5 contact-us">
                        {contactUs.map((contacts, index)=>(
                            <li key={index}>{contacts.type}: <span>{contacts.info}</span></li>
                        ))}
                    </ul>
                    <div className="flex flex-col flex-wrap">
                        <p>PUPWEBSITE 10</p>
                        <ul className="flex inline weblinks">
                            {pupWebsite.map((pupWeb, index)=>(
                                <li key={index}><a href={pupWeb.link}>{pupWeb.title}</a>{index < pupWebsite.length - 1 ? <span className="text-3xl md:text-sm" dangerouslySetInnerHTML={{__html: '|&nbsp;'}}/> : null}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap content-center justify-center w-full h-10 pt-10 mt-10 text-xs credit md:mt-0">
                    <p>© 1998-2021 POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</p>
                </div>
            </div>
        </div>
    )
}

export default Footer