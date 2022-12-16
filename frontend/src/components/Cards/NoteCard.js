import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import moment from 'moment'

import { FaRegEye, FaCommentDots } from "react-icons/fa";

import { removeUnderscores, truncateText } from '../../utils/helpers'
import { Link } from 'react-router-dom';

export const NoteCard = ({ itm }) => {
  
  return (
    <Col>
      <Card
        className="note_card rounded"
      >
      <Row>
        <Col>
          <div className={`badge card_title rounded ${itm.category}`}>
            <Link
              to={`/category/${itm.category}`}
              className="link text-white"
            >
              <Card.Title>
                { removeUnderscores(itm.category) }
              </Card.Title>
            </Link>
          </div>
        </Col>
        <Col>
          { moment(itm.createdAt).fromNow() }
        </Col>
      </Row>
      <Card.Body>
        <Link
          to={`/${itm.category}/${itm.confession_id}`}
          className="link"
          state={{ id: itm._id }}
        >
          {truncateText(itm.body, 5)}
        </Link>
      </Card.Body>
      <Row>
        <Col md={6} className="text-center">
          <FaRegEye /> {itm.views >= 0 ? itm.views : 'No Views'}
        </Col>
        <Col md={6} className="text-center">
          <FaCommentDots /> 5
        </Col>
      </Row>
      </Card>
    </Col>
  )
}