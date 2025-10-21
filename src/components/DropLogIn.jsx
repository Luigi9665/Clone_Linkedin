import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch } from "react-redux";
import { addProfileAction, loginAction } from "../redux/action";
import { useState } from "react";
import { addListener } from "@reduxjs/toolkit";

const DropLogIn = ({ handleLogin }) => {
  const [inputV, setInputV] = useState("");
  const dispatch = useDispatch();

  // Funzione per gestire il cambiamento dell'input
  const handleInputChange = (e) => {
    setInputV(e.target.value);
  };

  // Funzione per gestire l'invio del modulo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputV.trim()) {
      dispatch(loginAction(inputV));
      dispatch(addProfileAction("me"));
      setInputV(""); // Pulisce l'input dopo l'invio
    }
    handleLogin();
  };

  return (
    <div className="dropLogin">
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Inserisci il tuo username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={inputV}
            onChange={handleInputChange}
          />
          <Button variant="outline-secondary" id="button-addon2" type="submit">
            Log in
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default DropLogIn;
