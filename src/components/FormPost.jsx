import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SendFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { getPostAction } from "../redux/action";

const FormPost = () => {
  const [inputText, setText] = useState("");

  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const key = import.meta.env.VITE_TOKEN_API;
  const dispatch = useDispatch();

  //   const getImage = async (e) => {
  //   const newUrl = ` https://striveschool-api.herokuapp.com/api/profile/${id}/picture`;
  //   const fileInput = e.target.elements.imageProfile;
  //   if (fileInput && fileInput.files.length > 0) {
  //     const formDataImage = new FormData();
  //     formDataImage.append("profile", fileInput.files[0]);

  //     const uploadImage = await fetch(newUrl, {
  //       method: "POST",
  //       headers: {
  //         Authorization: key,
  //       },
  //       body: formDataImage,
  //     });

  //     if (!uploadImage.ok) {
  //       throw new Error("Errore durante il caricamento dell'immagine.");
  //     }
  //   }
  // };

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
        dispatch(getPostAction());
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
          placeholder="Scrivi un nuovo post..."
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
