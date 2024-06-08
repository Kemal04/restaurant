import { Link, NavLink } from "react-router-dom"
import restImg from '../../assets/icons/rest.png'
import instImg from '../../assets/icons/inst.svg'
import tiktokImg from '../../assets/icons/tiktok.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        <>
            <div className="bg-banner d-flex flex-column align-items-center">

                {/* HEADER SECTION  */}
                <div className="container mt-2 mb-3 d-xl-block d-none" id="home">
                    <div className="d-flex justify-content-between text-white">
                        <div className="d-flex align-items-center">
                            <div className="me-3">Sosial Mediýamyz: </div>
                            <Link to='https://www.tiktok.com/@tamdyr.lezzeti' target="_blank">
                                <img src={tiktokImg} alt="" className="bg-white p-1 rounded-circle" style={{ width: "25px", height: "25px" }} />
                            </Link>
                            <Link to='https://www.instagram.com/tamdyrlezzeti/' target="_blank">
                                <img src={instImg} alt="" className="bg-white mx-3 p-1 rounded-circle" style={{ width: "25px", height: "25px" }} />
                            </Link>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="me-4">
                                <FontAwesomeIcon icon={faPhoneAlt} className="me-1" />
                                <span>72-64-56 | 72-64-58</span>
                            </div>
                            <div className="me-4">
                                <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                                <span>tamdyrlezzeti@gmail.com</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
                                <span>Awaza, Bagtyýar oteli</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NAVBAR SECTION  */}
                <nav className="navbar navbar-expand-lg navbar-dark pb-3 bg-transparent">
                    <div className="container">
                        <div className="w-25 text-white d-xl-flex justify-content-between d-none">
                            <a href="#home" className="nav-link text-uppercase">Baş sahypa</a>
                            <a href="#about" className="nav-link text-uppercase">Biz barada</a>
                        </div>
                        <div className="px-xl-5 px-0 mx-xl-3 mx-0 text-center w-1000">
                            <Link to="/restaurant/" className="fw-semibold text-white text-decoration-none h3 me-xl-0 me-4">Tamdyr Lezzeti</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="w-25 text-white d-xl-flex justify-content-between d-none">
                            <a href="#menu" className="nav-link text-uppercase">Menýu</a>
                            <a href="#contact" className="nav-link text-uppercase">Habarlaşmak</a>
                        </div>
                    </div>
                </nav>

                {/* BANNER SECTION  */}
                <div id="home" className="container text-white my-auto text-center">
                    <div className="d-flex align-items-center justify-content-center">
                        <div data-aos="fade-left" className="text-uppercase me-4 small">bagtyýar</div>
                        <div>
                            <div className="display-1 fw-bold" style={{ letterSpacing: "5px" }}>Tamdyr</div>
                            <div className="display-3 fw-semibold">Lezzeti</div>
                            <img data-aos="fade-down" src={restImg} alt="" className="mt-4" style={{ width: "131px" }} />
                        </div>
                        <div data-aos="fade-right" className="text-uppercase ms-4 small">hotel</div>
                    </div>
                </div>

            </div>

            <div className={`offcanvas offcanvas-start navbar-dark`} style={{ width: "270px", background: "#131417" }} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header flex-column align-items-start p-0">

                    <div className='d-flex align-items-center justify-content-between pt-4 ps-3'>
                        <h5 className="offcanvas-title me-1 pe-5 text-white" id="offcanvasWithBothOptionsLabel">Tamdyr Lezzeti</h5>
                        <button type="button" className={`btn-close ms-4`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="d-flex flex-column mt-3">
                        <ul className="navbar-nav p-3">
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <a href="#home" className="nav-link fw-bold text-uppercase">Baş sahypa</a>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <a href="#about" className="nav-link fw-bold text-uppercase">Biz barada</a>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <a href="#menu" className="nav-link fw-bold text-uppercase">Menýu</a>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <a href="#contact" className="nav-link fw-bold text-uppercase">Habarlaşmak</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar