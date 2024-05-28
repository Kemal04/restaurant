import card1 from "../../assets/newCards/1.jpg";
import card2 from "../../assets/newCards/2.jpg";
import card3 from "../../assets/newCards/3.jpg";
import card4 from "../../assets/newCards/4.jpg";
import card5 from "../../assets/newCards/5.jpg";
import card6 from "../../assets/newCards/6.jpg";
import card7 from "../../assets/newCards/7.jpg";
import starIcon from "../../assets/icons/star.svg";
import roundedText from "../../assets/icons/circleText.svg";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='border-bottom position-relative' style={{ background: "#131417" }}>
                <div className='container-fluid'>
                    <div className='row justify-content-center align-items-end ' style={{ height: "100dvh" }}>
                        <div className='col-xl-3 d-none d-xl-block d-lg-block d-md-block'>
                            <div className='d-flex flex-column justify-content-end pb-4 '>
                                <div className='scale border' style={{ width: "200px" }}>
                                    <img src={card5} alt="" className='img-fluid p-2' />
                                </div>
                                <div className='scale border align-self-end' style={{ width: "200px", marginTop: "-50px" }}>
                                    <img src={card6} alt="" className='img-fluid p-2' />
                                </div>
                                <div className='scale border' style={{ width: "200px", marginTop: "-50px" }}>
                                    <img src={card7} alt="" className='img-fluid p-2' />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 text-center'>
                            <div className='display-3 text-white position-relative fw-semibold mb-m-50' style={{ zIndex: "1" }}>Tamdyr Lezzetine <br /> Hoş geldiňiz</div>
                            <img src={card4} alt="" className='img-fluid w-75' style={{ borderRadius: "50% 50% 0 0" }} />
                        </div>
                        <div className='col-xl-3 d-none d-xl-block d-lg-block d-md-block'>
                            <div className='d-flex flex-column justify-content-end pb-4 '>
                                <div className='scale border align-self-end' style={{ width: "200px" }}>
                                    <img src={card7} alt="" className='img-fluid p-2' />
                                </div>
                                <div className='scale border' style={{ width: "200px", marginTop: "-50px" }}>
                                    <img src={card5} alt="" className='img-fluid p-2' />
                                </div>
                                <div className='scale border align-self-end' style={{ width: "200px", marginTop: "-50px" }}>
                                    <img src={card6} alt="" className='img-fluid p-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container pb-5  d-flex flex-column align-items-center '>
                <div className="about-home-progress">
                    <div className="about-home-progress-bar"></div>
                </div>
                <div className='row align-items-center justify-content-end justify-content-xl-center  mt-5'>
                    <div className='col-xl-5 col-11 order-xl-0 order-1'>
                        <img src={card3} alt="" className="img-fluid" />
                    </div>
                    <div className="col-xl-1 col-1 d-flex justify-content-center h-100">
                        <div className="star-icon">
                            <img src={starIcon} alt="" style={{ width: "1.5rem", height: "1.5rem" }} />
                        </div>
                    </div>
                    <div className='col-xl-5 col-11 order-xl-1 order-0 text-white mb-xl-0 mb-5'>
                        <div className="display-5 mb-4">Biz Barada</div>
                        <div style={{ textAlign: "justify" }}>
                            <b style={{ fontSize: "18px", marginRight: "10px" }}>Tamdyr Lezzeti</b> hakyky türk & türkmen aşhanasynyň iň gowy tagamlaryny hödürleýän restoran. Myhmanlarymyzy mylaýym we täsin atmosferasy bilen öz öýlerinde duýýan Tamdyr tagamynda, adaty peçlerde, täze gök önümlerde we lezzetli işdäaçarlarda bişirilen etler bilen ýatdan çykmajak nahar iýip bilersiňiz.
                            Menýumyza göz aýlanyňda, guzy tamdyrlama, manty, çorba we desertler ýaly dürli görnüşli tagamlary tapyp bilersiňiz.
                        </div>
                    </div>
                </div>
                <div className='row align-items-center justify-content-end justify-content-xl-center mt-5'>
                    <div className='col-xl-5 col-11 order-xl-0 order-1 text-white'>
                        <div className="display-5 mb-4">Aşpezler</div>
                        <div className="mb-xl-0 mb-5" style={{ textAlign: "justify" }}>
                            <b style={{ fontSize: "18px", marginRight: "10px" }}>Tamdyr Lezzetiniň</b> aşhanasynda tejribeli we hyjuwly aşpezler topary bar. Aşpezlerimiz türk & türkmen aşhanasynyň adaty reseptlerini iň ownuk jikme-jikliklere çenli bilýärler we bu reseptleri häzirki zaman düşündirişleri bilen garyşdyryp myhmanlarymyza hödürleýärler.
                            <br /><br />
                            Her tagamyň aňyrsynda aşpezlerimiziň yhlasly işi we yhlasy bar. Myhmanlarymyza iň täze ingredientleri ulanmak we her tabak barada alada etmek bilen ýatdan çykmajak nahar iýmek tejribesini hödürlemegi maksat edinýärler.                        </div>
                    </div>
                    <div className="col-xl-1 col-1 order-xl-1 order-0  d-flex justify-content-center h-100">
                        <div className="star-icon">
                            <img src={starIcon} alt="" style={{ width: "1.5rem", height: "1.5rem" }} />
                        </div>
                    </div>
                    <div className='col-xl-5 col-11 order-xl-2 order-1 position-relative'>
                        <img src={card2} alt="" className="img-fluid chef-img" />
                        <img src={card6} alt="" className='img-fluid chef-img-food position-absolute shadow d-none d-xl-block d-lg-block d-md-block ' style={{ bottom: "7%", left: "55%", width: "450px", height: "280px", objectFit: "cover" }} />
                    </div>
                </div>
                <div className="star-icon d-none d-xl-block d-lg-block d-md-block ">
                    <img src={starIcon} alt="" style={{ width: "1.5rem", height: "1.5rem" }} />
                </div>
            </div>

            <div className='container py-5' style={{ background: "#131417" }}>
                <div className='row justify-content-center'>
                    <div className="col-xl-5 col-10">
                        <Link className='w-100 border rounded-circle d-flex justify-content-center align-items-center position-relative text-white' style={{ padding: "4rem" }}>
                            <div className='position-absolute h1' style={{ zIndex: "3" }}>MENU</div>
                            <img src={roundedText} alt="" className='img-fluid position-absolute w-100 p-3 rounded-text' style={{ zIndex: "2" }} />
                            <div className='w-100 position-relative rounded-circle overflow-hidden scale' style={{ paddingTop: "100%", zIndex: "2" }} >
                                <div className='position-absolute top-0 bottom-0 start-0 end-0 ' style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: "1" }}></div>
                                <img src={card4} alt="" className='position-absolute w-100 h-100 top-0 end-0 bottom-0 start-0 ' style={{ objectFit: "cover" }} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='container-fluid px-0' style={{ background: "#131417" }}>
                <div className='row g-0 mt-5 pt-5'>
                    <div className='col-xl-2 col-6'>
                        <img src={card1} alt="" className='img-fluid' style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                    </div>
                    <div className='col-xl-2 col-6'>
                        <img src={card5} alt="" className='img-fluid' style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                    </div>
                    <div className='col-xl-2 col-6'>
                        <img src={card3} alt="" className='img-fluid' style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                    </div>
                    <div className='col-xl-2 col-6'>
                        <img src={card6} alt="" className='img-fluid' style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                    </div>
                    <div className='col-xl-2 col-6'>
                        <img src={card7} alt="" className='img-fluid' style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                    </div>
                    <div className='col-xl-2 col-6'>
                        <img src={card5} alt="" className='img-fluid' style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home