import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SendFill } from "react-bootstrap-icons";

const FormPost = () => {
  const [inputText, setText] = useState("");

  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const key = import.meta.env.VITE_TOKEN_API;
  const fetchPost = async () => {
    const sendToApi = {
      text: inputText,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
        body: JSON.stringify(sendToApi),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'invio");
      } else {
        setText("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchPost();
  };
  return (
    <Form className="d-flex align-items-center" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group border border-dark rounded-pill bg-white d-flex align-items-center justify-content-between p-2 ">
        <input
          value={inputText}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="form-control rounded-pill border-0"
          placeholder="Cerca"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        {inputText && (
          <Button type="submit" variant="link" className="rounded-pill d-flex align-items-center">
            <SendFill className=" text-dark" />
          </Button>
        )}
      </div>
    </Form>
  );
};
export default FormPost;
