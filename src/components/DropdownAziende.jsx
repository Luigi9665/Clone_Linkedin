import { Col, Container, NavDropdown, Row } from "react-bootstrap";
import { CompassFill, PeopleFill, GraphUp, Trello, PatchCheckFill, Bullseye, PlayBtnFill, Plus } from "react-bootstrap-icons";

const DropdownAziende = () => {
  return (
    <div className="dropAziende text-dark">
      <Container className="p-5">
        <Row sm={1} lg={2}>
          <Col>
            <div className="d-flex flex-column gap-2 mb-4">
              <h3>Le mie app</h3>
              <div className="d-flex align-items-center gap-2 mb-4">
                <CompassFill className="text-primary fs-3" />
                <p className="text-fark fw-semibold m-0">Vendi</p>
              </div>
              <div className="d-flex align-items-center gap-2 mb-4">
                <PeopleFill className="text-primary fs-3" />
                <p className="text-fark fw-semibold m-0">Vendi</p>
              </div>
            </div>
            <div className="d-flex flex-column gap-2 mb-4">
              <h4 className="text-muted">Talent</h4>
              <div className="d-flex align-items-center gap-2 mb-4">
                <GraphUp className="text-primary fs-3" />
                <p className="text-fark fw-semibold m-0">Talent Insights</p>
              </div>
              <div className="d-flex align-items-center gap-2 mb-4">
                <Trello className="text-primary fs-3" />
                <p className="text-fark fw-semibold m-0">Pubblica un'offerta di lavoro</p>
              </div>
            </div>
            <div className="d-flex flex-column gap-2 mb-4">
              <h4 className="text-muted">Vendite</h4>
              <div className="d-flex align-items-center gap-2">
                <PatchCheckFill className="text-primary fs-3" />
                <p className="text-fark fw-semibold m-0">Marketplace dei servizi</p>
              </div>
            </div>
            <div className="d-flex flex-column gap-2 mb-4">
              <h4 className="text-muted">Marketing</h4>
              <div className="d-flex align-items-center gap-2 mb-4">
                <Bullseye className="text-primary fs-3" />
                <p className="text-fark fw-semibold m-0">Publicizza</p>
              </div>
            </div>
            <div className="d-flex flex-column gap-2 mb-4">
              <h4 className="text-muted">Learning</h4>

              <div className="d-flex align-items-center gap-2 mb-4">
                <PlayBtnFill className="text-primary fs-3" />
                <p className="text-fark fw-semibold m-0">Learning</p>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h3 className="fs-5 mb-5">Scopri altro per il business</h3>
              <div className="mb-4">
                <h4 className="fs-6 m-0">Assumi su LinkedIn</h4>
                <p className="text-muted">Prova, attrai e assumi</p>
              </div>
              <div className="mb-4">
                <h4 className="fs-6 m-0">Vendi con LinkedIn</h4>
                <p className="text-muted">Sblocca nuove opportunità di vendita</p>
              </div>
              <div className="mb-4">
                <h4 className="fs-6 m-0">Offerta di lavoro gratuita</h4>
                <p className="text-muted">Ottieni rapidamente candidati qualificati</p>
              </div>
              <div className="mb-4">
                <h4 className="fs-6 m-0">Fai pubblicità su LinkedIn</h4>
                <p className="text-muted">Acquisisci clienti e fai crescere la tua azienda</p>
              </div>
              <div className="mb-4">
                <h4 className="fs-6 m-0">Inizia con Premium</h4>
                <p className="text-muted">Amplia e sfrutta la tua rete</p>
              </div>
              <div className="mb-4">
                <h4 className="fs-6 m-0">Impara con LinkedIn</h4>
                <p className="text-muted">Corsi per formare i tuoi dipendenti</p>
              </div>
              <div className="mb-4">
                <h4 className="fs-6 m-0">Centro per amministratori</h4>
                <p className="text-muted">Gestisci i dettagli di fatturazione e account</p>
              </div>
              <div className="d-flex align-items-center gap-2 mb-4">
                <h4 className="fs-6 m-0">Crea una pagina aziendale</h4>
                <Plus
                  style={{ cursor: "pointer" }}
                  className="fs-4"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.70)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DropdownAziende;
