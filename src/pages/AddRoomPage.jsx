import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddRoomPage = () => {
  const [name, setName] = useState("");
  const [kelas, setKelas] = useState("");
  const [jamMasuk, setJamMasuk] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://64f4896b932537f4051a72e1.mockapi.io/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name_room: name,
        kelas: kelas,
        jam_masuk: jamMasuk,
        admin_name: JSON.parse(localStorage.getItem("login")).nama,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log("Success:", result);
        new Swal(
            "Success!",
            "Room Matkul Berhasil dibuat",
            "success",
            {
                timer: 3000,
            },
            navigate("/attendance-room-list")
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Container>
        <div className="row justify-content-md-center text-white mt-3">
          <div className="col-md-8">
            <div className="layer p-5 ">
              <h1 className="fw-bold text-center">Buat Ruangan </h1>
              <p className="lead text-center">Silahkan masukkan data mahasiswa sesuai form di bawah ini</p>
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="name-register" class="form-label">
                    Nama Ruangan
                  </label>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="name-register" aria-describedby="emailHelp" placeholder="Silahkan masukkan nama anda" />
                </div>
                <div class="mb-3">
                  <label for="email-register" class="form-label">
                    Kelas
                  </label>
                  <input value={kelas} onChange={(e) => setKelas(e.target.value)} type="text" class="form-control" id="email-register" aria-describedby="emailHelp" placeholder="Silahkan masukkan Kelas" />
                </div>
                <div class="mb-3">
                  <label for="password-register" class="form-label">
                    Jam Masuk (Format 24 Jam. Masukkan angkanya saja)
                  </label>
                  <input value={jamMasuk} onChange={(e) => setJamMasuk(e.target.value)} type="time" class="form-control" id="password-register" placeholder="Contoh : 12" />
                </div>
                <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-2 d-flex justify-content-center">
                      <button type="submit" class="btn btn-purple px-5 mx-auto">
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

export default AddRoomPage;
