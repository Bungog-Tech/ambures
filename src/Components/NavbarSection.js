import React,{useState} from "react";
import { Navbar, Nav, Modal, Form ,Button} from "react-bootstrap";

export default function NavbarSection(){
  
  const [showLogin, setShowLogin] = useState(false)

  const openLogin = () => {
		setShowLogin(true);
	}

	const closeLogin = () => {
		setShowLogin(false);

	}


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Ambulance Reservation System</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#"  onClick={() => openLogin()}>Sign In</Nav.Link>
        </Nav>
      </Navbar>

      <Modal show={showLogin} onHide={closeLogin} data-backdrop="static">
        <Form >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            
            <Button variant="success" type="submit">
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}


