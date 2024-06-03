import { Link } from "react-router-dom"
import img6 from "../../assets/awaza/6.jpeg";
import img2 from "../../assets/awaza/4.jpeg";
import img3 from "../../assets/awaza/1.jpeg";
import saladImg from "../../assets/awaza/salat.jpg";
import corbaImg from "../../assets/awaza/corba.jpg";
import pizzaImg from "../../assets/awaza/pizza.jpg";
import mangalImg from "../../assets/awaza/mangal.jpg";
import { useState } from "react";

const Awaza = () => {

    const [basicActive, setBasicActive] = useState('tab4');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <>

            <div className="container-fluid">
                <div className="awaza-bg-attachment d-flex justify-content-center align-items-center">
                    {/* <div className="display-3 fw-semibold text-center">«Awaza»</div> */}
                </div>
            </div>

            <div className='container py-5 my-5'>
                <div className='row align-items-center'>
                    <div className='col-xl-6 text-center text-lg-end'>
                        <img src={img6} alt="" className='img-fluid me-lg-4 me-0 w-75 shadow' style={{ height: "500px", objectFit: "cover", borderRadius: "100px 10px 100px 10px" }} />
                    </div>
                    <div className='col-xl-6 text-white text-center text-lg-start mt-lg-0 mt-4'>
                        <div className='ms-4'>
                            <div className='text-warning mb-3 fst-italic'>GYZGYNJAK & LEZZETLİ NAHARLAR</div>
                            <div className='h3 mb-4'>Hakyky Türk & Türkmen Aşhanasy</div>
                            <div className='small fw-semibold mb-3 w-75'>Tamdyr tagamynda, adaty peçlerde, täze gök önümlerde we lezzetli işdäaçarlarda bişirilen etler bilen ýatdan çykmajak nahar iýip bilersiňiz. Menýumyza göz aýlanyňda, guzy tamdyrlama, manty, çorba we desertler ýaly dürli görnüşli tagamlary tapyp bilersiňiz.</div>
                            <div className='fw-semibold'>Habarlaşmak üçin <span className='text-warning'>72-64-56 , 72-64-58</span></div>
                            <Link to='/' className='btn btn-outline-light mt-5 py-2 px-4 rounded-0'>Doly Menýuny Görüň</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-5 py-5">
                <div className="row mt-5 pt-5">
                    <div className="col-xl-2 col-12">
                        <img src={img2} alt="" className="img-fluid w-100 rounded-2 shadow ml-130" style={{ marginTop: "-80px", zIndex: "1", filter: "blur(2px)", height: "350px", objectFit: "cover" }} />
                    </div>
                    <div className="col-xl-8" style={{ zIndex: "-2" }}>
                        <div className="shadow p-5 text-center d-flex justify-content-center rounded-xl-5 rounded-0 bg-dark">
                            <div style={{ width: "85%" }}>
                                <div className="text-warning text-uppercase small mt-3" style={{ letterSpacing: "2px" }}>«AWAZA» Milli syýahatçylyk zolagy</div>
                                <div className="h2 mt-2 mb-4">Tamdyr Lezzeti</div>
                                <div>Ilkinji restoranymyzyň üstünligi bilen joşýan hyjuwyňyz indi täze meýdançada «AWAZA» Milli syýahatçylyk zolagynda. Her lokmada ussatlygymyzyň yzlary, her tabakda hyýalymyzyň tansy ... Bu täze ýer diňe bir restoran däl, bu biziň tagallalarymyzyň we hyýalymyzyň anyk beýanydyr. Müşderilerimiz üçin diňe bir tagam duralgasy däl-de, ýatdan çykmajak ýatlamalary ýeri. Bu ýer bagtyň we lezzetiň täze salgysy bolar.</div>
                                <button className="mt-5 px-5 mb-3 btn btn-outline-warning">Menu</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-12 d-xl-block d-lg-block d-none mt-xl-5 mt-0">
                        <img src={img3} alt="" className="img-fluid w-100 mt-xl-5 mt-lg-5 mt-0 rounded-2 shadow ml-m-130" style={{ zIndex: "1", filter: "blur(2px)", height: "350px", objectFit: "cover" }} />
                    </div>
                </div>
            </div>


            <div className='container py-5 border-bottom'>
                <div className='text-center text-warning fst-italic'>LEZZETLI TAGAMLARYMYZ</div>
                <div className='text-center text-white h2 mt-3 mb-5'>Spesial Menýumuz</div>

                <ul className="nav nav-pills mb-3 justify-content-center mt-4" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className={`btn btn-outline-light rounded-0 mx-2 ${basicActive === 'tab4' && 'active'}`} onClick={() => handleBasicClick('tab4')} data-bs-toggle="pill" type="button" role="tab" aria-selected="true">Mangal</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={`btn btn-outline-light rounded-0 mx-2 mb-3 ${basicActive === 'tab1' && 'active'}`} onClick={() => handleBasicClick('tab1')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Işdä açarlar</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={`btn btn-outline-light rounded-0 mx-2 mb-3 ${basicActive === 'tab3' && 'active'}`} onClick={() => handleBasicClick('tab3')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Çorba</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={`btn btn-outline-light rounded-0 mx-2 mb-3 ${basicActive === 'tab2' && 'active'}`} onClick={() => handleBasicClick('tab2')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Pizza & Burger</button>
                    </li>
                </ul>

                <div className="tab-content pb-5" id="pills-tabContent">
                    <div className={`tab-pane fade text-white ${basicActive === 'tab1' && 'show active'}`} role="tabpanel">
                        <div className='row mt-5 align-items-center'>
                            <div className='col-xl-6 col-12 text-end'>
                                <img src={saladImg} alt="" className='img-fluid w-xl-75 mb-xl-0 mb-5' style={{ height: "800px", objectFit: "cover" }} />
                            </div>
                            <div className='col-xl-6 col-12 d-flex flex-column align-items-start'>
                                <div className="w-xl-60">

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Çopan Salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Grek Salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>55 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Gyzgyn Etli Salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>87 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Gyzgyn Towuk Salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>80 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Taýskiy Salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>55 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Sezar Lezzeti</div>
                                            <div className='ms-5 fw-semibold text-warning'>65 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Süzme Çal Grafin</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Gök Önüm Garyndysy</div>
                                            <div className='ms-5 fw-semibold text-warning'>65 TMT</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane fade  text-white ${basicActive === 'tab2' && 'show active'}`} role="tabpanel">
                        <div className='row mt-5 align-items-center'>
                            <div className='col-xl-6 col-12 d-flex flex-column align-items-start order-1'>
                                <div className="w-xl-60">

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Pizza Assorti</div>
                                            <div className='ms-5 fw-semibold text-warning'>90 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Pizza Towukly</div>
                                            <div className='ms-5 fw-semibold text-warning'>80 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Pizza Pepperoni</div>
                                            <div className='ms-5 fw-semibold text-warning'>70 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Pizza Margarita</div>
                                            <div className='ms-5 fw-semibold text-warning'>65 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Pide Etli</div>
                                            <div className='ms-5 fw-semibold text-warning'>70 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Lahmajun</div>
                                            <div className='ms-5 fw-semibold text-warning'>30 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Çörek Sebetde</div>
                                            <div className='ms-5 fw-semibold text-warning'>15 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Burger</div>
                                            <div className='ms-5 fw-semibold text-warning'>55 TMT</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-xl-6 col-12 order-0 text-end'>
                                <img src={pizzaImg} alt="" className='img-fluid w-xl-75 mb-xl-0 mb-5' style={{ height: "800px", objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane fade  text-white ${basicActive === 'tab3' && 'show active'}`} role="tabpanel">
                        <div className='row mt-5 align-items-center'>
                            <div className='col-xl-6 col-12 text-end'>
                                <img src={corbaImg} alt="" className='img-fluid w-xl-75 mb-xl-0 mb-5' style={{ height: "800px", objectFit: "cover" }} />
                            </div>
                            <div className='col-xl-6 col-12 d-flex flex-column align-items-start'>
                                <div className="w-xl-60">

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Un Aş</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Jüjeli unaş</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Ezogelin</div>
                                            <div className='ms-5 fw-semibold text-warning'>30 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Merjimek </div>
                                            <div className='ms-5 fw-semibold text-warning'>25 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Sote Etli</div>
                                            <div className='ms-5 fw-semibold text-warning'>75 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Towuk Sote</div>
                                            <div className='ms-5 fw-semibold text-warning'>73 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Jüje Mesgede</div>
                                            <div className='ms-5 fw-semibold text-warning'>80 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Jüje Batyrma</div>
                                            <div className='ms-5 fw-semibold text-warning'>82 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Kakmaç Mesgede</div>
                                            <div className='ms-5 fw-semibold text-warning'>80 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Kakmaç Batyrma</div>
                                            <div className='ms-5 fw-semibold text-warning'>83 TMT</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane fade  text-white ${basicActive === 'tab4' && 'show active'}`} role="tabpanel">
                        <div className='row mt-5 align-items-center'>
                            <div className='col-xl-6 col-12 d-flex flex-column align-items-start order-1'>
                                <div className="w-xl-60">

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Göle Lüle Kebap</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Goýun Gapyrga</div>
                                            <div className='ms-5 fw-semibold text-warning'>55 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Goýun Kebap</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Towuk Şaşlyk</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Towuk Lüle</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-top border-secondary py-3'>
                                            <div className='me-5'>Tunçede Çay</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-xl-6 col-12 order-0 text-end'>
                                <img src={mangalImg} alt="" className='img-fluid w-xl-75 mb-xl-0 mb-5' style={{ height: "600px", objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Awaza