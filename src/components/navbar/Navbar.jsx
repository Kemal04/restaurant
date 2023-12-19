import { Link } from "react-router-dom"
import insImg from '../../assets/icons/ins.svg'
import bellImg from '../../assets/icons/bell.svg'

const Navbar = () => {
    return (
        <div className="position-absolute top-0 start-0 w-100" style={{ zIndex: "10" }}>
            <div className="bg-dark-blue py-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-4">
                            <Link to='/' className="text-decoration-none text-white small">
                                <img src={insImg} alt="" className="text-white me-2" style={{ width: "16px" }} />
                                Instagram
                            </Link>
                        </div>
                        <div className="col-xl-6 col-8 d-flex justify-content-end">
                            <img src={bellImg} alt="" className="text-white me-3" style={{ width: "16px" }} />
                            <div className="small text-white">Get 35% Discount for all foods till Dec, 25</div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-trans navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Tamdyr Lezzeti</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-3">
                                <Link to="/" className="nav-link fw-semibold active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to="/" className="nav-link fw-semibold">Menu</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to="/" className="nav-link fw-semibold">About Us</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to="/" className="nav-link fw-semibold">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar