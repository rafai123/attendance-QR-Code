import Scanner from "qrcode-scanner-react"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
// import { QrReader } from "react-qr-reader"
import { useNavigate, useParams } from "react-router-dom"
import okSvg from "./../assets/ok.svg"
import sakitSvg from "./../assets/sakit.svg"

const ScanRoomPage = () => {

    const navigate = useNavigate()

    const [students, setStudents] = useState([])
    const params = useParams()

    const [nama, setNama] = useState("")
    const [nim, setNim] = useState("")
    const [kelas, setKelas] = useState("")
    const [status, setStatus] = useState("")
    const [jamHadir, setJamHadir] = useState("")

    const [statusHadir, setStatusHadir] = useState("")

    const [inputNim, setInputNim] = useState("")

    // qrcode-scanner-react
    const [scanning, setScanning] = useState(false)
    const [result, setResult] = useState("")

    const handlePushData = (res, kehadiran) => {
        fetch(`https://64f2052d0e1e60602d24967d.mockapi.io/students?nim=${res}`)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)

            setNama(result[0].nama)
            setNim(result[0].nim)
            setKelas(result[0].kelas)
            setStatus(kehadiran)
            const tempName = result[0].nama
            const tempNim = result[0].nim
            const tempKelas = result[0].kelas
            const date = new Date()
            const jam = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
            setJamHadir(jam)

            // set timeout for 1 second to push data to mock api
            fetch(`https://64f4896b932537f4051a72e1.mockapi.io/rooms/${params.id}/students`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nama: tempName,
                    nim: tempNim,
                    kelas: tempKelas,
                    status: kehadiran,
                    jam: jam,
                    tanggal: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
                })
            })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                // reload this page
                // window.location.reload()
                // navigate("/attendance-room-list/"+params.id)
            })
        })
    }

    const scanSuccess = (res) => {
        setScanning(false)
        setResult(res)

        handlePushData(res, "Hadir")
    }

    const startScan = () => {
        setResult("")
        setScanning(true)
    }

    const handleSakit = () => {
        setResult("Sakit")
        setStatusHadir("Sakit")
        handlePushData(inputNim, "Sakit")
    }

    const handleIzin = () => {
        setResult("Izin")
        setStatusHadir("Izin")
        handlePushData(inputNim, "Izin")
    }

    useEffect(() => {
        fetch(`https://64f4896b932537f4051a72e1.mockapi.io/rooms/${params.id}/students`)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            setStudents(result)
        })
    }, [result])

    return (
        <>
            <Container className="text-white mb">
                <div className="row layer">
                    <div className="col-12">
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <div className="col-md-6 d- py-3 justify-content-center align-items-center">
                                    <div className="container-qr">

                                        {scanning ? (
                                            <>
                                                <Scanner scanning={scanning} scanSuccess={scanSuccess} className="mt-4" />
                                                <button onClick={() => setScanning(false)} className="btn btn-purple">Stop Scanning</button>
                                            </>
                                        ) : (
                                            <>
                                                <h1 className="fw-bold mb-4">Selamat Datang</h1>
                                                <button onClick={startScan} className="btn btn-purple">Start Scanning</button>
                                            </>
                                        )}
                                        {/* <p>Result : {result}</p> */}
                                        
                                    <Container className="mt-4">
                                        <div className="row">
                                            <div className="col-md">
                                                <h4>Sakit/Izin?</h4>
                                                <h5>Masukkan NIM Di bawah ini !</h5>
                                                <div className="mb-3">
                                                    {/* <label htmlFor="email-login" className="form-label">Email address</label> */}
                                                    <input value={inputNim} onChange={e => setInputNim(e.target.value)} type="email" className="form-control mb-2" id="email-login" aria-describedby="emailHelp" placeholder="Masukkan email anda" />
                                                    <span onClick={handleSakit} className="btn btn-purple px-5 me-2 ">Sakit</span>
                                                    <span onClick={handleIzin} className="btn btn-outline-light px-5">Izin</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Container>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="container my-4 rounded">
                                        <div className="row bg-purple-dark">
                                            <div className="col-12 ">
                                                <div className="bg-purple p-3">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-2">
                                                                NIM
                                                            </div>
                                                            <div className="col-1">
                                                                :
                                                            </div>
                                                            <div className="col">
                                                                {nim}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row bg-purple-dark">
                                            <div className="col-12 ">
                                                <div className="bg-purple-dark p-3">
                                                <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-2">
                                                                Nama
                                                            </div>
                                                            <div className="col-1">
                                                                :
                                                            </div>
                                                            <div className="col">
                                                                {/* {console.log(data)}
                                                                {data?.map(
                                                                    (student) => {
                                                                        return (
                                                                            <p>{student.nama}</p>
                                                                        )
                                                                    }
                                                                )}ini datamya */}
                                                                {nama}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row bg-purple-dark">
                                            <div className="col-12 ">
                                                <div className="bg-purple p-3">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-2">
                                                                Status
                                                            </div>
                                                            <div className="col-1">
                                                                :
                                                            </div>
                                                            <div className="col">
                                                                {/* {data}ini datamya */}
                                                                {status}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row bg-purple-dark">
                                            <div className="col-12 ">
                                                <div className="bg-purple-dark p-3">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-2">
                                                                Jam Hadir
                                                            </div>
                                                            <div className="col-1">
                                                                :
                                                            </div>
                                                            <div className="col">
                                                                {jamHadir}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="row bg-purple-dark">
                                            <div className="col-12 ">
                                                <div className="bg-purple p-3">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-2">
                                                                Matkul
                                                            </div>
                                                            <div className="col-1">
                                                                :
                                                            </div>
                                                            <div className="col">
                                                                {kelas}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="row bg-purple-dark">
                                            <div className="col-12 ">
                                                <div className="container-status-qr d-flex justify-content-center align-items-center flex-column ">
                                                    {result ? (
                                                        <>
                                                            {(statusHadir === "Sakit") ? (
                                                                <>
                                                                    <div>
                                                                        <img className="mb-2" src={sakitSvg} alt="sakit" /> 
                                                                    </div>
                                                                    <p>
                                                                        <h2>{nama} Tercatat Sakit</h2>
                                                                    </p>
                                                                </>
                                                            ) :
                                                            (statusHadir === "Izin") ? (
                                                                <>
                                                                    <div>
                                                                        <img className="mb-2" src={sakitSvg} alt="izin" /> 
                                                                    </div>
                                                                    <p>
                                                                        <h2>{nama} Tercatat Izin</h2>
                                                                    </p>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <div>
                                                                        <img className="mb-2" src={okSvg} alt="OK" /> 
                                                                    </div>
                                                                    <p>
                                                                        <h2>Selamat Datang {nama}</h2>
                                                                    </p>
                                                                </>
                                                            )}
                                                            
                                                        </>
                                                    ) : (
                                                        <>
                                                            <h2>Silahkan Scan Untuk Checkin</h2>
                                                        </>
                                                    )}
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

            <>
            <Container className="mt-5">
                <div className="row text-white mt-3 ">
                    <div className="col-12">
                        <div className="d-flex justify-content-between flex-wrap">
                            <h3><span className="border-heading"></span> Daftar Mahasiswa</h3>
                        </div>
                    </div>
                </div>
                <div className="row text-white mt-3">
                    <div className="col">

                        <table className="table table-dark table-striped shadow rounded">
                            <thead className="table-purple" style={{backgroundColor: "red"}}>
                                <tr className="table-purple">
                                <th scope="col">NIM</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Tanggal</th>
                                <th scope="col">Keterangan</th>
                                <th scope="col">Jam</th>
                                </tr>
                            </thead>
                            <tbody className="table-purple">
                                {students.map((student) => {
                                    return (
                                        <tr key={student.id}>
                                            <th scope="row">{student.nim}</th>
                                            <td>{student.nama}</td>
                                            <td>{student?.tanggal}</td>
                                            <td>{student.status}</td>
                                            <td>{student.jam}</td>
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
        </>
    )
}

export default ScanRoomPage