const Footer = () =>{
    return(
        <div className="flex flex-wrap content-center justify-center bg-neutral-100 h-96">
            <div className="flex flex-wrap content-center w-3/4 h-80 footer-links-container-container">
                <div className="footer-links">
                    <p>ONLINE SERVICES</p>
                    <ul className="quick-links">
                        <li><a href="#">PUP Webmail</a></li>
                        <li><a href="#">PUP iApply</a></li>
                        <li><a href="#">SIS for Students</a></li>
                        <li><a href="#">SIS for Faculty</a></li>
                    </ul>
                    <p className="mt-7">DOWNLOADS</p>
                    <ul className="quick-links">
                        <li><a href="#">For Students</a></li>
                        <li><a href="#">For Faculty and Employees</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <p>ONLINE SERVICES</p>
                    <ul className="quick-links">
                        <li><a href="#">About PUP</a></li>
                        <li><a href="#">Admission Information</a></li>
                        <li><a href="#">Branches and Campuses</a></li>
                        <li><a href="#">Academic Programs</a></li>
                        <li><a href="#">Transparency Seals</a></li>
                        <li><a href="#">Bid Notices and Invitation</a></li>
                        <li><a href="#">International Affairs</a></li>
                        <li><a href="#">Jobs for PUPians</a></li>
                    </ul>
                </div>
                <div className="flex flex-col flex-wrap w-1/2 h-72">
                    <p>KEEP IN TOUCH</p>
                    <div className="mb-5 bg-white h-14 social-icons-container">

                    </div>
                    <p>CONTACT US</p>
                    <ul className="mb-5 contact-us">
                        <li>Phone: <span> (+63 2) 5335-1PUP (5335-1787) or 5335-1777</span></li>
                        <li>Email: <span>inquire@pup.edu.ph</span></li>
                    </ul>
                    <p>PUPWEBSITE 10</p>
                    <ul className="flex inline weblinks">
                        <li><a href="#">Terms of Use</a>|</li>
                        <li><a href="#" className="pl-1">Privacy Statement</a>|</li>
                        <li><a href="#" className="pl-1">About PUPWebsite</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer