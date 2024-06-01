import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import card1 from "../../assets/menu/1.jpg";
import { useState } from 'react';

const Menu = () => {

    const option1 = {
        perPage: 8,
        focus: 0,
        omitEnd: true,
        perMove: 1,
        pagination: false,
        arrows: true,
        rewind: true,
        breakpoints:
        {
            991: { perPage: 4, gap: '1.5rem', },
            768: { perPage: 2, gap: '1.5rem', },
            575: { perPage: 2, gap: '1rem', },
        }
    };

    const categories = [
        {
            id: 1,
            name: "Çorba",
        },
        {
            id: 2,
            name: "Irdenlik",
        },
        {
            id: 3,
            name: "Işdä açar",
        },
        {
            id: 4,
            name: "Kebap",
        },
        {
            id: 5,
            name: "Köfte",
        },
        {
            id: 6,
            name: "Tepsi",
        },
        {
            id: 7,
            name: "Pizza",
        },
        {
            id: 8,
            name: "Tatli",
        },
        {
            id: 9,
            name: "Sowuk Içgiler",
        },
    ]

    const [basicActive, setBasicActive] = useState('tab1');

    const handleChangeCard = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };


    return (
        <>
            <div className="container-fluid">
                <div className="menu-bg-attachment d-flex justify-content-center align-items-center">
                    <div className="display-3 fw-semibold">Menu</div>
                </div>
            </div>

            <div className="container mt-5 pt-5 text-center">
                <Splide options={option1} hasTrack={false}>
                    <div className='d-flex justify-content-center'>
                        <div style={{ width: "90%" }}>
                            <SplideTrack id="pills-tab" role="tablist">
                                {
                                    categories?.map((category, index) => (
                                        <SplideSlide role="presentation" className='px-2' key={index}>
                                            <div onClick={() => handleChangeCard(`tab${category.id}`)} data-bs-toggle="pill" type="button" role="tab" aria-selected="false" style={{ cursor: "pointer" }} className={`rounded-5 w-100 py-2 btn btn-outline-light fw-semibold ${basicActive === `tab${category.id}` && 'active'}`}>{category.name}</div>
                                        </SplideSlide>
                                    ))
                                }
                            </SplideTrack>
                        </div>
                    </div>
                </Splide>
            </div>

            <div className='container mt-5 pt-5'>

                <div className="tab-content pb-5" id="pills-tabContent">

                    <div className={`tab-pane fade  text-white ${basicActive === 'tab1' && 'show active'}`} role="tabpanel">
                        <div className='row'>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
                                <div className='menu-card d-flex flex-column justify-content-end p-4' style={{ background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${card1})` }}>
                                    <div className='h4 mb-3'>Tombik Towukly Döner</div>
                                    <div className='text-warning fw-semibold h5'>40.00 TMT</div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
                                <div className='menu-card d-flex flex-column justify-content-end p-4' style={{ background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${card1})` }}>
                                    <div className='h4 mb-3'>Tombik Towukly Döner</div>
                                    <div className='text-warning fw-semibold h5'>40.00 TMT</div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
                                <div className='menu-card d-flex flex-column justify-content-end p-4' style={{ background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${card1})` }}>
                                    <div className='h4 mb-3'>Tombik Towukly Döner</div>
                                    <div className='text-warning fw-semibold h5'>40.00 TMT</div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
                                <div className='menu-card d-flex flex-column justify-content-end p-4' style={{ background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${card1})` }}>
                                    <div className='h4 mb-3'>Tombik Towukly Döner</div>
                                    <div className='text-warning fw-semibold h5'>40.00 TMT</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`tab-pane fade  text-white ${basicActive === 'tab2' && 'show active'}`} role="tabpanel">
                        <div className='row'>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
                                <div className='menu-card d-flex flex-column justify-content-end p-4' style={{ background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${card1})` }}>
                                    <div className='h4 mb-3'>Tombik Towukly Döner</div>
                                    <div className='text-warning fw-semibold h5'>31.00 TMT</div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
                                <div className='menu-card d-flex flex-column justify-content-end p-4' style={{ background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${card1})` }}>
                                    <div className='h4 mb-3'>Tombik Towukly Döner</div>
                                    <div className='text-warning fw-semibold h5'>31.00 TMT</div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
                                <div className='menu-card d-flex flex-column justify-content-end p-4' style={{ background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${card1})` }}>
                                    <div className='h4 mb-3'>Tombik Towukly Döner</div>
                                    <div className='text-warning fw-semibold h5'>31.00 TMT</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Menu