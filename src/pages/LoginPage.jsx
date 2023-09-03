import { Container } from "react-bootstrap"
import loginImage from "./../assets/login.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Swal from "sweetalert2"

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        console.log("Login")
        fetch(`https://64f2052d0e1e60602d24967d.mockapi.io/admins?email=${email}&password=${password}`)
        .then((response) => response.json())
        .then((result) => {
            if (result.length === 0) {
                new Swal("Akun Tidak Terdaftar!", "Email / password yang anda masukkan salah.", "warning", {
                    timer: 3000,
                });
            } else {
                new Swal("Login berhasil!", "Anda Berhasil login, anda akan di alihkan ke halaman utama.", "success", {
                    timer: 3000,
                });
                localStorage.setItem("login", JSON.stringify(result[0]))
                navigate("/")
            }
        })
    }

    return (
        <>
            <Container>
                <div className="row text-white">
                    <div className="col-md-6 d-flex flex-column  justify-content-center  " style={{minHeight: "80vh"}}>
                        <h1>Selamat Datang Di Absensi STIKOM</h1>
                        <p className="lead">Silahkan login dengan akun anda untuk melanjutkan!</p>
                        <form onSubmit={handleSubmitLogin}>
                            <div class="mb-3">
                                <label for="email-login" class="form-label">Email address</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} type="email" class="form-control" id="email-login" aria-describedby="emailHelp" placeholder="Masukkan email anda" />
                            </div>
                            <div class="mb-3">
                                <label for="password-login" class="form-label">Password</label>
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" class="form-control" id="password-login" placeholder="Masukkan password anda" />
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