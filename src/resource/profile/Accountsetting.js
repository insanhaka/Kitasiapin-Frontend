import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Icon from '@mdi/react';
import { mdiAccountCog } from '@mdi/js';
import Form from 'react-bootstrap/Form';

import Authtab from '../components/Authtab';

function Accountsetting() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const submit = () => {

  }

  useEffect(() => {
      const aktif = document.getElementById('account').classList.add('active');

  }, []);

  return (
    <div className="App">
      <Authtab/>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-1' style={{paddingTop : '3%'}}>
              <Icon path={mdiAccountCog} size={3} color='#303952' />
            </div> 
            <div className='col-sm-6' style={{paddingTop : '3%'}}>
              <h1>Pengaturan Akun</h1>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12' style={{paddingTop : '5%'}}>
              <h6>Ubah Data Akun</h6>
              <hr  style={{
                color: '#303952',
                backgroundColor: '#303952',
                height: 2,
                borderColor : '#303952',
              }}/>
            </div>
            <div className='col-md-12'>
              <Card>
                <Card.Body>
                  <label>Email</label>
                  <div className="mb-3">
                      <Form.Control type="text" className="form-control" placeholder="Email kamu" id="email" onChange={(event)=> setEmail(event.target.value)} />
                  </div>
                  <label>Password</label>
                  <div className="mb-3">
                      <Form.Control type="password" className="form-control" placeholder="Password" id="password" onChange={(event)=> setPassword(event.target.value)} />
                  </div>
                  <div className='row justify-content-end'>
                    <div className='col-sm-3'>
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