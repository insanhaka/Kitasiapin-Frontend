import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Pp from '../../assets/img/noimg-user.png';
import Icon from '@mdi/react';
import { mdiAccountCog } from '@mdi/js';
import { mdiInformation } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import Button from 'react-bootstrap/Button';
import { 
    Link,
    useNavigate 
} from "react-router-dom";

import Authtab from '../components/Authtab';

function Profile() {

    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userID, setUserID] = useState('');
    
    const logout = () => {
        localStorage.removeItem('passport');
        navigate("/", { replace: true });
    }

    useEffect(() => {
        const aktif = document.getElementById('account').classList.add('active');

        const token = localStorage.getItem('passport');
        if (token !== null) {
            const pisah = token.split('#');
            const nama = pisah[0];
            setName(nama);
            const mail = pisah[1];
            setEmail(mail);
            const idUser = pisah[2];
            setUserID(idUser);
        }

    }, []);

  return (
    <div className="App">
      
        <Authtab/>

        <div className='container pt-3'>
            <div className='row p-5'>
                <div className='col-sm-2 text-center'>
                    <Image src={Pp} className="img-fluid mb-5" alt="User Image"/>
                </div>
                <div className='col-sm-10'>
                    <h1>{name}</h1>
                    <p>{email}</p>
                    <br/>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link to={`/account/${userID}/setting`} style={{ color : '#303952' }}>
                                <Icon path={mdiAccountCog} size={1} style={{ marginRight: 10 }} />
                                Pengaturan Akun
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to='/about' style={{ color : '#303952' }}>
                                <Icon path={mdiInformation} size={1} style={{ marginRight: 10 }} />
                                Tentang Kami
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button onClick={logout} variant="light">
                                <Icon path={mdiLogout} size={1} style={{ marginRight: 10 }} />
                                Keluar
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Profile;
