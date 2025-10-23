import { useEffect, useState } from "react";
import Stepper, { Step } from "../Stepper/Stepper";
import { XCircleFill } from "react-bootstrap-icons";
import { getPostAction } from "../redux/action";
import { useDispatch } from "react-redux";
import { Alert, Container } from "react-bootstrap";

const ModalForPost = ({ idPost, setViewModal }) => {
  const [post, setPost] = useState({
    text: "",
  });

  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const url = `https://striveschool-api.herokuapp.com/api/posts/${idPost}`;
  const key = import.meta.env.VITE_TOKEN_API;

  const getModPost = async () => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'invio");
      } else {
        setMessage({ type: "success", text: "Post modificata con successo!" });
        setPost({
          text: "",
        });
        dispatch(getPostAction());
        setTimeout(() => {
          setViewModal();
        }, 1500);
      }
    } catch (err) {
      setMessage({ type: "danger", text: err.message });
    }
  };

  const getSinglePost = async () => {
    try {
      let response = await fetch(url, {
        headers: {
          "Content-type": "application/json",
          Authorization: key,
        },
      });
      if (response.ok) {
        const singlePost = await response.json();
        setPost({
          text: singlePost.text,
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
    getSinglePost();
  }, []);

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
        onFinalStepCompleted={getModPost}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        <Step>
          <h2>Continua per modificare il Post!</h2>
          <p>Check out the next step!</p>
        </Step>
        <Step>
          <h2>Inserisci il nuovo testo del post:</h2>
          <input
            value={post.text}
            onChange={(e) => setPost({ ...post, text: e.target.value })}
            placeholder="Nuovo testo"
            className="form-control rounded-pill border-0"
          />
        </Step>
        <Step>
          <h2>Vuoi salvare il nuovo post?</h2>
          <p>Clicca su salva!</p>
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

export default ModalForPost;
