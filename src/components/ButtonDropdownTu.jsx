import { CaretDownFill } from "react-bootstrap-icons";

const ButtonDropdownTu = ({ visibleButtonTu }) => {
  return (
    <div
      style={{ cursor: "pointer", position: "relative" }}
      className="d-flex justify-content-center align-items-center flex-column  p-0 ms-4"
      onClick={visibleButtonTu}
    >
      <img
        src="https://static.vecteezy.com/system/resources/previews/051/270/245/non_2x/cartoon-people-avatar-minimalist-human-avatar-versatile-icon-for-online-projects-an-avatar-for-the-profile-picture-of-someone-vector.jpg"
        alt="immagine profilo"
        style={{ width: "35px", borderRadius: "50%" }}
      />
      <p style={{ fontSize: "11px", color: "grey" }} className="d-none d-xl-block m-0">
        Tu
        <CaretDownFill />
      </p>
    </div>
  );
};

export default ButtonDropdownTu;
