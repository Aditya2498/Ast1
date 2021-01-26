import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Logo from '../assets/Logo.jpg';
import Logotext from '../assets/Logotext.png';



export const NavigationBar = ( ) =>(
    <div >
       <Navbar expand= 'lg'>
       <LinkContainer to ="/">
          <Navbar.Brand>
           <img src={Logo} height='80'width='80' alt='logo'/>
            <> <img src={Logotext} height='60' alt='logotext'/></>
            
          </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav '/>
          <Navbar.Collapse id='basic-navbar-nav'>
           <Nav className='ml-auto basic-navbar-nav text-primary'>   
             <Nav.Item>
             <LinkContainer to ="/">
                <Nav.Link >
                <div className="font"> Home </div>
               </Nav.Link>
             </LinkContainer>
             </Nav.Item>

             <Nav.Item>
             <LinkContainer to ="/about"><Nav.Link>
             <div className="font">  About</div>
              </Nav.Link>
             </LinkContainer>
             </Nav.Item>

             <Nav.Item>
             <LinkContainer to='/blog'>
             <Nav.Link>
             <div className="font">
             Blog 
             </div>
            </Nav.Link>
             </LinkContainer>
              </Nav.Item>

             <Nav.Item>
             <LinkContainer  to='/products'>
             <Nav.Link>
             <div className="font">
             Products
             </div>
             </Nav.Link>
             </LinkContainer>
            </Nav.Item>

             <Nav.Item>
             <LinkContainer to='/contact'>
             <Nav.Link>
             <div className="font">
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