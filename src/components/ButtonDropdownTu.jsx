import { CaretDownFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const ButtonDropdownTu = ({ visibleButtonTu }) => {
  const profileState = useSelector((state) => state.profileSelect.content);

  return (
    <div
      style={{ cursor: "pointer", position: "relative" }}
      className="d-flex justify-content-center align-items-center flex-column  p-0 ms-4"
      onClick={visibleButtonTu}
    >
      <img src={profileState?.image} alt="immagine profilo" style={{ width: "20px", height: "20px", borderRadius: "50%" }} />
      <p style={{ fontSize: "11px", color: "grey" }} className="d-none d-xl-block m-0">
        Tu
        <CaretDownFill />
      </p>
    </div>
  );
};

export default ButtonDropdownTu;
