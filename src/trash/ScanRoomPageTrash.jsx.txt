import { useState } from "react"
import { Container } from "react-bootstrap"
import { QrReader } from "react-qr-reader"
import { useNavigate, useParams } from "react-router-dom"

const ScanRoomPage = () => {

    const [data, setData] = useState([])
    const [delayTime, setDelayTime] = useState(1000)
    console.log(data)
    const navigate = useNavigate()

    const params = useParams()

    const [nama, setNama] = useState("")
    const [nim, setNim] = useState("")
    const [kelas, setKelas] = useState("")
    const [status, setStatus] = useState("")
    const [jamHadir, setJamHadir] = useState("")

    const [scanQR, setScanQR] = useState(false)

    // const handleData = (data) => {
    //     // const newData = JSON.parse(data);
    //     // setData(newData)
        
    // }

    // if (!scanQR) {
    //     setTimeout(() => {
    //         setScanQR(true)
    //         console.log("scanQR", scanQR)
    //     }, 1000)
    // }

    if (!delayTime) {
        setTimeout(() => {
            setDelayTime(1000)
            console.log("delayTime", delayTime)
        }, 1000)
    }

    // const handlePushData = () => {
    //     // send to mock api the data
    //     const date = new Date()
    //     const jam = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() 
    //     fetch(`https://64f4896b932537f4051a72e1.mockapi.io/rooms/${params.id}/students`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             nama: nama,
    //             nim: nim,
    //             kelas: kelas,
    //             status: "Hadir",
    //             jamHadir: jam
    //         })
    //     })
    //     .then((response) => response.json())
    //     .then((result) => {
    //         console.log(result)
    //     })
    // }

    return (
        <>
            <Container className="text-white">
                <div className="row layer">
                    <div className="col-12">
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <div className="col-md-6 d- py-3 justify-content-center align-items-center">
                                    <div className="container-qr">
                                        {(scanQR) ? 
                                            <QrReader className="rounded shadow my-4"
                                                delay={delayTime}
                                                onResult={(result, error) => {
                                                if (!!result) {
                                                    console.log(data)
                                                    console.log("scanQR", scanQR)

                                                    const resultData = result?.text;
                                                    const resultToNumber = resultData
                                                    console.log(resultToNumber)
                                                    const link = "https://64f2052d0e1e60602d24967d.mockapi.io/students?nim=" + resultToNumber
                                                    console.log(link)
                                                    fetch(`https://64f2052d0e1e60602d24967d.mockapi.io/students?nim=${resultToNumber}`)
                                                    .then((response) => response.json())
                                                    .then((result) => {
                                                        console.log(result)
                                                        // console.log(result[0])
                                                        // const newData = [{
                                                        //     nama: result[0].nama,
                                                        //     nim: result[0].nim,
                                                        //     kelas: result[0].kelas
                                                        // }]
                                                        // console.log(newData)
                                                        // setData(newData)
                                                        // console.log(data)

                                                        setNama(result[0].nama)
                                                        setNim(result[0].nim)
                                                        setKelas(result[0].kelas)
                                                        setStatus("Hadir")
                                                        const tempName = result[0].nama
                                                        const tempNim = result[0].nim
                                                        const tempKelas = result[0].kelas
                                                        const date = new Date()
                                                        const jam = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
                                                        setJamHadir(jam)

                                                        console.log(nama)
                                                        console.log(nim)
                                                        console.log(kelas)

                                                        setDelayTime(false)
                                                        setScanQR(false)


                                                        // set timeout for 1 second to scan again
                                                        // setTimeout(() => {
                                                        //     setDelayTime(1000)
                                                        //     setScanQR(true)
                                                        //     console.log("delayTime", delayTime)
                                                        //     console.log("scanQR", scanQR)
                                                        // }, 1000)

                                                        // set timeout for 1 second to push data to mock api
                                                        setTimeout(async () => {
                                                            // handlePushData()
                                                            await fetch(`https://64f4896b932537f4051a72e1.mockapi.io/rooms/${params.id}/students`, {
                                                                method: "POST",
                                                                headers: {
                                                                    "Content-Type": "application/json"
                                                                },
                                                                body: JSON.stringify({
                                                                    nama: tempName,
                                                                    nim: tempNim,
                                                                    kelas: tempKelas,
                                                                    status: "Hadir",
                                                                    jam: jam
                                                                })
                                                            })
                                                            .then((response) => response.json())
                                                            .then((result) => {
                                                                console.log(result)
                                                                // reload this page
                                                                // window.location.reload()
                                                                navigate("/attendance-room-list/"+params.id)
                                                            })
                                                        }, 5000)

                                                    })
                                                    // setData(resultData)
                                                    // const data = JSON.parse(result?.text);
                                                    // const data = result?.text;
                                                    // handleData(data)
                                                    setDelayTime(false)
                                                    setScanQR(false)
                                                }
    
                                                if (!!error) {
                                                    console.info(error);
                                                }
                                                }}
                                                style={{ width: '100%' }}
                                            />
                                        :   
                                            <>
                                                <div className="btn btn-purple" onClick={setScanQR(true)}>Scan</div>
                                            </>
                                        }
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
                                                <div className="container-status-qr d-flex justify-content-center align-items-center">
                                                    <h2>Berhasil check in</h2> 
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

export default ScanRoomPage