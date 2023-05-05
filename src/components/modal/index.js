import { useEffect } from "react";
import Image from "next/image";
import { Logos, ModalLinks } from "@helpers/modal_data";

const Modal = () =>{

    useEffect(() => {
        const closeModal = () => {
          document.querySelector('.bg-modal').style.display = 'none';
          document.querySelector('.modal-content').style.animation = 'float-out .5s forwards';
        };
        
        const onCancelClick = () => closeModal();
        const onEscapePress = (e) => {
          if (e.key === 'Escape') {
            closeModal();
          }
        };
        const onWindowClick = (e) => {
          const modal = document.getElementsByClassName('bg-modal')[0];
          if (e.target === modal) {
            closeModal();
          }
        };
        
        document.querySelector('.btnCancel').addEventListener('click', onCancelClick);
        document.addEventListener('keydown', onEscapePress);
        window.onclick = onWindowClick;
        
        return () => {
          document.querySelector('.btnCancel').removeEventListener('click', onCancelClick);
          document.removeEventListener('keydown', onEscapePress);
          window.onclick = null;
        };
      }, []);
    
      useEffect(() => {
        const modal = document.getElementsByClassName('bg-modal')[0];
        modal.style.display = 'flex';
      }, []);
      
    return(
        <div className="z-10 bg-modal">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="modal-content">
                    <div className="w-full pt-2">
                        <button className="btnCancel">+</button>
                    </div>
                    <div className="flex flex-col w-full text-center">
                        <h1 className="font-serif text-xl font-semibold text-red-900 mb-7"><span>WELCOME TO THE</span><br/>POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</h1>
                        <p className="text-lg mb-7">Please click/tap the appropriate link to help you in your navigation of our services</p>
                    </div>
                    <div className="flex w-full">
                        <div className="modal-items-container">
                            <div className="flex justify-center w-full py-6 logo-container">
                                <Image src="/pup-logo2.png" alt="" width={200} height={200}/>
                            </div>
                            <div className="flex justify-center w-full logos-container gap-x-1">
                                {Logos.map((logo, index)=>(
                                    <Image key={index} src={logo.src} alt="" width={logo.width} height={logo.height}/>
                                ))}
                            </div>
                        </div>
                        <div className="modal-items-container gap-y-1">
                            {ModalLinks.map((modalLink, index)=>(
                              <a key={index} href={modalLink.link} className="modal-links-container w-full bg-red-800 py-2.5 px-4 h-11 rounded-sm hover:bg-red-900 flex-wrap content-center hover:pl-7 flex space-x-2 text-white">
                                  <p className="text-lg text-white font-base"><i className={`mr-3 fa ${modalLink.d}`}></i>{modalLink.title}</p>
                              </a>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Modal;