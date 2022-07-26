import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {
    Link,
} from "react-router-dom";
import Icon from '@mdi/react'
import { mdiMonitorDashboard } from '@mdi/js';
import { mdiNewspaperVariantMultiple } from '@mdi/js';
import { mdiEmailFast } from '@mdi/js';
import { mdiAccountBox } from '@mdi/js';
import '../../assets/css/tab-active.css';


function Authtab() {
  return (
    <React.Fragment>
    <Nav className="navbar navbar-expand-lg px-0 mx-4 border-radius-xl mt-3 fixed-bottom" id="navbarBlur" navbar-scroll="true" style={{ backgroundColor : '#fff' }}>
        <div className="container-fluid py-1 px-3">
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <ul className="navbar-nav nav-justified w-100">
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link" id="dashboard">
                            <Icon path={mdiMonitorDashboard} size={1} />
                            <br/>
                            Dashboard
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/invitation" className="nav-link" id="invitation">
                            <Icon path={mdiNewspaperVariantMultiple} size={1} />
                            <br/>
                            Undangan
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/sent" className="nav-link" id="sent">
                            <Icon path={mdiEmailFast} size={1} />
                            <br/>
                            Kirim Undangan
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/account" className="nav-link" id="account">
                            <Icon path={mdiAccountBox} size={1} />
                            <br/>
                            Akun
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </Nav>

    {/* Mobile Nav */}
    <Nav className="navbar navbar-expand fixed-bottom d-md-none d-lg-none d-xl-none" style={{ backgroundColor : '#fff' }}>
        <ul className="navbar-nav nav-justified w-100">
        <li className="nav-item">
            <Link to="/dashboard" className="nav-link" id="m-dashboard">
                <Icon path={mdiMonitorDashboard} size={1} />
                    <br/>
                    Dashboard
                </Link>
            </li>
            
            <li className="nav-item">
                <Link to="/invitation" className="nav-link" id="m-invitation">
                    <Icon path={mdiNewspaperVariantMultiple} size={1} />
                    <br/>
                    Undangan
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/sent" className="nav-link" id="m-sent">
                    <Icon path={mdiEmailFast} size={1} />
                    <br/>
                    Kirim
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/account" className="nav-link" id="m-account">
                    <Icon path={mdiAccountBox} size={1} />
                    <br/>
                    Akun
                </Link>
            </li>
        </ul>
    </Nav>
    </React.Fragment>
  );
}

export default Authtab;
