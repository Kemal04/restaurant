import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3" style={{ background: "#131417" }}>
                <div className="container">
                    <div className="w-100 text-white d-xl-flex justify-content-between d-none">
                        <Link to="/" className="nav-link">BIZ BARADA</Link>
                        <Link to="/" className="nav-link">MENU</Link>
                        <Link to="/" className="nav-link">RESERWASIÝA</Link>
                    </div>
                    <div className="px-5 mx-3 text-center" style={{ width: "1000px" }}>
                        <Link to="/" className="fw-semibold text-white text-decoration-none h5 me-xl-0 me-4">Tamdyr Lezzeti</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="w-100 text-white d-xl-flex justify-content-between d-none">
                        <Link to="/" className="nav-link">TÄZELIKLER</Link>
                        <Link to="/" className="nav-link">IŞ SAGATLARYMYZ</Link>
                        <Link to="/" className="nav-link">HABARLAŞMAK</Link>
                    </div>
                </div>
            </nav >

            <div className={`offcanvas offcanvas-start navbar-dark`} style={{ width: "270px", background: "#131417" }} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header flex-column align-items-start p-0">

                    <div className='d-flex align-items-center justify-content-between p-3'>
                        <h5 className="offcanvas-title me-1 pe-5 text-white" id="offcanvasWithBothOptionsLabel">Tamdyr Lezzeti</h5>
                        <button type="button" className={`btn-close ms-4`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="d-flex flex-column mt-3">
                        <ul className="navbar-nav p-3">
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/" className="nav-link fw-bold">BIZ BARADA</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/" className="nav-link fw-bold">MENU</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/" className="nav-link fw-bold">RESERWASIÝA</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/" className="nav-link fw-bold">TÄZELIKLER</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/" className="nav-link fw-bold">IŞ SAGATLARYMYZ</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/" className="nav-link fw-bold">HABARLAŞMAK</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar