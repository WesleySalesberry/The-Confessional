import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

export const CardLayout = ({ children }) => {
  return (
      <Row
        className="gx-1 gy-1 w-100"
      >
        { children }
      </Row>
  )
}