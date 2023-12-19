
const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className="footer bg-dark-50 text-white py-5">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-12">
                        © Ähli hukuklary "KD Design" tarapyndan goragly (2023 - {date} )
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer