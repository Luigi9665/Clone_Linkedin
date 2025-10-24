import { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { SendPlusFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { getCommentsAction } from "../redux/action";

const CommentInput = ({ idPost, methodSelect, comment, setViewModal }) => {
  const [text, setText] = useState("");

  const [message, setMessage] = useState(null);

  const url = comment ? `https://striveschool-api.herokuapp.com/api/comments/${comment._id}` : `https://striveschool-api.herokuapp.com/api/comments/`;
  const key = import.meta.env.VITE_TOKEN_COMMENTS;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const dispatch = useDispatch();

  const fetchPost = async () => {
    const sendToApi = {
      comment: text,
      rate: "5",
      elementId: idPost,
    };
    try {
      const response = await fetch(url, {
        method: methodSelect,
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
        body: JSON.stringify(sendToApi),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'invio");
      } else {
        setMessage({ type: "success", text: methodSelect === "POST" ? "Commento inviato con successo!" : "Commento modificato con successo!" });
        setText("");
        dispatch(getCommentsAction());
      }
    } catch (err) {
      setMessage({ type: "danger", text: err.message });
    } finally {
      setTimeout(() => {
        if (setViewModal) {
          setViewModal();
        }
        setMessage(null);
      }, 500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed === "") return;
    fetchPost();
  };

  useEffect(() => {
    if (comment) {
      setText(comment.comment);
    }
  }, []);

  return (
    <>
      {message ? (
        <Alert className="flex-fill" variant={message.type} onClose={() => setMessage(null)} dismissible>
          {message.text}
        </Alert>
      ) : (
        <Form className="flex-fill d-flex align-items-center my-2" onSubmit={handleSubmit}>
          <div className="input-group border border-dark rounded-1 bg-white d-flex align-items-center justify-content-between p-2 ">
            <input value={text} onChange={handleChange} type="text" className="inputComment flex-fill border-0" placeholder="Scrivi un nuovo post..." />
            {text && (
              <Button type="submit" variant="link" className="d-flex align-items-center">
                <SendPlusFill className=" text-dark" />
              </Button>
            )}
          </div>
        </Form>
      )}
    </>
  );
};

export default CommentInput;
