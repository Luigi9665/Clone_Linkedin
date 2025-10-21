import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import {
  Arrow90degRight,
  ArrowRight,
  BarChartFill,
  BarChartLineFill,
  BookmarkFill,
  Check,
  Check2,
  Download,
  EyeFill,
  InfoSquareFill,
  Newspaper,
  PeopleFill,
  ShieldCheck,
} from "react-bootstrap-icons";
import imgProfile from "../assets/imgSection2Profile.svg";

const RowCol1 = () => {
  return (
    <Container className="mt-3 ">
      <Row>
        <Col>
          {/* inizio  prima sezione */}
          <div>
            <div className="top-card-background-hero-image ">
              <img
                className="copertina"
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt="copertina"
              />
            </div>

            <div className="bg-white px-3">
              {/* inizio  immagine profilo */}

              <div className="profile">
                <div className="bg-white">
                  <button className="rounded-circle border border-none bg-white ">
                    <img
                      className="rounded-circle "
                      style={{ width: "100px", objectFit: "cover" }}
                      src="https://img.icons8.com/?size=1200&id=23461&format=jpg"
                      alt="img profilo"
                    />
                  </button>
                </div>
              </div>

              {/* fine immagine profilo */}
              <div className="bg-white">
                <Row className="px-2  ">
                  <Col>
                    <h1 className="fs-3">Salvatore Di Cesare</h1>
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
              </div>
              {/* inizio bottoni  */}
              <div className=" align-items-top d-flex pb-3 bg-white rounded-bottom-2  ">
                <Button className=" rounded-pill mx-1  " variant="primary">
                  Disponibile per
                </Button>
                <button className=" button-trasparenteBlu rounded-pill mx-1">Aggiungi sezione del profilo</button>
                <button className=" button-trasparenteBlu rounded-pill mx-1 ">Migliora profilo</button>
                {/* <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      <button className="button-trasparenteNero rounded-pill ">risorse</button>
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
                  </Dropdown> */}
              </div>
              {/* fine bottoni */}
            </div>
          </div>
          {/* fine prima sezione */}
          {/* inizio seconda sezione */}
          <div className="bg-white mt-2 rounded pb-3">
            <Container>
              <div className="mx-2">
                <h2 className="fs-4 pt-3">Consigliato per te </h2>
                <div className="d-flex align-items-center gap-2">
                  <EyeFill />
                  <p className="m-0">solo per te </p>
                </div>
              </div>
              <div className="border border-1 p-3 rounded mx-2 ">
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
          {/* fine seconda sezione */}
          {/* inizio terza sezione */}
          <div className=" bg-white mt-2 rounded pb-3 px-3">
            <h2 className="fs-4 pt-3">Analisi </h2>
            <div className="d-flex align-items-center gap-2">
              <EyeFill />
              <p className="m-0">solo per te </p>
            </div>
            <div>
              <Row>
                <Col xs={12} md={4}>
                  <Row>
                    <Col className="pe-0" xs={1}>
                      <PeopleFill />
                    </Col>
                    <Col className="ps-0" xs={6}>
                      <p className="fw-semibold m-0">0 visualizzazioni del profilo</p>
                      <p>Aggiorna il tuo profilo per attrarre visitatori.</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={4}>
                  <Row>
                    <Col xs={1}>
                      <BarChartLineFill />
                    </Col>
                    <Col className="ps-0" xs={6}>
                      <p className="fw-semibold m-0 ">0 impressioni del post</p>
                      <p className="m-0">Crea un post per aumentare l'interesse</p>
                      <p>Ultimi 7 giorni </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className="text-center border-top border-1 pt-2">
              <a href="#" className="text-decoration-none text-black fw-semibold">
                Mostra tutte le analisi <ArrowRight />
              </a>
            </div>
          </div>
          {/* fine terza sezione */}
          {/* inizio 4 sezione */}
          <div className=" bg-white mt-2 rounded pb-3 px-3">
            <h2 className="fs-4 pt-3">Esperienza</h2>
            <div className="d-flex align-items-center">
              <img
                className="me-2"
                style={{ width: "25px", height: "25px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/877px-McDonald%27s_Golden_Arches.svg.png"
                alt="badge lavoro "
              />
              <div className="d-flex flex-column ">
                <div className="fw-semibold">Operaio</div>
                <div>MC DONALD</div>
              </div>
            </div>
          </div>
          {/* fine 4 sezione */}
          {/* inizio 5 sezione */}
          <div className=" bg-white mt-2 rounded p-3">
            <div className="bordoTratteggiato rounded p-2  ">
              <h2 className="fs-4 pt-3">Formazione</h2>
              <p>Mostrando le tue qualifiche avrai fino a 2 volte più probabilità di ricevere un messaggio inMail da un recruiter</p>
              <div>
                <div className="d-flex align-items-center text-secondary gap-2">
                  <img
                    className="border border-1 rounded"
                    style={{ width: "65px" }}
                    src="https://media.istockphoto.com/id/1418456572/it/vettoriale/icona-lineare-delledificio-scolastico-contorno-nero-ispirazione-per-il-ritorno-a-scuola.jpg?s=612x612&w=0&k=20&c=znIAf7pcgHSepsEFJTQn57HQKjqqwVwqdXvl7viYU9E="
                    alt=""
                  />
                  <div className="d-flex flex-column ">
                    <div className="fw-semibold">Scuola o università</div>
                    <div>Laurea,campo di studi </div>
                    <div>2019-2023</div>
                  </div>
                </div>
              </div>
              <button className=" button-trasparenteBlu rounded-pill mx-1">Aggiungi titolo di studio</button>
            </div>
          </div>
          {/*fine 5 sezione */}
          {/* inizio 6 sezione */}
          <div className=" bg-white mt-2 rounded p-3">
            <div className="bordoTratteggiato rounded p-2  ">
              <h2 className="fs-4 pt-3">Competenze</h2>
              <p>
                Fai capire se hai un profilo adatto per le nuove opportunità: il 50% dei recruiter usa i dati sulle competenze per coprire le posizioni aperte
              </p>
              <p className="text-secondary">Soft skill</p>
              <hr className="text-secondary" />
              <p className="text-secondary">Competenze tecniche</p>
              <button className=" button-trasparenteBlu rounded-pill mx-1">Aggiungi competenze</button>
            </div>
          </div>
          {/* fine 6 sezione */}
          {/* inizio 7 sezione */}
          <div className=" bg-white mt-2 rounded pb-3 px-3">
            <h2 className="fs-4 pt-3">Interessi</h2>

            <button className="button-trasparenteVerde  fw-bold">Aziende</button>
            <hr className="mt-0" />
            <div className="d-flex">
              <img
                className="me-2"
                style={{ width: "45px", height: "45px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/877px-McDonald%27s_Golden_Arches.svg.png"
                alt="badge lavoro "
              />
              <div className="d-flex flex-column ">
                <div className="fw-semibold">
                  {" "}
                  <a className="text-decoration-none text-black" href="#">
                    McDonald's
                  </a>
                </div>
                <div>2.300.117 follower</div>
                <button className="button-trasparenteNero rounded-pill fw-bold">
                  <Check2 className="fs-3" style={{}} />
                  Segui già{" "}
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default RowCol1;
