import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3" style={{ background: "#131417" }}>
            <div className="container">
                <div className="w-100 text-white d-flex justify-content-between">
                    <Link to="/" className="nav-link">BIZ BARADA</Link>
                    <Link to="/" className="nav-link">MENU</Link>
                    <Link to="/" className="nav-link">RESERWASIÝA</Link>
                </div>
                <div className="px-5 mx-3 text-center" style={{ width: "1000px" }}>
                    <Link to="/" className="fw-semibold text-white text-decoration-none h5">Tamdyr Lezzeti</Link>
                </div>
                <div className="w-100 text-white d-flex justify-content-between">
                    <Link to="/" className="nav-link">TÄZELIKLER</Link>
                    <Link to="/" className="nav-link">IŞ SAGATLARYMYZ</Link>
                    <Link to="/" className="nav-link">HABARLAŞMAK</Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar