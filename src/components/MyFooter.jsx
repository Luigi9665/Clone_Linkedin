import { useState } from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { CaretDownFill, QuestionCircleFill, GearFill, ShieldShaded } from "react-bootstrap-icons";

const MyFooter = () => {
  const [langSelect, setLang] = useState("Italiano");

  const modStateLang = (value) => {
    setLang(value);
  };

  return (
    <Container className="mt-4 mb-3">
      <Row xs={1} sm={2} md={3} lg={5}>
        <Col>
          <div className="d-flex flex-column justift-content-start align-items-start fw-semibold gap-3">
            <a href="#" className="footerLink">
              Informazioni
            </a>
            <a href="#" className="footerLink">
              Informativa sulla community professionale
            </a>

            <a style={{ cursor: "pointer" }} className="footerLink">
              Per le aziende
              <CaretDownFill />
            </a>

            <a href="#" className="footerLink">
              Sales Solutions
            </a>
            <a href="#" className="footerLink">
              Centro sicurezza
            </a>
            <small style={{ color: "#62615F", fontSize: "10px" }}>Linedin Corporation &#169; 2025 </small>
          </div>
        </Col>
        <Col>
          <div className="d-flex flex-column justift-content-start align-items-start fw-semibold gap-3">
            <a href="#" className="footerLink">
              Accessibilità
            </a>
            <a href="#" className="footerLink">
              Carriera
            </a>

            <a href="#" className="footerLink">
              Opzioni per gli annunci pubblicitari
            </a>
            <a href="#" className="footerLink">
              Mobile
            </a>
          </div>
        </Col>
        <Col>
          <div className="d-flex flex-column justift-content-start align-items-start fw-semibold gap-3">
            <a href="#" className="footerLink">
              Talent Solutions
            </a>
            <a href="#" className="footerLink">
              Soluzioni di marketing
            </a>

            <a href="#" className="footerLink">
              Pubblicità
            </a>
            <a href="#" className="footerLink">
              Piccole Imprese
            </a>
          </div>
        </Col>
        <Col>
          <div className="d-flex flex-column justift-content-start align-items-start fw-semibold gap-3">
            <div className="d-flex align-items-top justify-content-start gap-1">
              <QuestionCircleFill className="fs-5" />
              <div>
                <h4 style={{ cursor: "pointer" }} className="footerLink m-0">
                  Domande?
                </h4>
                <small style={{ color: "#62615F", fontSize: "10px" }}>Visita il nostro Centro assistenza</small>
              </div>
            </div>
            <div className="d-flex align-items-top justify-content-start gap-1">
              <GearFill className="fs-5" />
              <div>
                <h4 style={{ cursor: "pointer" }} className="footerLink m-0">
                  Gestisci il tuo account e la tua privacy
                </h4>
                <small style={{ color: "#62615F", fontSize: "10px" }}>Vai alle impostazioni</small>
              </div>
            </div>
            <div className="d-flex align-items-top justify-content-start gap-1">
              <ShieldShaded className="fs-5" />
              <div>
                <h4 style={{ cursor: "pointer" }} className="footerLink m-0">
                  Trasparenza sui contenuti consigliati
                </h4>
                <small style={{ color: "#62615F", fontSize: "10px" }}>Scopri di più sui contenuti consigliati</small>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <small style={{ color: "#62615F", fontSize: "10px" }}>Seleziona lingua</small>
            <Dropdown drop="up" className="language-dropdown">
              <Dropdown.Toggle id="dropdown-language" className="my-language-dropdown-toggle">
                {langSelect}
              </Dropdown.Toggle>
              <Dropdown.Menu className="my-language-dropdown-menu">
                <Dropdown.Item onClick={() => modStateLang("Italiano")}>Italiano</Dropdown.Item>
                <Dropdown.Item onClick={() => modStateLang("English")}>English</Dropdown.Item>
                <Dropdown.Item onClick={() => modStateLang("Español")}>Español</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
