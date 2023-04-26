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
                    <div className="flex flex-wrap content-center mb-5 h-14 social-icons-container">
                        <ul className="flex inline">
                            <li>
                                <a href="#" className="social-icons hover:bg-blue-600">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-icons hover:bg-blue-400">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-icons hover:bg-red-400">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-icons hover:bg-blue-200">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-icons hover:bg-slate-500">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-7 w-7"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-icons hover:bg-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-spotify" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="12" cy="12" r="9" /> <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" /> <path d="M9 15c1.5 -1 4 -1 5 .5" /> <path d="M7 9c2 -1 6 -2 10 .5" /> </svg>
                                </a>
                            </li>
                        </ul>
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
                <div className="flex flex-wrap content-center justify-center w-full h-10 pt-10 text-xs credit">
                    <p>© 1998-2021 POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</p>
                </div>
            </div>
        </div>
    )
}

export default Footer