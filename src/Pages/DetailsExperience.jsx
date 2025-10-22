import { useState } from "react";
import { Container } from "react-bootstrap";
import { Pencil, PlusLg } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import ModalAddExperience from "../components/ModalAddExperience";

const DetailsExperience = () => {
  const [viewModalExperience, setModalExperience] = useState(false);
  const [idExp, setIdExp] = useState("");

  const profileSelect = useSelector((state) => state.profileSelect.content);
  const allExperience = useSelector((state) => state.profileSelect.esperienze);

  const setModal = () => {
    setIdExp("");
    setModalExperience(!viewModalExperience);
  };
  const setModalMod = (id) => {
    setIdExp(id);
    setModalExperience(!viewModalExperience);
  };

  const callModalAddExperience = () => {
    return <ModalAddExperience idProfile={profileSelect._id} callSetModalExperience={setModal} idExperience={idExp} />;
  };
  // const callModalModExperience = (idExp) => {
  //   return <ModalAddExperience idProfile={profileSelect._id} callSetModalExperience={setModal} idExperience={idExp}/>;
  // };

  // FUNZIONE PER FORMATTARE LA DATA
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date)) return "";
    return date.toLocaleDateString("it-IT");
  };

  function getDateDifference(startDate, endDate) {
    const start = new Date(startDate);

    const end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    return { years, months };
  }

  return (
    <Container style={{ marginBlock: "2rem 10rem" }}>
      {viewModalExperience && callModalAddExperience()}
      <div className=" bg-white mt-2 rounded p-3 border shadow">
        <div className={`${allExperience.length > 0 ? "" : "bordoTratteggiato rounded p-2"}`}>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="fs-4 pt-3">Esperienza</h2>

            <div className="d-flex align-items-center gap3">
              <div style={{ cursor: "pointer" }} className="toAdd rounded-circle p-2" onClick={setModal}>
                <PlusLg className="fs-3" />
              </div>
            </div>
          </div>

          {allExperience.map((esperienza) => (
            <div key={esperienza._id} style={{ borderBottom: "1px solid grey" }} className="d-flex align-items-top gap-2 mb-3">
              <img className="me-2" style={{ width: "25px", height: "25px" }} src={esperienza?.image} alt="badge lavoro " />
              <div className="d-flex flex-column flex-fill ">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="fw-semibold fs-5 m-0">{esperienza.role}</h4>
                  <div style={{ cursor: "pointer" }} className="toAdd rounded-circle p-2" onClick={() => setModalMod(esperienza._id)}>
                    <Pencil className="fs-3" />
                  </div>
                </div>
                <p style={{ fontSize: "13px" }} className="m-0">
                  {esperienza.company}
                </p>
                <p style={{ fontSize: "13px" }} className="m-0 mb-3">
                  {`Inizio: ${formatDate(esperienza.startDate)}   Fine: ${formatDate(esperienza.endDate)} -  ${
                    getDateDifference(esperienza.startDate, esperienza.endDate).years
                  } anni e ${getDateDifference(esperienza.startDate, esperienza.endDate).months} mesi`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DetailsExperience;
