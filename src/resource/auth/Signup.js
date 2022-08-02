import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Headimg from '../../assets/img/signup.png';
import {
  Link,
  useNavigate,
} from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import '../../assets/css/signin.css';

import Noauthtab from '../components/Noauthtab';

function Signup() {

  const apiUrl = useSelector(state => state.ApiReducer);
  const apiKey = useSelector(state => state.HeaderReducer);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const submit = () => {

    if (name === '' || email === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            text: 'Mohon isi form dengan lengkap',
            showConfirmButton: false,
            timer: 2500
        })
    }else {
        axios.post(apiUrl.url+'postsignup', {
            name: name,
            email: email,
            password: password
        }, {
            headers: {
                'kitasiapin-key': apiKey.key 
            }
        })
        .then(function (response) {
            var res = response.data.message;
            if (res == "success") {
                Swal.fire({
                    icon: 'success',
                    text: 'Registrasi Berhasil, Silahkan Login !',
                    showConfirmButton: false,
                    timer: 3000
                })
                navigate("/login", { replace: true });

            }else if (res == "duplicated") {
                Swal.fire({
                    icon: 'error',
                    text: 'Email tersebut sudah terdaftar',
                    showConfirmButton: false,
                    timer: 2500
                })
            }else {
                Swal.fire({
                    icon: 'error',
                    text: response.data.data,
                    showConfirmButton: false,
                    timer: 2500
                })
            }
        })
        .catch(function (error) {
            console.log("error nih");
            Swal.fire({
                icon: 'error',
                text: 'Mohon maaf, sedang ada gangguan pada server',
                showConfirmButton: false,
                timer: 2500
            })
        });
    }
  }


  useEffect(() => {
    const aktif = document.getElementById('login').classList.add('active');

  }, []);

  return (
    <div className="App">
        <Noauthtab/>
        
        <div className="page-header min-vh-75">
          <div className="container" style={{paddingTop : '3%'}}>
            <div className="row">

              <div className="col-md-5">
                  <br/>
                  <Image src={Headimg} className="img-fluid mt-3" alt="Head Image"/>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                <div className="card card-plain mt-2">
                  <div className="card-header pb-0 text-left bg-transparent">
                    <h3 className="font-weight-bolder">Daftar</h3>
                  </div>
                  <div className="card-body">
                    <label>Nama Lengkap</label>
                    <div className="mb-2">
                        <Form.Control type="text" className="form-control" placeholder="Nama kamu" id="name" onChange={(event)=> setName(event.target.value)} />
                    </div>
                    <label>Email</label>
                    <div className="mb-2">
                        <Form.Control type="text" className="form-control" placeholder="Email kamu" id="email" onChange={(event)=> setEmail(event.target.value)} />
                    </div>
                    <label>Password</label>
                    <div className="mb-2">
                        <Form.Control type="password" className="form-control" placeholder="Password" id="password" onChange={(event)=> setPassword(event.target.value)} />
                    </div>
                    <div className="text-center">
                        <button onClick={submit} className="btn btn-info w-100 mt-4 mb-0">Daftar</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

    </div>
  );
}

export default Signup;
