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

const ColCenterHomePage = () => {
  const profileSelect = useSelector((state) => state.profileSelect.content);

  return (
    <>
      <Container>
        {/* CREA UN POST HOME */}
        <Row className="bg-white rounded mt-3 p-3  border border-secondary ">
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

        <Row className="bg-white rounded mt-3 p-3  border border-secondary ">
          <Col xs={12} className="d-flex align-items-top">
            <Col xs={1} className="me-2">
              <img
                className="rounded-circle"
                style={{ width: "100%" }}
                src="data:image/png;base64,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"
                alt="img profilo"
              />
            </Col>
            <Col xs={8}>
              <h5 className="m-0">Hilton Turin Center</h5>
              <p className="text-secondary m-0">800 follower</p>
              <p className="text-secondary m-0">
                1s <Dot /> <GlobeEuropeAfrica />
              </p>
            </Col>

            <Col xs={3} className="d-flex align-items-baseline justify-content-end">
              <div style={{ cursor: "pointer" }} className="toAdd rounded-circle d-flex align-items-center p-2">
                <ThreeDots className="fs-5" />
              </div>
              <div style={{ cursor: "pointer" }} className="toAdd rounded-circle d-flex align-items-center p-2">
                <XLg className="fs-5" />
              </div>
            </Col>
          </Col>
          <div>
            <p> Un’accoglienza speciale per un giorno indimenticabile </p>
          </div>
          <div>
            <p>
              Il 18 settembre abbiamo celebrato ufficialmente l’inaugurazione del nostro Hilton Turin Centre, accogliendo con entusiasmo e calore tutti gli
              ospiti che hanno condiviso con noi questo momento speciale. Il welcome ha segnato l’inizio di una serata ricca di emozioni, sorrisi, strette di
              mano e la gioia di dare il benvenuto a chi sceglie di vivere l’esperienza e l’ospitalità firmata Hilton nel cuore di Torino. Grazie a tutti coloro
              che hanno partecipato e reso questa giornata così significativa. Questo è solo l’inizio di tanti momenti straordinari insieme.{" "}
            </p>
          </div>
          <div className="border-bottom d-flex justify-content-between align-items-center">
            <div>
              <p className="fs-5 d-flex align-items-center text-secondary">
                <HandThumbsUpFill className="text-primary fs-4 me-2" /> 54
              </p>
            </div>
            <div>
              <p className="text-secondary ">3 diffusioni di post</p>
            </div>
          </div>
          {/* button */}
          <div className="d-flex justify-content-around">
            <div>
              <button className="mt-3 bg-white  d-flex align-items-center" style={{ border: "none" }}>
                <HandThumbsUp className="fs-4 me-2" />
                <span className=" fw-semibold text-secondary"> Consiglia</span>
              </button>
            </div>
            <div>
              <button className="mt-3  bg-white  d-flex align-items-center" style={{ border: "none" }}>
                <ChatText className="fs-4 me-2" /> <span className=" fw-semibold text-secondary"> Commenta</span>
              </button>
            </div>
            <div>
              <button className="mt-3  bg-white  d-flex align-items-center " style={{ border: "none" }}>
                <ArrowRepeat className="fs-4 me-2" /> <span className=" fw-semibold text-secondary ">Diffondi il post</span>
              </button>
            </div>
            <div>
              <button className="mt-3  bg-white  d-flex align-items-center " style={{ border: "none" }}>
                <SendArrowUpFill className="fs-4 me-2" /> <span className=" fw-semibold text-secondary ">Invia</span>
              </button>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default ColCenterHomePage;
