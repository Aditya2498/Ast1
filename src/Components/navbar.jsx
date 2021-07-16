import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import Iso from '../assets/Iso-logo.png';
import './navbar.css';

import "../App.css";
import {LinkContainer} from 'react-router-bootstrap';
import Logo from '../assets/Logo.jpg';
import Logotext from '../assets/Logotext.png';

export const NavigationBar = ( ) =>(
  <div >
      <Navbar expand= 'lg'>
       <LinkContainer to ="/">
          <Navbar.Brand>
          <div className='iso-cert'>
            <div>
           <img src={Logo} height='80'width='80' alt='logo'/>
            <img src={Logotext} height='60' alt='logotext'/>
            </div>
            <img src={Iso} alt='isoimg' style={{height:'3.5em',width:'7em',marginLeft:"1rem"}}/> 
            </div>
          </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav '/>
          <Navbar.Collapse id='basic-navbar-nav'>
           <Nav className='ml-auto basic-navbar-nav text-primary'>   
             <Nav.Item>
             <LinkContainer to ="/">
                <Nav.Link >
                <div className="nav-bar"> Home </div>
               </Nav.Link>
             </LinkContainer>
             </Nav.Item>

             <Nav.Item>
             <LinkContainer to ="/about"><Nav.Link>
             <div className="nav-bar">  About</div>
              </Nav.Link>
             </LinkContainer>
             </Nav.Item>

             <Nav.Item>
             <LinkContainer  to='/products'>
             <Nav.Link>
             <div className="nav-bar">
             Products
             </div>
             </Nav.Link>
             </LinkContainer>
            </Nav.Item>

             <Nav.Item>
             <LinkContainer to='/contact'>
             <Nav.Link>
             <div className="nav-bar">
             Contact 
             </div>
             </Nav.Link>
             </LinkContainer>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
       </Navbar>
    </div>
)