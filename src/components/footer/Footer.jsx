import { Link } from "react-router-dom"
import starIcon from "../../assets/icons/star.svg";

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-xl-12 text-center">
                        <div className="display-5">Tamdyr Lezzeti</div>
                    </div>
                    <div className="col-xl-5 d-flex flex-column mt-5">
                        <Link to='/' className="text-decoration-none mb-4 h5 fw-normal text-white">info@tamdyrlezzeti.com</Link>
                        <Link to='/' className="text-decoration-none mb-4 h5 fw-normal text-white">72-51-52 / 72-51-50</Link>
                        <Link to='/' className="text-decoration-none mb-4 h5 fw-normal text-white">Aşgabat. Abıznoy “Nurana” binasy</Link>
                    </div>
                    <div className="col-xl-3 d-flex flex-column mt-5">
                        <Link to='/' className="text-decoration-none mb-4 h5 fw-normal text-white">
                            <img src={starIcon} alt="" className="img-fluid me-2" />
                            Duşenbe-Penşenbe: 9:00-23:00
                        </Link>
                        <Link to='/' className="text-decoration-none mb-4 h5 fw-normal text-white">
                            <img src={starIcon} alt="" className="img-fluid me-2" />
                            Anna-Şenbe: 9:00-23:00
                        </Link>
                        <Link to='/' className="text-decoration-none mb-4 h5 fw-normal text-white">
                            <img src={starIcon} alt="" className="img-fluid me-2" />
                            Ýekşenbe: 10:00-22:00
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-white">
                <div className="container border-top py-4 mt-4">
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-12">
                            © Ähli hukuklary goragly (2023 - {date} )
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer