import { Container } from "react-bootstrap"
import loginImage from "./../assets/login.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Swal from "sweetalert2"

const RegisterPage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        fetch(`https://64f2052d0e1e60602d24967d.mockapi.io/admins?email=${email}`)
        .then((response) => response.json())
        .then((result) => {
            if (result.length === 0) {
                fetch("https://64f2052d0e1e60602d24967d.mockapi.io/admins", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nama: name,
                        email: email,
                        password: password,
                    }),
                })
                .then((response) => response.json())
                .then((result) => {
                    // console.log("Success:", result);
                    // alert("Register berhasil, silahkan login")
                    new Swal(
                        "Success!",
                        "Akun anda berhasil di daftarkan, Silahkan Login.",
                        "success",
                        {
                            timer: 3000,
                        },
                        navigate("/login")
                    );
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
            } else {
                new Swal("Email Sudah Terdaftar!", "Silahkan gunakan email lain.", "warning", {
                    timer: 3000,
                });
            }
        })
    }        



    return (
        <>
            <Container>
                <div className="row text-white">
                    <div className="col-md-6 d-flex flex-column  justify-content-center  " style={{minHeight: "80vh"}}>
                        <h1>Selamat Datang Di Absensi STIKOM</h1>
                        <p className="lead">Kamu belum daftar? Daftar yuk!</p>
                        <form onSubmit={handleSubmitRegister}>
                            <div className="mb-3">
                                <label htmlFor="name-register" className="form-label">Name</label>
                                <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="name-register" aria-describedby="emailHelp" placeholder="Silahkan masukkan nama anda"  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email-register" className="form-label">Email address</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email-register" aria-describedby="emailHelp" placeholder="Silahkan masukkan email anda" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password-register" className="form-label">Password</label>
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="password-register" placeholder="Masukkan password anda" />
                            </div>
                            <div className="mb-3">
                                <p>Sudah punya akun? silahkan <Link to="/login" className="fw-bold text-purple-500">Login </Link> yuk! </p>
                            </div>
                            <button type="submit" className="btn btn-purple px-5 ">Daftar</button>
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