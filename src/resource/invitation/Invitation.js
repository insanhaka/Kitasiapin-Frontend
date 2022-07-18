import React, { useEffect, useState } from 'react';

import Authtab from '../components/Authtab';
import Empty from '../components/Empty';

function Invitation() {

  useEffect(() => {
    const aktif = document.getElementById('invitation').classList.add('active');

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

export default Invitation;
