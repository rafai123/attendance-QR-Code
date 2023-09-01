import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const StudentListPage =() => {
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
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default StudentListPage