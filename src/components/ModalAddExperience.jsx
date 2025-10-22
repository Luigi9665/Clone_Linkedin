import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { XCircleFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router";
import { getEsperienzeAction } from "../redux/action";

const ModalAddExperience = ({ idProfile, callSetModalExperience, idExperience }) => {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const url = idExperience
    ? `https://striveschool-api.herokuapp.com/api/profile/${idProfile}/experiences/${idExperience}`
    : `https://striveschool-api.herokuapp.com/api/profile/${idProfile}/experiences`;

  const method = idExperience ? "PUT" : "POST";

  const key = import.meta.env.VITE_TOKEN_API;

  const dispatch = useDispatch();
  // const { id } = useParams();

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'invio");
      } else {
        setMessage({ type: "success", text: "Esperienza aggiunta con successo!" });
        setFormData({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
        setTimeout(() => {
          callSetModalExperience();
          dispatch(getEsperienzeAction(idProfile));
        }, 2000);
      }
    } catch (err) {
      setMessage({ type: "danger", text: err.message });
    }
  };

  const getSingleExperience = async () => {
    try {
      let response = await fetch(url, {
        headers: {
          "Content-type": "application/json",
          Authorization: key,
        },
      });
      if (response.ok) {
        const singleEsperienza = await response.json();
        setFormData({
          role: singleEsperienza.role,
          company: singleEsperienza.company,
          startDate: singleEsperienza.startDate.split("T")[0],
          endDate: singleEsperienza.endDate.split("T")[0],
          description: singleEsperienza.description,
          area: singleEsperienza.area,
        });
      } else if (response.status === 401 || response.status === 403) {
        throw new Error("Autorizzazione fallita, controlla la tua API key.");
      } else if (response.status === 404) {
        throw new Error("Risorsa non trovata (404). Riprova con la ricerca.");
      } else if (response.status >= 500) {
        throw new Error("Errore del server, riprova più tardi.");
      } else {
        throw new Error("Errore nella richiesta: " + response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idExperience) {
      getSingleExperience();
    }
  }, []);

  return (
    <div className="overlay">
      <Row className="modalModProfile justify-content-center">
        <Col md={8} lg={6}>
          <h3 className="text-center">Aggiungi una nuova esperienza</h3>
          <XCircleFill
            style={{ cursor: "pointer", fontSize: "30px", position: "absolute", top: "5px", right: "5px" }}
            className="text-danger"
            onClick={callSetModalExperience}
          />
          {message && (
            <Alert variant={message.type} onClose={() => setMessage(null)} dismissible>
              {message.text}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Inserisci il tuo ruolo" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Compagnia</Form.Label>
              <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Inserisci la tua compagnia" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Data inizio</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                placeholder="Inserisci la data di inizio "
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Data fine</Form.Label>
              <Form.Control type="date" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="Inserisci la data di fine" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control type="text" name="description" value={formData.description} onChange={handleChange} placeholder="aggiungi una descrizione" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Area</Form.Label>
              <Form.Control type="text" name="area" value={formData.area} onChange={handleChange} placeholder="aggiungi una descrizione" />
            </Form.Group>

            <div className="d-flex align-items-center justify-content-center gap-3">
              <Button variant={`${idExperience ? "warning" : "primary"}`} type="submit" className="w-50">
                {idExperience ? "Modifica Esperienza" : "Salva Esperienza"}
              </Button>
              {idExperience ? (
                <Button variant="danger" type="button" className="w-50" onClick={callSetModalExperience}>
                  Elimina Esperienza
                </Button>
              ) : (
                <Button variant="danger" type="button" className="w-50" onClick={callSetModalExperience}>
                  Annulla
                </Button>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ModalAddExperience;
