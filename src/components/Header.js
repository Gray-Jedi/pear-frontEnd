import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'; 

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()
  
  const logoutHandler = () => {
    dispatch(logout())
  }


  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
      {/* <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect> */}
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className="brand" href="/">PEAR</Navbar.Brand>
          </LinkContainer>
    
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBox />
            {/* <Nav className='ml-auto'> */}
            <Nav className="mr-auto">

            <Nav.Link href="/">
                <i className="fa fa-home"></i> Home
              </Nav.Link>

              <Nav.Link href="/create">
                <i className="fa fa-cog"></i> List
              </Nav.Link>

              {/* <Nav.Link href="/post">
                <i className="fa fa-cog"></i> List
              </Nav.Link> */}
              
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>

              {/* <Nav.Link href="/login">
                <i className="fas fa-users"></i> Login
              </Nav.Link> */}
              {/* <Nav.Link href="/register">
                <i className="fas fa-user"></i> Register
              </Nav.Link> */}
              <Nav.Link href="/otherstuffhere">
                <i className="fas fa-user"></i> Customer
              </Nav.Link>
              {/* <Nav.Link href="/otherstuffhere">
                Customer
              </Nav.Link> */}
              <Nav.Link href="/inbox">
                <i className="fa fa-inbox"></i> Inbox
              </Nav.Link>
              <Nav.Link href="/about">
                <i className="fas fa-info"></i> About
              </Nav.Link>
              
              
{/* Tony Code
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>My Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ): (
                <Nav.Link href="/login">
                <i className="fas fa-users"></i> Login
                </Nav.Link>
              )}              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
} */}

{/* // Marie code // */}
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>My Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ): (
                <Nav.Link href="/login">
                <i className="fas fa-users"></i> Login
                </Nav.Link>
              )}      
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
// import SearchBox from './SearchBox'
// import { logout } from '../actions/userActions'

// function Header() {

//     const userLogin = useSelector(state => state.userLogin)
//     const { userInfo } = userLogin

//     const dispatch = useDispatch()

//     const logoutHandler = () => {
//         dispatch(logout())
//     }

//     return (
//         <header>
//             <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
//                 <Container>
//                     <LinkContainer to='/'>
//                         <Navbar.Brand>ProShop</Navbar.Brand>
//                     </LinkContainer>

//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <SearchBox />
//                         <Nav className="ml-auto">

//                             <LinkContainer to='/cart'>
//                                 <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
//                             </LinkContainer>

//                             {userInfo ? (
//                                 <NavDropdown title={userInfo.name} id='username'>
//                                     <LinkContainer to='/profile'>
//                                         <NavDropdown.Item>Profile</NavDropdown.Item>
//                                     </LinkContainer>

//                                     <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

//                                 </NavDropdown>
//                             ) : (
//                                     <LinkContainer to='/login'>
//                                         <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
//                                     </LinkContainer>
//                                 )}


//                             {userInfo && userInfo.isAdmin && (
//                                 <NavDropdown title='Admin' id='adminmenue'>
//                                     <LinkContainer to='/admin/userlist'>
//                                         <NavDropdown.Item>Users</NavDropdown.Item>
//                                     </LinkContainer>

//                                     <LinkContainer to='/admin/productlist'>
//                                         <NavDropdown.Item>Products</NavDropdown.Item>
//                                     </LinkContainer>

//                                     <LinkContainer to='/admin/orderlist'>
//                                         <NavDropdown.Item>Orders</NavDropdown.Item>
//                                     </LinkContainer>

//                                 </NavDropdown>
//                             )}


//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </header>
//     )
// }

// export default Header