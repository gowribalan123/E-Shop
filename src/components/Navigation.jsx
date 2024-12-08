import React  from 'react'
import {Outlet , Link} from 'react-router-dom'
import { Nav,Container, Row, Col,Navbar} from 'react-bootstrap';
import Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';  
 

const Navigation = () => {

  
  return (
     <div >
        
<header className="">

<Navbar className="bg-body-tertiary  ">
<Container >
         <Navbar.Brand >
            <img
              src="cart-icon-2.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Profile logo"
            /><span style={{ color: "blue",fontWeight:'500px',fontSize:'40px' }}>ShopEase</span>
             
           </Navbar.Brand>
  </Container>

   
  <Nav  className="ml-auto m-2 " >  
    <Button className="navbar-toggler bg-light btn btn-primary" type="button" data-toggle="collapse" data-target=".navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                           
    <div className="container-fluid justify-content-end collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav " style={{fontSize:'20px',fontWeight:'500',gap:'10px'}}>

        <li className="nav-item"><Link to='/#' className="nav-link ">HOME</Link></li>
       <li className="nav-item"><Link to='/product' className="nav-link ">PRODUCTS</Link></li>
   
        
       
        <Link to='/login' > <Button  variant="primary" style={{fontSize:'20px',fontWeight:'500',backgroundColor:'purple'}}>LOGIN       </Button></Link>
     
               
        </ul>
        </div>
        
    </Nav>


 </Navbar>

</header>
<main className="bg-body-tertiary main "  >

    <Outlet/>
  
</main>

<footer >
      <Container id="footer" className="bg-body-tertiary   " >
        <Row>
          <Col >
          
        
            <p>© {new Date().getFullYear()} Gowri . All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>


    </div>
  )
}

export default Navigation