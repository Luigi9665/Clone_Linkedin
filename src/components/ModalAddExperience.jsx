import React, { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { XCircleFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addProfileAction, getEsperienzeAction } from "../redux/action";

const ModalAddExperience = ({ idForExperience, callSetModalExperience }) => {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const url = `https://striveschool-api.herokuapp.com/api/profile/${idForExperience}/experiences`;
  const key = import.meta.env.VITE_TOKEN_API;

  const dispatch = useDispatch();
  const { id } = useParams();

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
        method: "POST",
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
          dispatch(getEsperienzeAction(idForExperience));
        }, 2000);
      }
    } catch (err) {
      setMessage({ type: "danger", text: err.message });
    }
  };

  return (
    <div className="overlay">
      <Row className="modalModProfile justify-content-center">
        <Col md={8} lg={6}>
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="text-center">Aggiungi una nuova esperienza</h3>
            <XCircleFill style={{ cursor: "pointer", fontSize: "30px" }} className="text-danger" onClick={callSetModalExperience} />
          </div>
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
              <Button variant="primary" type="submit" className="w-50">
                Salva profilo
              </Button>
              <Button variant="danger" type="button" className="w-50" onClick={callSetModalExperience}>
                Annulla
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ModalAddExperience;
