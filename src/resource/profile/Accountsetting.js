import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Icon from '@mdi/react';
import { mdiAccountCog } from '@mdi/js';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Pp from '../../assets/img/noimg-user.png';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

import Authtab from '../components/Authtab';

function Accountsetting() {

  let params = useParams();
  const apiUrl = useSelector(state => state.ApiReducer);

  const token = localStorage.getItem('passport');
  const pisah = token.split('#');
  const idUser = pisah[2];
  const mytoken = pisah[3];
  const token_auth = {
    headers: { Authorization: `Bearer ${mytoken}`, "Content-Type": "multipart/form-data" }
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [image, setImage] = React.useState('');
  const [preview, setPreview] = React.useState('');

  const imagesSet = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  // console.log(image);

  const submit = () => {
    
    const data = new FormData() 
    data.append('image', image)
    data.append('id', params.id)
    data.append('name', name)
    data.append('email', email)
    data.append('password', password)

    // console.log(data);

    axios.post(apiUrl.url+'account-setting/'+params.id+'/update', data, token_auth
    ).then(function (response) {
      const message = response.data.message;
      const res = response.data.data;
      if (message === 'success') {
        Swal.fire({
          icon: message,
          text: res,
          showConfirmButton: false,
          timer: 2500
        });
        setTimeout(() => window.location.reload(), 1500);
      }
      Swal.fire({
        icon: message,
        text: res,
        showConfirmButton: false,
        timer: 2500
      })
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

  useEffect(() => {
      const aktif = document.getElementById('account').classList.add('active');

      if (mytoken !== null && params.id == idUser) {
        axios.get(
          apiUrl.url+'account-setting/'+params.id, token_auth
        ).then(function (response) {
          const res = response.data.data[0];
          const nama = res.name;
          setName(nama);
          const imail = res.email;
          setEmail(imail);
          
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

      }else {
        Swal.fire({
          icon: 'error',
          text: 'Emmm.., Ada yang aneh',
          showConfirmButton: false,
          timer: 2500
        })
      }

  }, []);

  return (
    <div className="App">
      <Authtab/>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12' style={{paddingTop : '3%'}}>
              <h2><Icon path={mdiAccountCog} size={3} color='#344767' /> Pengaturan Akun</h2>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12 mt-6'>
              <Card>
                <Card.Body className='p-6 pt-3'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <center>
                      {preview == '' &&
                        <Image
                          src={Pp} 
                          style={{ width: 160, height: 160, objectFit: 'cover' }} 
                          alt="User Image"
                          roundedCircle
                        />
                      }

                      {preview !== '' &&
                        <Image
                          src={preview} 
                          style={{ width: 160, height: 160, objectFit: 'cover' }} 
                          alt="User Image"
                          roundedCircle
                        />
                      }
                      </center>
                      <br/>
                      <label>Foto Profil</label>
                      <div className="mb-3">
                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Control type="file" onChange={imagesSet} />
                        </Form.Group>
                      </div>
                    </div>
                    <div className='col-sm-8 pt-2'>
                      <label>Nama</label>
                      <div className="mb-3">
                          <Form.Control type="text" className="form-control" placeholder="Nama kamu" id="name" value={name} onChange={(event)=> setName(event.target.value)} />
                      </div>
                      <label>Email</label>
                      <div className="mb-3">
                          <Form.Control type="text" className="form-control" placeholder="Email kamu" id="email" value={email} onChange={(event)=> setEmail(event.target.value)} />
                      </div>
                      <label>Password</label>
                      <div className="mb-3">
                          <Form.Control type="password" className="form-control" placeholder="Password" id="password" onChange={(event)=> setPassword(event.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className='row justify-content-end'>
                    <div className='col-sm-2'>
                      <button onClick={submit} className="btn btn-info w-100 mt-4 mb-0">{isLoading ? 'Loading…' : 'Simpan'}</button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Accountsetting;