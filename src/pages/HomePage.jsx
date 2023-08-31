import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import landingPageImg from "./../assets/landingPageImg.svg"

const HomePage = () => {
    return (
        <>
            <Container>
                <div className="row text-white">
                    <div className="col-md-6 d-flex flex-column align-items-start  justify-content-center  " style={{minHeight: "80vh"}}>
                        <h1 className="mt-5 fw-bold fs-1 ">Selamat Datang Di Absensi STIKOM</h1>
                        <p className="lead">Absensi berbasis website yang memanfaatkan fitur kamera pada perangkat untuk membaca QR Code.</p>
                        <Link to="/" class="btn btn-purple px-5 me-2" >SCAN Sekarang !</Link>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                        <img src={landingPageImg} alt="Landing Page Image" />
                    </div>    
                </div>
            </Container>
        </>
    )
}

export default HomePage