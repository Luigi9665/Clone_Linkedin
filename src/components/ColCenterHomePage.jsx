import { Button, CloseButton, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import {
  ArrowRepeat,
  ChatText,
  Dot,
  FileTextFill,
  GlobeEuropeAfrica,
  HandThumbsUp,
  HandThumbsUpFill,
  Image,
  PlayBtnFill,
  PlusLg,
  SendArrowUpFill,
  ThreeDots,
  X,
  XLg,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import ListPostHome from "./ListPostHome";

const ColCenterHomePage = () => {
  const profileSelect = useSelector((state) => state.profileSelect.content);

  return (
    <>
      <Container>
        {/* CREA UN POST HOME */}
        <Row className="bg-white rounded-2 mt-3 p-3   ">
          <Col xs={12} className="d-flex align-items-center">
            <Col xs={1} className="me-2">
              <img className="rounded-circle " style={{ width: "100%" }} src={profileSelect.image} alt="img profilo" />
            </Col>
            <Col xs={11}>
              <InputGroup className="">
                <Form.Control placeholder="Crea un post" className="fw-semibold rounded-pill py-3 border border-secondary" />
              </InputGroup>
            </Col>
          </Col>
          <Col xs={12} className="d-flex mt-3">
            <Col xs={4} className="d-flex justify-content-center">
              <Button variant="outline-secondary  " style={{ border: "none" }} className="d-flex align-items-center fw-semibold fs-5">
                <PlayBtnFill className="fs-3 text-success me-2" /> Video
              </Button>
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
              <Button variant="outline-secondary " style={{ border: "none" }} className=" d-flex align-items-centerfw-semibold fs-5">
                <Image className="fs-3 text-primary me-2" /> Foto
              </Button>
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
              <Button variant="outline-secondary " style={{ border: "none" }} className="d-flex align-items-center fw-semibold fs-5">
                <FileTextFill className="fs-3 text-danger me-2" /> Scrivi un articolo
              </Button>
            </Col>
          </Col>
        </Row>

        {/* POST */}

        <ListPostHome />
      </Container>
    </>
  );
};
export default ColCenterHomePage;
