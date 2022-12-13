import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import { FaRegEye, FaCommentDots } from "react-icons/fa";

import { removeUnderscores, truncateText } from '../../utils/helpers'
import { Link } from 'react-router-dom';

export const NoteCard = ({ itm }) => {
  
  return (
    <Col>
      <Card
        className="note_card"
      >
      <Row>
        <Col>
          <div className={`badge card_title ${itm.category}`}>
            <Card.Title>{ removeUnderscores(itm.category) }</Card.Title>
          </div>
        </Col>
        <Col>
          1 hour ago
        </Col>
      </Row>
      <Card.Body>
        <Link
          to=""
          className="link"
        >
          {truncateText(itm.body, 5)}
        </Link>
      </Card.Body>
      <Row>
        <Col md={6} className="text-center">
          <FaRegEye /> 6
        </Col>
        <Col md={6} className="text-center">
          <FaCommentDots /> 5
        </Col>
      </Row>
      </Card>
    </Col>
  )
}