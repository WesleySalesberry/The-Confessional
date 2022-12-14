import { Badge, Card, Col, Container, Row } from "react-bootstrap"
import { BaseLayout } from "../Layouts/BaseLayout"
import { Meta } from '../metatags'

import { FaRegEye, FaCommentDots } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const ConfessionMain = () => {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <Meta 
        title="Category"
        description="A excerpt of the confession"
        url={window.location.href}
      />
      <Card className="rounded shadow-sm">
        <Row className="mx-3 mt-3">
          <Col>
            <span className="btn btn-primary rounded" onClick={() => navigate(-1)}>Back</span>
          </Col>
          <Col className="text-center">
            <Link
                to="/"
                className="link"
              >
              <div className={`badge card_title rounded lie`}>
                lie
              </div>
            </Link>
          </Col>
        </Row>
      
        <div class="px-4 py-5 my-5 text-center">
          <div class="col-lg-6 mx-auto">
            Spicy jalapeno bacon ipsum dolor amet chislic picanha tail, boudin ball tip corned beef ham hock alcatra porchetta chuck pancetta beef ribs fatback flank salami. Fatback leberkas kevin tenderloin alcatra landjaeger kielbasa spare ribs shankle jowl pork loin sirloin. Meatball kielbasa sausage tenderloin ham hock tri-tip turkey salami. Ground round swine cupim, corned beef cow fatback tail.
          </div>
        </div>
        <Row className="mb-2">
          <Col className="text-center">
            <FaRegEye /> 6
          </Col>
          <Col className="text-center">
            <FaCommentDots /> 5
          </Col>
        </Row>
      </Card>
    </BaseLayout>
  )
}