import { Col, Container, Row } from "react-bootstrap";
import { BookmarkFill, Calendar2Event, Newspaper, PeopleFill, PersonFillAdd } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const ColLeftHomePage = () => {
  const profileSelect = useSelector((state) => state.profileSelect.content);
  return (
    <Col className="mt-3 position-sticky">
      <div className="top-card-background-hero-image ">
        <img
          className="copertina"
          style={{ width: "100%", height: "100px", objectFit: "cover" }}
          src={
            profileSelect
              ? "https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              : "https://roland.promakim.com.tr/images/resimbulunamadi.jpg"
          }
          alt="copertina"
        />
      </div>

      <div className="bg-white px-3">
        {/* inizio  immagine profilo */}

        <div className="profile d-flex justify-content-between align-items-end">
          <div className="">
            <button className="rounded-circle border border-none bg-white p-1">
              <img
                className="rounded-circle "
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
                src={profileSelect ? profileSelect.image : "https://roland.promakim.com.tr/images/resimbulunamadi.jpg"}
                alt="img profilo"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-bottom-2">
        <Container>
          <Row className="px-2  ">
            <Col>
              <div className="d-flex flex-column flex-lg-row ">
                <h1 className="fs-3 me-2">{profileSelect ? `${profileSelect.name} ${profileSelect.surname}` : "Non disponibile!"}</h1>
              </div>

              <p>{profileSelect ? `${profileSelect.title}` : "Non disponibile!"}</p>
              <p className="text-truncate" style={{ color: "#666666" }}>
                {profileSelect ? `${profileSelect.area}` : "Non disponibile!"}{" "}
                <a className="text-decoration-none fw-semibold" href="#">
                  {" "}
                  Informazioni di contatto{" "}
                </a>
              </p>
            </Col>
            <Col className="p-0">
              <div className="d-flex justify-content-end gap-2 mt-1">
                <p className="fw-semibold ">{profileSelect ? `${profileSelect.bio}` : "Non disponibile!"}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-white rounded-2 mt-3 p-3">
        <div>
          <a className="linkLeftHome text-black fw-semibold" href="#">
            Visualizza tutte le analisi
          </a>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <a className=" linkLeftHome  text-black " href="#">
              <span className="fw-semibold"> Collegamenti</span> <br />
              <span className="text-secondary fw-semibold"> Espandi la tua rete</span>{" "}
            </a>
          </div>
          <div>
            <PersonFillAdd />
          </div>
        </div>
      </div>
      {/* inizio  terza sezione  */}
      <div className="bg-white rounded-2 mt-3 p-3">
        <div>
          <a className=" text-black text-decoration-none text-secondary " href="#">
            Accedi a strumenti e informazioni in <br /> esclusiva
          </a>
        </div>
        <div className="d-flex ">
          <div>
            <a className=" text-black text-decoration-none fw-semibold" href="#">
              {" "}
              Prova Premium per 0 EUR
            </a>
          </div>
        </div>
      </div>
      {/* fine terza sezione */}
      <div className="bg-white rounded-2 mt-3 p-3">
        <div className="d-flex  gap-2 align-items-center ">
          <BookmarkFill className="cursor-pointer" />
          <a className="text-black linkLeftHome" href="#">
            Elementi salvati{" "}
          </a>{" "}
        </div>
        <div className="d-flex  gap-2 align-items-center">
          <PeopleFill className="cursor-pointer" />{" "}
          <a className="text-black linkLeftHome" href="#">
            Gruppi
          </a>{" "}
        </div>
        <div className="d-flex  gap-2 align-items-center">
          <Newspaper className="cursor-pointer" />
          <a className="text-black linkLeftHome" href="#">
            Newsletter
          </a>{" "}
        </div>
        <div className="d-flex  gap-2 align-items-center">
          <Calendar2Event className="cursor-pointer" />
          <a className="text-black linkLeftHome" href="#">
            Eventi
          </a>{" "}
        </div>
      </div>
    </Col>
  );
};
export default ColLeftHomePage;
