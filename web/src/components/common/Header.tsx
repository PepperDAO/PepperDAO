import {
  Navbar,
  Nav,
  Container,
  Image,
  Dropdown,
} from 'react-bootstrap'
import logo from '../embeds/logo.png'
import { useHistory } from 'react-router-dom'

export function Header({
  address,
  auth,
  onLogout
}: {
  address: string
  auth: boolean
  onLogout: () => Promise<void>
}) {
  let history = useHistory()
  return (
    <Navbar variant="light" className="shadow-sm p-3 bg-white rounded">
      <Container fluid>
        <Navbar.Brand>
          <h1>
           
              <Image src={logo} width={40} height={40} />{' '}
              <span className="title"> PepperDAO </span>
         
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="penmint-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="penmint-navbar-nav"
        >
          <Nav className="ml-auto">
            <Dropdown  className="d-inline mx-2 rounded-pill" align={{ lg: 'end' }}>
              <Dropdown.Toggle variant="light" className="rounded" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#0d6efd"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg> &nbsp;
                {
                  
                }
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {auth && <Dropdown.Item href="#" onClick={onLogout}>
                    Logout
                  </Dropdown.Item> }
                 
                
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
