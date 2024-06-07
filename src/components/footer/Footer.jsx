
const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <>
            <div className="container border-top py-4 mt-4">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-12">
                        © Ähli hukuklary goragly (2023 - {date} )
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer