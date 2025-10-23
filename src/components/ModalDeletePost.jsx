import { useState } from "react";
import Stepper, { Step } from "../Stepper/Stepper";
import { XCircleFill } from "react-bootstrap-icons";
import { getPostAction } from "../redux/action";
import { useDispatch } from "react-redux";
import { Alert, Container } from "react-bootstrap";

const ModalDeletePost = ({ idPost, setViewModal }) => {
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const url = `https://striveschool-api.herokuapp.com/api/posts/${idPost}`;
  const key = import.meta.env.VITE_TOKEN_API;

  const getDeletePost = async () => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
      });

      if (!response.ok) {
        throw new Error("Errore durante l'invio");
      } else {
        setMessage({ type: "success", text: "Post eliminato con successo!" });

        setTimeout(() => {
          setViewModal();
          dispatch(getPostAction());
        }, 1500);
      }
    } catch (err) {
      setMessage({ type: "danger", text: err.message });
    }
  };

  return (
    <div className="overlay">
      <XCircleFill
        style={{
          cursor: "pointer",
          fontSize: "30px",
          position: "absolute",
          top: "35%",
          left: "65%",
          transform: "translate(-50%, -50%)",
          background: "white",
          borderRadius: "50%",
        }}
        className="text-danger"
        onClick={setViewModal}
      />

      <Stepper
        initialStep={1}
        onStepChange={(step) => {
          console.log(step);
        }}
        onFinalStepCompleted={getDeletePost}
        // backButtonText="Previous"
        nextButtonText="Elimina"
      >
        <Step>
          <h2>Vuoi eliminare il post?</h2>
        </Step>

        {message && (
          <Container>
            <Alert variant={message.type} onClose={() => setMessage(null)} dismissible>
              {message.text}
            </Alert>
          </Container>
        )}
      </Stepper>
    </div>
  );
};

export default ModalDeletePost;
