import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { Arrow90degRight, BookmarkFill, Download, EyeFill, InfoSquareFill, Newspaper, ShieldCheck } from "react-bootstrap-icons";
import imgProfile from "../assets/imgSection2Profile.svg";

const RowCol1 = () => {
  return (
    <Container className="mt-3 ">
      <Row>
        <Col>
          {/* inizio  prima sezione */}
          <div className="rounded ">
            <div className="top-card-background-hero-image ">
              <img
                style={{ width: "200px", objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt="copertina"
              />
            </div>
            <Container>
              <div>
                {/* inizio  immagine profilo */}
                <div className="rounded-circle">
                  <div className="profile ">
                    <button>
                      <img
                        style={{ width: "100px" }}
                        src="https://img.freepik.com/vettori-premium/illustrazione-piatta-vettoriale-in-scala-di-grigio-avatar-profilo-utente-icona-persona-immagine-di-profilo-a-silhouette-neutra-di-genere-adatto-per-profili-di-social-media-icone-screensaver-e-come-modellox9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="img profilo"
                      />
                    </button>
                  </div>
                </div>
                {/* fine immagine profilo */}
                <Row className="bg-white">
                  <Col className="p-0 mx-4">
                    <h1>Salvatore Di Cesare</h1>
                    <div className="d-flex align-items-center verifica rounded-pill px-2 text-center ">
                      <ShieldCheck />
                      <a className="text-decoration-none fw-semibold" href="#">
                        {" "}
                        Aggiungi badge di verifica
                      </a>
                    </div>

                    <p>Operaio presso BLABLA</p>
                    <p style={{ color: "#666666" }}>
                      Napoli,Campania,Italia{" "}
                      <a className="text-decoration-none fw-semibold" href="#">
                        {" "}
                        Informazioni di contatto{" "}
                      </a>
                    </p>
                  </Col>
                  <Col className="p-0">
                    <div className="d-flex gap-2 mt-1">
                      <img
                        style={{ width: "25px", height: "25px" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/877px-McDonald%27s_Golden_Arches.svg.png"
                        alt="badge lavoro "
                      />
                      <p className="fw-semibold ">McDonald's</p>
                    </div>
                  </Col>
                </Row>
                {/* inizio bottoni  */}
                <div className=" align-items-top d-flex pb-3 bg-white  ">
                  <Button className=" rounded-pill mx-1  " variant="primary">
                    Disponibile per
                  </Button>
                  <button className=" button-trasparenteBlu rounded-pill mx-1">Aggiungi sezione del profilo</button>
                  <button className=" button-trasparenteBlu rounded-pill mx-1 ">Migliora profilo</button>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      <button className=" button-trasparenteNero rounded-pill ">risorse</button>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {" "}
                        <Arrow90degRight className="me-2" /> Invia il profilo in un messaggio
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        {" "}
                        <Download className="me-2" /> Salva come PDF
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        {" "}
                        <BookmarkFill className="me-2" />
                        Elementi salvati
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        {" "}
                        <Newspaper className="me-2" />
                        Attività
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        {" "}
                        <InfoSquareFill className="me-2" /> Informazioni
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                {/* fine bottoni */}
              </div>
            </Container>
          </div>
          {/* fine prima sezione */}
          {/* inizio seconda sezione */}
          <div className="bg-white mt-2 rounded">
            <Container>
              <div>
                <h2>Consigliato per te </h2>
                <div className="d-flex align-items-center gap-2">
                  <EyeFill />
                  <p className="m-0">solo per te </p>
                </div>
              </div>
              <div className="border border-1 p-3 rounded">
                <div>
                  <div className="d-flex align-items-center">
                    <img src={imgProfile} alt="immagine profilo" />
                    <p className="fw-semibold">Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa </p>
                  </div>
                  <p>Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo </p>
                  <button className="button-trasparenteNero rounded-pill"> Aggiungi un riepilogo </button>
                </div>
              </div>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default RowCol1;
