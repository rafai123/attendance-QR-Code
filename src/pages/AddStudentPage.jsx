import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const AddStudentPage = () => {
    return (
        <>
            <Container>
                <div className="row justify-content-md-center text-white mt-3">
                    <div className="col-md-8">
                        <div className="layer p-5 ">
                            <h1 className="fw-bold text-center">Tambah Mahasiswa </h1>
                            <p className="lead text-center">Silahkan masukkan data mahasiswa sesuai form di bawah ini</p>
                            <form>
                                <div class="mb-3">
                                    <label for="name-register" class="form-label">Nama</label>
                                    <input type="text" class="form-control" id="name-register" aria-describedby="emailHelp" placeholder="Silahkan masukkan nama anda"  />
                                </div>
                                <div class="mb-3">
                                    <label for="email-register" class="form-label">NIM</label>
                                    <input type="text" class="form-control" id="email-register" aria-describedby="emailHelp" placeholder="Silahkan masukkan NIM anda" />
                                </div>
                                <div class="mb-3">
                                    <label for="password-register" class="form-label">Kelas</label>
                                    <input type="text" class="form-control" id="password-register" placeholder="Masukkan Kelas anda" />
                                </div>
                                <div class="mb-3">
                                    <p>Sudah punya akun? silahkan <Link to="/login" className="fw-bold text-purple-500">Login </Link> yuk! </p>
                                </div>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-2 d-flex justify-content-center">
                                            <button type="submit" class="btn btn-purple px-5 mx-auto">Tambah</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AddStudentPage