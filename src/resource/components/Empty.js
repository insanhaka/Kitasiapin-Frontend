import React from 'react';
import Image from 'react-bootstrap/Image';
import EmptyImage from '../../assets/img/empty-data.png';
import Button from 'react-bootstrap/Button';

function Empty() {
  return (
    <div className="App">
        
        <div className='container pt-6'>
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <Image src={EmptyImage} className="img-fluid" alt="Empty Image"/>
                    <h3 className='text-center'>
                        Oopss.. Kamu belum membuat undangan
                    </h3>
                    <center>
                    <Button href="/invitation/create" variant="info">Buat Undangan</Button>
                    </center>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Empty;
