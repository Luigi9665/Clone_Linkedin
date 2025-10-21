import { CaretDownFill, Grid3x3GapFill } from "react-bootstrap-icons";

const ButtonDropDownAziende = ({ visibleModalAziende }) => {
  return (
    <div style={{ cursor: "pointer" }} className="d-flex justify-content-center align-items-center flex-column notActive mx-3" onClick={visibleModalAziende}>
      <Grid3x3GapFill className="fs-5" />
      <p style={{ fontSize: "11px", inlineSize: "max-content" }} className="d-none d-xl-block m-0">
        Per le aziende
        <CaretDownFill />
      </p>
    </div>
  );
};

export default ButtonDropDownAziende;
