import { Container } from "react-bootstrap"
import loginImage from "./../assets/login.svg"
import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <>
            <Container>
                <div className="row text-white">
                    <div className="col-md-6 d-flex flex-column  justify-content-center  " style={{minHeight: "80vh"}}>
                        <h1>Selamat Datang Di Absensi STIKOM</h1>
                        <p>Silahkan login dengan akun anda untuk melanjutkan!</p>
                        <form>
                            <div class="mb-2">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-2">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3">
                                <p>Belum punya akun? silahkan <Link to="/register" className="fw-bold text-purple-500">Register </Link> dulu yuk! </p>
                            </div>
                            <button type="submit" class="btn btn-purple px-5 ">Login</button>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                        <img src={loginImage} alt="Landing Page Image" />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default LoginPage