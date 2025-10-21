import { Button, Col, Container, Row } from "react-bootstrap";
import { EyeFill, PatchCheck, Pencil, PersonFillAdd } from "react-bootstrap-icons";

const PageDx = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            {/* HEADER DX */}
            <Row className="bg-white rounded  border border-secondary  ">
              <Col xs={12} className="mt-3 d-flex flex-column ">
                <h5 className="d-flex justify-content-between ">
                  Lingua del profilo <Pencil className="fs-3" />
                </h5>
                <p className="text-secondary"> Italiano</p>
                <p className=" border-bottom border-secondary"></p>
              </Col>
              <Col xs={12} className="mt-3">
                <h5 className="d-flex justify-content-between">
                  Profilo pubblico e URL
                  <Pencil className="fs-3" />
                </h5>
                <p className="text-secondary ">www.linkedin.com/in/rebecca-matarozzo-7ba1a219b</p>
              </Col>
            </Row>
            {/* ALTRI PROFILI CPNSULTATI DX */}
            <Row className="bg-white rounded mt-3  border border-secondary ">
              <Col xs={12} className="mt-3">
                <h5>Altri profili consultati </h5>
                <p className="text-secondary d-flex align-items-center">
                  <EyeFill className="fs-4 me-2" /> Solo per te
                </p>
              </Col>
              <Col className="d-flex align-items-baseline border-bottom">
                <Col xs={4}>
                  <img
                    className="rounded-circle"
                    style={{ width: "100%" }}
                    src="data:image/png;base64,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"
                    alt="immagine utente"
                  />
                </Col>
                <Col xs={8}>
                  <h5 className="text-truncate">Venditore al dettaglio presso </h5>
                  <Button variant="outline-dark" className="mb-4 rounded-pill">
                    Visualizza
                  </Button>
                </Col>
              </Col>

              {/* 2 */}
              <Col className="d-flex align-items-baseline mb-3 border-bottom">
                <Col xs={4}>
                  <img
                    className="rounded-circle"
                    style={{ width: "100%" }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX////a2tqysrLY2Njc3Nyvr6/s7Oyzs7Pp6en19fXh4eG7u7v8/PzT09Pt7e26urrCwsLKysrPz8/BwcFz5YAwAAAFlElEQVR4nO2d65KiQAxGBzotNxGR93/XBdRxVC5fVDrt1nd+bW3VTnEm6fQtsD8/hBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQsh/yL445HlZSk8iUpZ5fij21g/1MYq8FOdc8oBzUuaF9cO9zX5X9m69nTwKykWz3H1xLPc7eYrcBE6+VLIoEb2LZPl96XqAwvc3kAfrR1ZxSHR+o2Oys35smMNTWUH5jjgWL/sNuRr/eNzn+vy8I7c2WKFQFphHJPYwvhvAERdvGPdvBvBXUSJdARQf0TsTZaYeplafr9GPxggVd5/J0Csuuun/IzXmTjGyevNxwdgUNxCMS/HDY/CMRDQWiy0EB1wkK/HNBJNIJo39Zn4DMaxuPjTLzyDWemMZ3dLRvqBuOAgvitZDcdscHTDO03xzQeNd/+Y5OmCap9vn6IBhnn5yz7uA4dJGGUK5ofyHVoK6BbdI3R67pqmqY1vrJM2CqNI7Van36Zn+D9VJ5WgjeIBDKEmbjXZZ+ovPWtzRKIjg80kiberTZwZH+HdkIYjOhZI0U36jY4OuaU3mxBIUrOf8RmpQsQwvuMdCKKdFwdSfEEVJXPiN4s4BjyZrgrCiwZkNlF0rKXpWxBI1eK2BklSSVb8BRDB8mu6g33sFGVZIEIOnKVJJ1wfhJU+hoRi6mkJJmq3bjWRQEMMKItO9tFgI+yAii5vAkz5yegGHME0bJIhhTzOAYYjMFL9BrAHDsAMReCA5woJpekSCGFIQOclXJClWa4LOiNC+Ak/SPk2BTUbQUgNsftHJ8GIITIlBt8FAKcXnitEQmS9CFlPE8KgxhEpNSENkstCU0tQjhiGnCxvDkBso5HFUhlCWRmeoqjSxGa4/zRa1NLIYJoplKbgwjcxQRGUIHUfFZZhIozCEtk/RGSoGIjQMgxpC591OYQgdL0dnCJ60DWCnbSHXNFgLBlxNoUoa3co7UdQaqM6ENTxglxbgSMRGYdj9IXZ3KFg5xQpp4D0+erUms5ej+hwN3IkJX0+vH0dl6I8Ke/sEXgAn4lYUfQb3O4Q9L8U79ly2lKgKwcCvmOIteyLVvKKvFB0ngZsVFO1QcxU1G6oo3jYU+ooUHYijYjIZRl8hs+rtp4QV1Pa01Z2/l/S+QxtNLoRuiwJnxJujO1WZv5J2p0TZoBi+3UTbPDv0XLq67TnVTt+AadD39dK7Ti91l44Y9NNo0/RNDHqiVNX0XcSiry1Mn/4Vm379MI36Z2w6vfEe4bexavQOJmjV5/1SEC+ThTLDzV6XVTzneR50rq5r5xLtrGgliB1IjXbudKyycTk6LtrSrDq2DvW0fB1Y1tOtt2sr7583F/3fVaPl+m/ITnBtTuwfvz5mE3Y3y+xYrznavmO5eJoh0jYLelfLZmUfbPye7PyzycyLJBOOi6/PWL/rPJunsN/omM46mr8HPPNJDKkXj9im4jjd92X/Lvdknop0Or/RsZOJ0myxp3jkuRNTHcBrGCdObmL4psLTUNT1mdw5Pt7R2A/CM8XdZxVeydBfxe6u4MQi+HBm0/hU0x38wN/39eL5Ps2fgordpy1F8XbXFkMZvXFVfFfwj2JcgmdFWbyFgRWHxgyJTvA8FpV9wXOKQ59iTGPwSr9ZVDWvLyi2Ek8V/UuhaIJaIkt9HaVgr/iBUTjgm0gFez6Spr621lhi99KK9M4vi7DG3PFmGH1rLbDO4Y1J31eRfGVvhVKxu7/zS2PYDWIk3nvd8rufInwcm0GUZOkQcSp+md3B9qvkj+0XC3q+i24VClE44Li012viXKNhFMnkif7Nzndxftlawz6vu+xyIXMVO9/QZJ3Lv6q4LFHsyro9Vk020Axf+/of/hcdQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIWSCfxQmT8w7TC4IAAAAAElFTkSuQmCC"
                    alt="immagine utente"
                  />
                </Col>
                <Col xs={8}>
                  <h5 className="text-truncate">Venditore al dettaglio presso </h5>
                  <Button variant="outline-dark" className="mb-4 rounded-pill">
                    Visualizza
                  </Button>
                </Col>
              </Col>
              {/* 3 */}
              <Col className="d-flex align-items-center mb-3 border-bottom">
                <Col xs={4}>
                  <img
                    className="rounded-circle"
                    style={{ width: "100%" }}
                    src="data:image/png;base64,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"
                    alt="immagine utente"
                  />
                </Col>
                <Col xs={8}>
                  <h5 className="text-truncate">Venditore al dettaglio presso </h5>
                  <Button variant="outline-dark" className="mb-4 rounded-pill">
                    Visualizza
                  </Button>
                </Col>
              </Col>
              {/* 4 */}
              <Col className="d-flex align-items-baseline mb-3 border-bottom">
                <Col xs={4}>
                  <img
                    className="rounded-circle"
                    style={{ width: "100%" }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX////a2tqysrLY2Njc3Nyvr6/s7Oyzs7Pp6en19fXh4eG7u7v8/PzT09Pt7e26urrCwsLKysrPz8/BwcFz5YAwAAAFlElEQVR4nO2d65KiQAxGBzotNxGR93/XBdRxVC5fVDrt1nd+bW3VTnEm6fQtsD8/hBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQsh/yL445HlZSk8iUpZ5fij21g/1MYq8FOdc8oBzUuaF9cO9zX5X9m69nTwKykWz3H1xLPc7eYrcBE6+VLIoEb2LZPl96XqAwvc3kAfrR1ZxSHR+o2Oys35smMNTWUH5jjgWL/sNuRr/eNzn+vy8I7c2WKFQFphHJPYwvhvAERdvGPdvBvBXUSJdARQf0TsTZaYeplafr9GPxggVd5/J0Csuuun/IzXmTjGyevNxwdgUNxCMS/HDY/CMRDQWiy0EB1wkK/HNBJNIJo39Zn4DMaxuPjTLzyDWemMZ3dLRvqBuOAgvitZDcdscHTDO03xzQeNd/+Y5OmCap9vn6IBhnn5yz7uA4dJGGUK5ofyHVoK6BbdI3R67pqmqY1vrJM2CqNI7Van36Zn+D9VJ5WgjeIBDKEmbjXZZ+ovPWtzRKIjg80kiberTZwZH+HdkIYjOhZI0U36jY4OuaU3mxBIUrOf8RmpQsQwvuMdCKKdFwdSfEEVJXPiN4s4BjyZrgrCiwZkNlF0rKXpWxBI1eK2BklSSVb8BRDB8mu6g33sFGVZIEIOnKVJJ1wfhJU+hoRi6mkJJmq3bjWRQEMMKItO9tFgI+yAii5vAkz5yegGHME0bJIhhTzOAYYjMFL9BrAHDsAMReCA5woJpekSCGFIQOclXJClWa4LOiNC+Ak/SPk2BTUbQUgNsftHJ8GIITIlBt8FAKcXnitEQmS9CFlPE8KgxhEpNSENkstCU0tQjhiGnCxvDkBso5HFUhlCWRmeoqjSxGa4/zRa1NLIYJoplKbgwjcxQRGUIHUfFZZhIozCEtk/RGSoGIjQMgxpC591OYQgdL0dnCJ60DWCnbSHXNFgLBlxNoUoa3co7UdQaqM6ENTxglxbgSMRGYdj9IXZ3KFg5xQpp4D0+erUms5ej+hwN3IkJX0+vH0dl6I8Ke/sEXgAn4lYUfQb3O4Q9L8U79ly2lKgKwcCvmOIteyLVvKKvFB0ngZsVFO1QcxU1G6oo3jYU+ooUHYijYjIZRl8hs+rtp4QV1Pa01Z2/l/S+QxtNLoRuiwJnxJujO1WZv5J2p0TZoBi+3UTbPDv0XLq67TnVTt+AadD39dK7Ti91l44Y9NNo0/RNDHqiVNX0XcSiry1Mn/4Vm379MI36Z2w6vfEe4bexavQOJmjV5/1SEC+ThTLDzV6XVTzneR50rq5r5xLtrGgliB1IjXbudKyycTk6LtrSrDq2DvW0fB1Y1tOtt2sr7583F/3fVaPl+m/ITnBtTuwfvz5mE3Y3y+xYrznavmO5eJoh0jYLelfLZmUfbPye7PyzycyLJBOOi6/PWL/rPJunsN/omM46mr8HPPNJDKkXj9im4jjd92X/Lvdknop0Or/RsZOJ0myxp3jkuRNTHcBrGCdObmL4psLTUNT1mdw5Pt7R2A/CM8XdZxVeydBfxe6u4MQi+HBm0/hU0x38wN/39eL5Ps2fgordpy1F8XbXFkMZvXFVfFfwj2JcgmdFWbyFgRWHxgyJTvA8FpV9wXOKQ59iTGPwSr9ZVDWvLyi2Ek8V/UuhaIJaIkt9HaVgr/iBUTjgm0gFez6Spr621lhi99KK9M4vi7DG3PFmGH1rLbDO4Y1J31eRfGVvhVKxu7/zS2PYDWIk3nvd8rufInwcm0GUZOkQcSp+md3B9qvkj+0XC3q+i24VClE44Li012viXKNhFMnkif7Nzndxftlawz6vu+xyIXMVO9/QZJ3Lv6q4LFHsyro9Vk020Axf+/of/hcdQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIWSCfxQmT8w7TC4IAAAAAElFTkSuQmCC"
                    alt="immagine utente"
                  />
                </Col>
                <Col xs={8}>
                  <h5 className="text-truncate">Venditore al dettaglio presso </h5>
                  <Button variant="outline-dark" className="mb-4 rounded-pill">
                    Visualizza
                  </Button>
                </Col>
              </Col>
              {/* 5 */}
              <Col className="d-flex align-items-baseline mb-3 ">
                <Col xs={4}>
                  <img
                    className="rounded-circle"
                    style={{ width: "100%" }}
                    src="data:image/png;base64,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"
                    alt="immagine utente"
                  />
                </Col>
                <Col xs={8}>
                  <h5 className="text-truncate">Venditore al dettaglio presso </h5>
                  <Button variant="outline-dark" className=" rounded-pill">
                    Visualizza
                  </Button>
                </Col>
              </Col>
            </Row>

            {/* Persone che potresti conoscere */}
            <Row className="bg-white rounded mt-3  border border-secondary ">
              <Col xs={12} className="mt-3">
                <h5>Persone che potresti conoscere </h5>
                <p className="text-secondary d-flex align-items-center">Dal tuo settore</p>
              </Col>
              <Col xs={12} className="d-flex align-items-baseline border-bottom">
                <Col xs={4}>
                  <img
                    className="rounded-circle"
                    style={{ width: "100%" }}
                    src="data:image/png;base64,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"
                    alt="immagine utente"
                  />
                </Col>

                <Col xs={8}>
                  <h5 className="text-truncate fs-5">
                    <a href="#" className="text-decoration-none text-black">
                      Mario Rossi <PatchCheck />
                    </a>
                  </h5>
                  <p>
                    <a href="#" className="text-decoration-none text-secondary">
                      Presidente presso Torino
                    </a>
                  </p>
                  <Button variant="outline-dark" className=" buttonDx mb-4 rounded-pill d-flex align-items-center text-secondary fs-6 fw-semibold">
                    <PersonFillAdd className="fs-5 me-2" /> Collegati
                  </Button>
                </Col>
              </Col>
              {/* 2 */}
              <Col xs={12} className="d-flex align-items-baseline border-bottom">
                <Col xs={4}>
                  <img
                    className="rounded-circle"
                    style={{ width: "100%" }}
                    src="data:image/png;base64,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"
                    alt="immagine utente"
                  />
                </Col>

                <Col xs={8}>
                  <h5 className="text-truncate fs-5">
                    <a href="#" className="text-decoration-none text-black">
                      Mario Rossi <PatchCheck />
                    </a>
                  </h5>
                  <p>
                    <a href="#" className="text-decoration-none text-secondary">
                      Presidente presso Torino
                    </a>
                  </p>
                  <Button variant="outline-dark" className=" buttonDx mb-4 rounded-pill d-flex align-items-center text-secondary fs-6 fw-semibold">
                    <PersonFillAdd className="fs-5 me-2" /> Collegati
                  </Button>
                </Col>
              </Col>
              {/* 3 */}
              <Col xs={12} className="d-flex align-items-baseline ">
                <Col xs={4}>
                  <img
                    className="rounded-circle"
                    style={{ width: "100%" }}
                    src="data:image/png;base64,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"
                    alt="immagine utente"
                  />
                </Col>

                <Col xs={8}>
                  <h5 className="text-truncate fs-5">
                    <a href="#" className="text-decoration-none text-black">
                      Mario Rossi <PatchCheck />
                    </a>
                  </h5>
                  <p>
                    <a href="#" className="text-decoration-none text-secondary">
                      Presidente presso Torino
                    </a>
                  </p>
                  <Button variant="outline-dark" className=" buttonDx rounded-pill d-flex align-items-center text-secondary fs-6 fw-semibold">
                    <PersonFillAdd className="fs-5 me-2" /> Collegati
                  </Button>
                </Col>
              </Col>
              <Button variant="outline-secondary" className="mt-3 fs-5 fw-semibold border border-0 border-top">
                Mostra tutto
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default PageDx;
