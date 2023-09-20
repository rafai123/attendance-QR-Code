import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddStudentPage = () => {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [kelas, setKelas] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://64f2052d0e1e60602d24967d.mockapi.io/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama: name,
        nim: nim,
        kelas: kelas,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        new Swal(
          "Success!",
          "Data Berhasil diTambah",
          "success",
          {
              timer: 3000,
          },
          navigate("/student-list")
        )
      })
      .catch((error) => {
        console.error("Error:", error);
        new Swal(
          "Error!",
          "Room Matkul Gagal dibuat",
          "error",
          {
              timer: 3000,
          },
          // navigate("/attendance-room-list")
        )
      });
  };

  return (
    <>
      <Container>
        <div className="row justify-content-md-center text-white mt-3">
          <div className="col-md-8">
            <div className="layer p-5 ">
              <h1 className="fw-bold text-center">Tambah Mahasiswa </h1>
              <p className="lead text-center">Silahkan masukkan data mahasiswa sesuai form di bawah ini</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="name-register" className="form-label">
                    Nama
                  </label>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name-register" aria-describedby="emailHelp" placeholder="Silahkan masukkan nama anda" />
                </div>
                <div className="mb-3">
                  <label for="email-register" className="form-label">
                    NIM
                  </label>
                  <input value={nim} onChange={(e) => setNim(e.target.value)} type="text" className="form-control" id="email-register" aria-describedby="emailHelp" placeholder="Silahkan masukkan NIM anda" />
                </div>
                <div className="mb-3">
                  <label for="password-register" className="form-label">
                    Kelas
                  </label>
                  <input value={kelas} onChange={(e) => setKelas(e.target.value)} type="text" className="form-control" id="password-register" placeholder="Masukkan Kelas anda" />
                </div>
                <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-2 d-flex justify-content-center">
                      <button type="submit" className="btn btn-purple px-5 mx-auto">
                        Tambah
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddStudentPage;
