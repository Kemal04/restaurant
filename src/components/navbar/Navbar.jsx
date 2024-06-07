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
                <div className="container mt-2 mb-3 d-xl-block d-none">
                    <div className="d-flex justify-content-between text-white">
                        <div className="d-flex align-items-center">
                            <div>Sosial Mediýamyz: </div>
                            <img src={instImg} alt="" className="bg-white mx-3 p-1 rounded-circle" style={{ width: "25px", height: "25px" }} />
                            <img src={tiktokImg} alt="" className="bg-white p-1 rounded-circle" style={{ width: "25px", height: "25px" }} />
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="me-4">
                                <FontAwesomeIcon icon={faPhoneAlt} className="me-1" />
                                <span>+99363297877</span>
                            </div>
                            <div className="me-4">
                                <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                                <span>info@tamdyrlezzeti.com</span>
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
                        <div className="w-100 text-white d-xl-flex justify-content-between d-none">
                            <Link to="/restaurant/" className="nav-link text-uppercase">home</Link>
                            <Link to="/restaurant/" className="nav-link text-uppercase">about</Link>
                            <Link to="/restaurant/" className="nav-link text-uppercase">menu</Link>
                            <Link to="/restaurant/" className="nav-link text-uppercase">shop</Link>
                        </div>
                        <div className="px-xl-5 px-0 mx-xl-3 mx-0 text-center w-1000">
                            <Link to="/restaurant/" className="fw-semibold text-white text-decoration-none h3 me-xl-0 me-4">Tamdyr Lezzeti</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="w-100 text-white d-xl-flex justify-content-between d-none">
                            <Link to="/restaurant/" className="nav-link text-uppercase">news</Link>
                            <Link to="/restaurant/" className="nav-link text-uppercase">contact</Link>
                            <Link to="/restaurant/" className="nav-link text-uppercase">book</Link>
                            <Link to="/restaurant/" className="nav-link text-uppercase">pages</Link>
                        </div>
                    </div>
                </nav>

                {/* BANNER SECTION  */}
                <div className="container text-white my-auto text-center">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="text-uppercase me-4 small">bagtyýar</div>
                        <div>
                            <div className="display-1 fw-bold" style={{ letterSpacing: "5px" }}>Tamdyr</div>
                            <div className="display-3 fw-semibold">Lezzeti</div>
                            <img src={restImg} alt="" className="mt-4" style={{ width: "131px" }} />
                        </div>
                        <div className="text-uppercase ms-4 small">hotel</div>
                    </div>
                </div>

            </div>

            <div className={`offcanvas offcanvas-start navbar-dark`} style={{ width: "270px", background: "#131417" }} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header flex-column align-items-start p-0">

                    <div className='d-flex align-items-center justify-content-between p-3'>
                        <h5 className="offcanvas-title me-1 pe-5 text-white" id="offcanvasWithBothOptionsLabel">Tamdyr Lezzeti</h5>
                        <button type="button" className={`btn-close ms-4`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="d-flex flex-column mt-3">
                        <ul className="navbar-nav p-3">
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/restaurant/awaza" className="nav-link fw-bold">AWAZA</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/" className="nav-link fw-bold disabled">ASHGABAT MALL</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/" className="nav-link fw-bold disabled">OBIZNOY</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/restaurant/biz-barada" className="nav-link fw-bold">BIZ BARADA</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/restaurant/menu" className="nav-link fw-bold">MENU</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/" className="nav-link fw-bold disabled">HABARLAŞMAK</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar