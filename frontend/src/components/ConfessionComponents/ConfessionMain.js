import { useEffect } from "react";

import { FaRegEye, FaCommentDots } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap"

import { BaseLayout } from "../Layouts/BaseLayout"
import { Meta } from '../metatags'
import { useGetConfession } from "../../Hooks/useGetConfession";
import { capitalizeFirstLetter } from "../../utils/helpers";

export const ConfessionMain = () => {
  const { id } = useLocation().state
  const navigate = useNavigate();

  const { getConfession, confession, isLoading, error } = useGetConfession();

  useEffect(() => {
    getConfession(id)
  },[])

  if(!isLoading){
    return (
      <BaseLayout>
        <Meta 
          title={`A ${confession.category}`}
          description={``}
          url={window.location.href}
        />
        <Card className="rounded shadow-sm">
          <Row className="mx-3 mt-3">
            <Col>
              <span className="btn btn-primary rounded" onClick={() => navigate(-1)}>Back</span>
            </Col>
            <Col className="text-center">
              <Link
                to={`/category/${confession.category}`}
                className="link"
              >
                <div className={`badge card_title rounded ${confession.category}`}>
                  { confession.category }
                </div>
              </Link>
            </Col>
          </Row>
        
          <div className="px-4 py-5 my-5 text-center">
            <div className="col-lg-6 mx-auto">
              { confession.body }
            </div>
          </div>
          <Row className="mb-2">
            <Col className="text-center">
              <FaRegEye /> { confession.views }
            </Col>
            <Col className="text-center">
              <FaCommentDots /> 5
            </Col>
          </Row>
        </Card>
      </BaseLayout>
    )
  }else{
    return(
      <BaseLayout>
        <p>Content Is Loading..</p>
      </BaseLayout>
    )
  }
}