import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const StudentListPage =() => {

    const isLoggedIn = JSON.parse(localStorage.getItem("login")); // // true or false
    
    if (!isLoggedIn) {
        const navigate = useNavigate()
        navigate("/not-login")
    }

    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch("https://64f2052d0e1e60602d24967d.mockapi.io/students")
        .then((response) => response.json())
        .then((result) => {
            setStudents(result)
        })
    }, [students])

    return (
        <>
            <Container>
                <div className="row text-white mt-3 ">
                    <div className="col-12">
                        <div className="d-flex justify-content-between flex-wrap">
                            <h3><span className="border-heading"></span> Daftar Mahasiswa</h3>
                            <Link to={"./add-student"} className="btn btn-purple ">Tambah Mahasiswa</Link>
                        </div>
                    </div>
                </div>
                <div className="row text-white mt-3">
                    <div className="col">

                        <table class="table table-dark table-striped shadow rounded">
                            <thead className="table-purple" style={{backgroundColor: "red"}}>
                                <tr className="table-purple">
                                <th scope="col">NIM</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Kelas</th>
                                <th scope="col">Cetak QR</th>
                                </tr>
                            </thead>
                            <tbody className="table-purple">
                                {students.map((student) => {
                                    return (
                                        <tr key={student.id}>
                                            <th scope="row">{student.nim}</th>
                                            <td>{student.nama}</td>
                                            <td>{student.kelas}</td>
                                            <td><Link to={`./qr/${student.id}`} className="btn btn-purple">Cetak QR</Link></td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default StudentListPage