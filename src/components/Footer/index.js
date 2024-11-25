import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

function Footer({location}) {
    return ( 
        <footer className="bg-light-blue p-2">
            <div className="container d-flex flex-column flex-lg-row justify-content-lg-between align-items-center justify-content-center gap-2">
                <div className="d-flex justify-content-center align-items-center">
                    <MdLocationPin size={25} color="white"/>
                    <p className="text-white ms-2 mb-0">{location}</p>
                </div>
                <div className="d-flex gap-2">
                    <FaInstagram  size={25} color="black"/>
                    <FaFacebook  size={25} color="black"/>
                    <FaWhatsapp size={25} color="black"/>
                    <FaXTwitter size={25} color="black"/>
                    <FaTwitter size={25} color="black"/>
                    <FaLinkedinIn size={25} color="black"/>
                </div>
            </div>
        </footer>
     );
}

export default Footer;