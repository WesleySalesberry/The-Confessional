import Container from "react-bootstrap/Container"
import { HeaderBar } from "../Navs/HeaderBar"

export const BaseLayout = ({ children }) => {
  return (
    <Container fluid>
      <HeaderBar />
      { children }
    </Container>
  )
}