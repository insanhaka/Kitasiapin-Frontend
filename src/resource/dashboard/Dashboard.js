import React, { useEffect, useState } from 'react';

import Authtab from '../components/Authtab';
import Empty from '../components/Empty';

function Dashboard() {

  useEffect(() => {
    const aktif = document.getElementById('dashboard').classList.add('active');

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

export default Dashboard;
