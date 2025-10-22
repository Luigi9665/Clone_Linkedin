import { Col, Row } from "react-bootstrap";
import { InfoSquareFill } from "react-bootstrap-icons";

const ColRightHomePage = () => {
  return (
    <Col className="mt-3">
      <div className=" rounded-2 bg-white    ">
        <div className="d-flex align-items-center justify-content-between p-3 m-0">
          <h2>LinkediIn Notizie</h2>
          <InfoSquareFill />
        </div>
        <h5 className="text-secondary px-3 ">Storie principali</h5>

        <div className="linkColRightHomePage px-3 m-0">
          <h6 className="fw-bold">Le Top Startups 2025 in Italia</h6>
          <p className="text-secondary">7 giorni fa • 4.288 lettori</p>
        </div>
        <div className="linkColRightHomePage px-3 m-0">
          <h6 className="fw-bold">Approvata la Manovra 2026</h6>
          <p className="text-secondary">4 giorni fa • 2.161 lettori</p>
        </div>
        <div className="linkColRightHomePage px-3 m-0">
          <h6 className="fw-bold">L'Oréal compra il beauty di Kering</h6>
          <p className="text-secondary">1 giorno fa • 903 lettori</p>
        </div>
        <div className="linkColRightHomePage px-3 m-0">
          <h6 className="fw-bold">Stellantis annuncia 400 assunzioni</h6>
          <p className="text-secondary">20 ore fa • 636 lettori</p>
        </div>
        <div className="linkColRightHomePage px-3 pb-2 m-0">
          <h6 className="fw-bold">Le Top Startups 2025 in Italia</h6>
          <p className="text-secondary">3 ore fa • 113 lettori</p>
        </div>
      </div>
      <div className="  rounded-2 bg-white mt-3 p-4 ">
        <div className="d-flex align-items-center gap-2">
          <button className=" border border-none rounded-2 " style={{ backgroundColor: "#FCE3BC", height: "33px" }}>
            <p style={{ color: "#5E4559" }} className="fw-semibold m-0">
              SUGGERIMENTO
            </p>
          </button>
          <a href="#" className="text-secondary fw-bold fs-5 m-0 text-decoration-none">
            Prova LinkedIn sull'app per Windows
          </a>
        </div>
      </div>
      <footer className="mt-3 ">
        <div>
          <div style={{ flexDirection: "column" }} className=" d-flex align-items-center gap-4 ">
            <div className="d-flex gap-2 ">
              <a className="linkFooterHomePage" href="#">
                Informazioni
              </a>

              <a className="linkFooterHomePage" href="#">
                Accessibilità
              </a>

              <a className="linkFooterHomePage" href="#">
                Centro assistenza
              </a>
            </div>
            <div className="d-flex gap-3 ">
              <a className="linkFooterHomePage" href="#">
                Privacy e condizioni
              </a>

              <a className="linkFooterHomePage" href="#">
                Pubblicità
              </a>

              <a className="linkFooterHomePage" href="#">
                Scarica l'app LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="d-flex align-items-center justify-content-center ">
            <img
              style={{ height: "18px", width: "73px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1200px-LinkedIn_2021.svg.png"
              alt=""
            />
            <p className="m-0">LinkedIn Corporation © 2025</p>
          </div>
        </div>
      </footer>
    </Col>
  );
};
export default ColRightHomePage;
