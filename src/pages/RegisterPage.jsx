import { Container } from "react-bootstrap"
import loginImage from "./../assets/login.svg"
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return (
        <>
            <Container>
                <div className="row text-white">
                    <div className="col-md-6 d-flex flex-column  justify-content-center  " style={{minHeight: "80vh"}}>
                        <h1>Selamat Datang Di Absensi STIKOM</h1>
                        <p className="lead">Kamu belum daftar? Daftar yuk!</p>
                        <form>
                            <div class="mb-3">
                                <label for="name-register" class="form-label">Name</label>
                                <input type="email" class="form-control" id="name-register" aria-describedby="emailHelp" placeholder="Silahkan masukkan nama anda"  />
                            </div>
                            <div class="mb-3">
                                <label for="email-register" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email-register" aria-describedby="emailHelp" placeholder="Silahkan masukkan email anda" />
                            </div>
                            <div class="mb-3">
                                <label for="password-register" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password-register" placeholder="Masukkan password anda" />
                            </div>
                            <div class="mb-3">
                                <p>Sudah punya akun? silahkan <Link to="/login" className="fw-bold text-purple-500">Login </Link> yuk! </p>
                            </div>
                            <button type="submit" class="btn btn-purple px-5 ">Daftar</button>
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

export default RegisterPage