import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import QRCode from "react-qr-code"
import { useParams } from "react-router-dom"

const QRGeneratorPage = () => {
    const param = useParams()

    const [student, setStudent] = useState({})

    useEffect(() => {
        fetch(`https://64f2052d0e1e60602d24967d.mockapi.io/students/${param.id}`)
            .then((response) => response.json())
            .then((result) => {
                setStudent({
                    nama: result.nama,
                    nim: result.nim,
                    kelas: result.kelas
                })
                console.log(student)
            })
    }, [param.id])

    {console.log(student)}

    const [test, setTest] = useState("")
    return (
        <>
            <Container className="mt-5">
                <div className="row justify-content-md-center ">
                    <div className="col-md-7">
                        <div className="layer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 d-flex justify-content-center align-items-center ">
                                        <QRCode  value={JSON.stringify(student)} className="p-4 mx-auto" />
                                        {/* <input value={JSON.stringify(student)} onChange={e => setTest(e.target.value)} type="text" className="form-control" placeholder="test" /> */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="container mt-4">
                                            <div className="row">
                                                <div className="col-md d-flex justify-content-between flex-column" style={{height: "200px"}}>
                                                    <div className="layer-dark text-white px-4 py-4">
                                                        <table>
                                                            <tr>
                                                                <td>Nama</td>
                                                                <td>:</td>
                                                                <td>{student.nama}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>NIM</td>
                                                                <td>:</td>
                                                                <td>{student.nim}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Kelas</td>
                                                                <td>:</td>
                                                                <td>{student.kelas}</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="btn btn-purple">Download QR Code</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default QRGeneratorPage