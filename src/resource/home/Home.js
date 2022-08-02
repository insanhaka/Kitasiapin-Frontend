import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

// Image
import Headimg from '../../assets/img/image-header-new.png';
import Undangan from '../../assets/img/wedding-invitation.png';
// Component
import Noauthtab from '../components/Noauthtab';

function Home() {

  useEffect(() => {
    const aktif1 = document.getElementById('home').classList.add('active');
    const aktif2 = document.getElementById('m-home').classList.add('active');

  }, []);

  return (
    <div className="App">
        <Noauthtab/>
        <div className='container'>
          <div className='row'>
            
            <div className='col-md-6'>
              <Image src={Headimg} className="img-fluid" alt="Head Image"/>
            </div>
            <div className='col-md-6' style={{padding: '8%', paddingTop: '15%'}}>
              <h1>KITA SIAPIN</h1>
              <p>Solusi untuk menghemat, efisien dan mudah dalam mempersiapkan acara anda.</p>
              {/* <div className='row'>
                <div className='col-md-12'>
                  <Card>
                    <Card.Body>
                      <div className='row justify-content-center'>
                        <div className='col-2'>
                          <Image src={Undangan} style={{ height: 40, marginBottom: 8 }} alt="Invitation Image"/>
                        </div>
                        <div className='col-7'>
                          <p>Buat Undangan Digital</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div> */}
              <Button href="/dashboard" variant="info" style={{ width: '70%', marginTop: 10 }}>Buat Undangan</Button>
            </div>
            
          </div>
        </div>
    </div>
  );
}

export default Home;
