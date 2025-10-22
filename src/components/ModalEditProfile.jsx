import { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { XCircleFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addProfileAction } from "../redux/action";

const ModalEditProfile = ({ callSetModalProfile }) => {
  const myProfile = useSelector((state) => state.profileSelect.content);
  const [formData, setFormData] = useState({
    name: myProfile.name,
    surname: myProfile.surname,
    email: myProfile.email,
    username: myProfile.username,
    title: myProfile.title,
    bio: myProfile.bio,
    area: myProfile.area,
  });

  const url = "https://striveschool-api.herokuapp.com/api/profile/";
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
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'invio");
      } else {
        setMessage({ type: "success", text: "Profilo aggiornato con successo!" });
        setFormData({
          name: "",
          surname: "",
          email: "",
          username: "",
          title: "",
          bio: "",
          area: "",
        });
        setTimeout(() => {
          callSetModalProfile();
          dispatch(addProfileAction(id));
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
            <h3 className="text-center">Aggiorna il tuo profilo</h3>
            <XCircleFill style={{ cursor: "pointer", fontSize: "30px" }} className="text-danger" onClick={callSetModalProfile} />
          </div>
          {message && (
            <Alert variant={message.type} onClose={() => setMessage(null)} dismissible>
              {message.text}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Inserisci il tuo nome" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cognome</Form.Label>
              <Form.Control type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Inserisci il tuo cognome" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Inserisci la tua email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Scegli un username" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Titolo professionale</Form.Label>
              <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Es. Frontend Developer" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Scrivi una breve descrizione di te..."
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Area</Form.Label>
              <Form.Control type="text" name="area" value={formData.area} onChange={handleChange} placeholder="Es. Milano, Italia" />
            </Form.Group>

            <div className="d-flex align-items-center justify-content-center gap-3">
              <Button variant="primary" type="submit" className="w-50">
                Salva profilo
              </Button>
              <Button variant="danger" type="button" className="w-50" onClick={callSetModalProfile}>
                Annulla
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ModalEditProfile;
