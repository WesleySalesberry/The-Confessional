import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { HeaderBar } from "../Navs/HeaderBar"
import { SideNav } from "../Navs/SideNav"

export const BaseLayout = ({ children }) => {
  return (
    <Container fluid>
      <HeaderBar />
      <Row>
        <Col md={2} className="d-none d-md-block d-lg-block d-xl-block">
          <SideNav />
        </Col>
        <Col md={10}> 
          { children }
        </Col>
      </Row>
    </Container>
  )
}