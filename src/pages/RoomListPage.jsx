import { Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const RoomListPage = () => {

    const isLoggedIn = localStorage.getItem("login")

    // if (!isLoggedIn) {
    //     const navigate = useNavigate()
    //     navigate("/not-login")
    // }

    const dataLogin = JSON.parse(isLoggedIn)
    console.log(dataLogin.nama)

    return (
        <>
            <Container className="text-white">
                <div className="row layer p-4">
                    <div className="col-md-12 mb-3">
                        
                            <h3 className="fw-bold"><span className="border-heading"> </span>Profile Admin :</h3>
                        
                    </div>
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-md mt-2">
                                    <h4 className="lead fw-bold">Nama :</h4>
                                    <p className="lead">{dataLogin.nama}</p>
                                </div>
                                <div className="col-md mt-2">
                                    <h4 className="fw-bold lead ">Alamat Email :</h4>
                                    <p className="lead">{dataLogin.email}</p>
                                </div>
                                <div className="col-md mt-2">
                                    <h4 className="lead fw-bold">Id Admin :</h4>
                                    <p className="lead">{dataLogin.id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-white mt-5 ">
                    <div className="col-12">
                        <div className="d-flex justify-content-between flex-wrap">
                            <h3><span className="border-heading"></span>Room Matakuliah  :</h3>
                            <div className="div gap-2 d-flex justify-content-center align-items-center">
                            <Link to={"/student-list/add-student"} className="btn btn-outline-light ">Tambah Mahasiswa</Link>
                            <Link to={"./add-room"} className="btn btn-purple ">Buat Ruangan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default RoomListPage