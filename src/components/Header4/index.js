import { IoMenu, IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { SlDoc } from "react-icons/sl";
import { PiSignOutBold } from "react-icons/pi";

function Header4({children, tituloMenu, imgMenu}) {

    return (
        <nav className="navbar bg-navy-blue" style={{minHeight: '85.33px'}}>
            <div className={`container align-items-end gap-2 position-relative ${!children && 'justify-content-end'}`}>
                {children}
                <button
                    className="navbar-toggler border-white"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                >
                    <IoMenu size={25} color="white" />
                </button>
                <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header bg-very-light-blue">
                        <div className="d-flex flex-column align-items-center text-center w-100">
                            <img src={imgMenu} width={100} alt="Icone do menu" />
                            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">
                                {tituloMenu}
                            </h5>
                        </div>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body bg-navy-blue">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item fw-bold">
                                <Link to='/dashboard' className="nav-link text-white">
                                    <FaHome size={25} color="var(--color-orange)" className="me-2"/>
                                    Início
                                </Link>
                            </li>
                            <li className="nav-item fw-bold">
                                <Link className="nav-link text-white">
                                    <IoPersonOutline size={25} color="var(--color-orange)" className="me-2"/>
                                    Perfil
                                </Link>
                            </li>
                            <li className="nav-item fw-bold">
                                <Link className="nav-link text-white">
                                    <GoGear size={25} color="var(--color-orange)" className="me-2"/>
                                    Sistema
                                </Link>
                            </li>
                            <li className="nav-item fw-bold">
                                <Link className="nav-link text-white">
                                    <SlDoc size={25} color="var(--color-orange)" className="me-2"/>
                                    Documentos
                                </Link>
                            </li>
                            <li className="nav-item fw-bold">
                                <Link to='/' className="nav-link text-white">
                                    <PiSignOutBold size={25} color="var(--color-orange)" className="me-2"/>
                                    Sair
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header4;