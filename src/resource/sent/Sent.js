import React, { useEffect, useState } from 'react';

import Authtab from '../components/Authtab';
import Empty from '../components/Empty';

function Sent() {

  useEffect(() => {
    const aktif = document.getElementById('sent').classList.add('active');

  }, []);

  return (
    <div className="App">
      <Authtab/>
      
      <div className='container'>
        <Empty/>
      </div>
      
    </div>
  );
}

export default Sent;
