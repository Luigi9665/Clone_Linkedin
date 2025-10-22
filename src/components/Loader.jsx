import { Container } from "react-bootstrap";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <Container style={{ height: "100vh", marginTop: "70px" }} className="d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center ">
        <img src="https://boomi.com/wp-content/uploads/linkedin-logo-color.png" alt="logo Linkedin" style={{ width: "200px" }} />
        <BarLoader color="#2787e0" height={4} width={140} />
      </div>
    </Container>
  );
};

export default Loader;
