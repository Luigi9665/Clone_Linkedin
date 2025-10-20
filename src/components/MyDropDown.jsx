import { Button, NavDropdown } from "react-bootstrap";

const MyDropDown = ({ hasDrop }) => {
  return (
    <NavDropdown id="navbarScrollingDropdown" className="nav-linkMod " show={hasDrop}>
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
      <div className="d-flex gap-2 px-2 mt-1">
        <Button className="rounded-5 px-4" style={{ lineHeight: "15px" }} size="sm" variant="outline-primary">
          Visualizza Profilo
        </Button>
        <Button className="rounded-5 px-4" style={{ lineHeight: "15px" }} size="sm" variant="primary">
          Verifica
        </Button>
      </div>
      <NavDropdown.Divider />
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
      <NavDropdown.Divider />
      <div className="d-flex flex-column justify-content-start px-3">
        <h5>Gestisci</h5>

        <a href="#" className="text-muted fs-6 linkDropo">
          Post e attività
        </a>

        <a href="#" className="text-muted fs-6 linkDropo">
          Account per la pubblicazione di of...
        </a>
      </div>
      <NavDropdown.Divider />
      <div className="px-3">
        <a href="#" className="text-muted fs-6 linkDropo">
          Esci
        </a>
      </div>
    </NavDropdown>
  );
};

export default MyDropDown;
