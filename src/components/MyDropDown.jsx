import { Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router";

const MyDropDown = () => {
  return (
    // <NavDropdown id="navbarScrollingDropdown" className="nav-linkMod" show={hasDrop}>
    <div className="nav-linkMod positionTuButton py-2">
      <div className="d-flex align-items-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/051/270/245/non_2x/cartoon-people-avatar-minimalist-human-avatar-versatile-icon-for-online-projects-an-avatar-for-the-profile-picture-of-someone-vector.jpg"
          alt="immagine profilo"
          style={{ width: "55px", borderRadius: "50%" }}
        />
        <div style={{ paddingInline: "10px" }}>
          <p style={{ inlineSize: "max-content", fontSize: "14px", fontWeight: "500" }} className="m-0">
            Luigi Ventriglia
          </p>
          <p style={{ inlineSize: "max-content", fontSize: "14px" }} className="m-0">
            Web Developer
          </p>
        </div>
      </div>
      <div className="d-flex gap-2 px-2 mt-2">
        <Link to="/profile/me">
          <Button className="rounded-5 px-4" style={{ lineHeight: "15px" }} size="sm" variant="outline-primary">
            Visualizza
            <br />
            Profilo
          </Button>
        </Link>
        <Button className="rounded-5 px-4" style={{ lineHeight: "15px" }} size="sm" variant="primary">
          Verifica
        </Button>
      </div>
      <div style={{ borderBottom: "1px solid #ebe4e4", marginBlock: "5px" }}></div>
      <div className="d-flex flex-column justify-content-start px-3">
        <h5>Account</h5>
        <div>
          <div></div>
          <a href="#" className="text-muted fw-bold fs-6 linkDropo">
            Prova un mese di Premium per 0 EUR
          </a>
        </div>
        <a href="#" className="text-muted fs-6 linkDropo">
          Impostazione e privacy
        </a>
        <a href="#" className="text-muted fs-6 linkDropo">
          Guida
        </a>
        <a href="#" className="text-muted fs-6 linkDropo">
          Lingua
        </a>
      </div>
      <div style={{ borderBottom: "1px solid #ebe4e4", marginBlock: "5px" }}></div>
      <div className="d-flex flex-column justify-content-start px-3">
        <h5>Gestisci</h5>

        <a href="#" className="text-muted fs-6 linkDropo">
          Post e attività
        </a>

        <a href="#" className="text-muted fs-6 linkDropo">
          Account per la pubblicazione di of...
        </a>
      </div>
      <div style={{ borderBottom: "1px solid #ebe4e4", marginBlock: "5px" }}></div>
      <div className="px-3">
        <a href="#" className="text-muted fs-6 linkDropo">
          Esci
        </a>
      </div>
    </div>
    // </NavDropdown>
  );
};

export default MyDropDown;
