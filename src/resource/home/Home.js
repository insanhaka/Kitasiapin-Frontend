import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image'
import Headimg from '../../assets/img/image-header.png';
import Button from 'react-bootstrap/Button'

import Noauthtab from '../components/Noauthtab';

function Home() {

  useEffect(() => {
    const aktif1 = document.getElementById('home').classList.add('active');
    const aktif2 = document.getElementById('m-home').classList.add('active');

  }, []);

  return (
    <div className="App">
        <Noauthtab/>
        <div className='container' style={{paddingTop : '5%'}}>
          <div className='row'>
            
            <div className='col-md-5'>
              <Image src={Headimg} className="img-fluid" alt="Head Image"/>
            </div>
            <div className='col-md-7' style={{paddingTop : '5%', paddingLeft: '5%'}}>
              <h1>Digital Wedding Invitation</h1>
              <p>Solusi untuk menghemat, lebih praktis dan modern dalam menyelenggarakan acara pernikahan anda.</p>
              <Button href="/dashboard" variant="info" style={{ width: '50%', marginTop: 10 }}>Buat Undangan</Button>
            </div>
            
          </div>
        </div>
    </div>
  );
}

export default Home;
