import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import oopsImage from "./../assets/OOps.svg"

const NotLoginPage = () => {
    return (
        <>
            <Container>
                <div className="row text-white">
                    <div className="col-md-6 d-flex flex-column align-items-start  justify-content-center  " style={{minHeight: "80vh"}}>
                        <h1 className="mt-5 fw-bold fs-1 ">Ups, Kamu Belum Login</h1>
                        <p className="lead">Silahkan login dulu yuk agar kamu bisa menikmati fitur ini!</p>
                        <div>
                            <Link to="/login" className="btn btn-purple px-5 me-2" >Login</Link>
                            <Link to="/register" className="btn btn-outline-light px-5 me-2" >Daftar</Link>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                        <img src={oopsImage} alt="Landing Page Image" />
                    </div>    
                </div>
            </Container>
        </>
    )
}

export default NotLoginPage