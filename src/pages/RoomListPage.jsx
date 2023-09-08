import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const RoomListPage = () => {

    const dataLogin = JSON.parse(localStorage.getItem("login")); // // true or false
    
    if (!dataLogin) {
        const navigate = useNavigate()
        navigate("/not-login")
    }

    // const navigate = useNavigate()
    const [room, setRoom] = useState([])

    useEffect(() => {
        fetch("https://64f4896b932537f4051a72e1.mockapi.io/rooms")
            .then((response) => response.json())
            .then((result) => {
                setRoom(result)
            })
    }, [])


    // console.log(dataLogin.nama)

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
                <div className="row text-white mt-5">

                {room.map((item, index) => (
                    <div className="col-md layer pb-3 m-2 justify-content-md-between" key={index}>
                        <Link to={`/attendance-room-list/${item.idRoom}`} style={{textDecoration: "none"}}  key={index}>
                        <Container className="text-white">
                            <div className="row">
                                <div className="col-md-12 p-3">
                                    <h5 className="fw-bold">{item.name_room}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md px-3">
                                    <p>Kelas <br />
                                    <span className="lead"> {item.kelas}</span></p>
                                </div>
                                <div className="col-md px-3">
                                    <p>Jam Mulai <br />
                                    <span className="lead"> {item.jam_masuk} WIB</span></p>
                                </div>
                            </div>
                        </Container>
                    </Link>
                    </div>
                ))}
                </div>
            </Container>
        </>
    )
}

export default RoomListPage