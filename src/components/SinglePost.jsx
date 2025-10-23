import { Col, Row } from "react-bootstrap";
import {
  ArrowRepeat,
  ChatText,
  Dot,
  GlobeEuropeAfrica,
  HandThumbsUp,
  HandThumbsUpFill,
  Pencil,
  SendArrowUpFill,
  ThreeDots,
  TrashFill,
  XLg,
} from "react-bootstrap-icons";
import { timeSince } from "../scriptDate/script";
import { useSelector } from "react-redux";
import { useState } from "react";
import ModalForPost from "./ModalForPost";
import ModalDeletePost from "./ModalDeletePost";
import { Link } from "react-router";

const SinglePost = ({ post }) => {
  const [viewModal, setModal] = useState(false);

  const [viewDelete, setDelete] = useState(false);

  const getRandomNumberOver = () => {
    return Math.floor(Math.random() * 10001);
  };

  const getRandomNumberUnder = () => {
    return Math.floor(Math.random() * 1001);
  };
  const profileSelect = useSelector((state) => state.profileSelect.content);

  const image = post.user.image;
  const title = post.user.name + " " + post.user.surname;
  const username = post.user.username;
  const text = post.text;
  const dateToCreate = timeSince(post.createdAt);
  const like = getRandomNumberOver();
  const repost = getRandomNumberUnder();
  const hasMyPost = post.user._id === profileSelect?._id;

  const setViewModal = () => {
    setModal(!viewModal);
  };
  const setViewDelete = () => {
    setDelete(!viewDelete);
  };

  const hasModal = () => {
    return <ModalForPost idPost={post._id} setViewModal={setViewModal} />;
  };
  const hasModalDelete = () => {
    return <ModalDeletePost idPost={post._id} setViewModal={setViewDelete} />;
  };

  return (
    <Row className="bg-white rounded-2 mt-3 p-3 ">
      {viewModal && hasModal()}
      {viewDelete && hasModalDelete()}
      <Col xs={12} className="d-flex align-items-start">
        <Col as={Link} to={`/profile/${post.user._id}`} xs={1} className="me-5 me-xl-3">
          <img className="rounded-circle" style={{ width: "60px", height: "60px", objectFit: "cover" }} src={image} alt="img profilo" />
        </Col>
        <Col xs={8}>
          <h5 className="m-0">{title}</h5>
          <p className="text-secondary m-0">{username}</p>
          <p className="text-secondary m-0">
            {dateToCreate} <Dot /> <GlobeEuropeAfrica />
          </p>
        </Col>

        <Col xs={3} className="d-flex align-items-baseline justify-content-xl-end">
          {hasMyPost ? (
            <div style={{ cursor: "pointer" }} className="toAdd rounded-circle d-flex align-items-center p-2" onClick={setViewModal}>
              <Pencil className="fs-5" />
            </div>
          ) : (
            <div style={{ cursor: "pointer" }} className="toAdd rounded-circle d-flex align-items-center p-2">
              <ThreeDots className="fs-5" />
            </div>
          )}
          {hasMyPost ? (
            <div style={{ cursor: "pointer" }} className="toAdd rounded-circle d-flex align-items-center p-2" onClick={setViewDelete}>
              <TrashFill className="fs-5" />
            </div>
          ) : (
            <div style={{ cursor: "pointer" }} className="toAdd rounded-circle d-flex align-items-center p-2">
              <XLg className="fs-5" />
            </div>
          )}
        </Col>
      </Col>
      {/* <div>
        <p> Un’accoglienza speciale per un giorno indimenticabile </p>
      </div> */}
      <div className="mt-3">
        <p>{text}</p>
      </div>
      <div className="border-bottom d-flex justify-content-between align-items-center">
        <div>
          <p className="fs-6 d-flex align-items-center text-secondary">
            <HandThumbsUpFill className="text-primary fs-6 me-2" /> {like}
          </p>
        </div>
        <div>
          <p className="text-secondary ">{repost} diffusioni di post</p>
        </div>
      </div>
      {/* button */}
      <div className="d-flex justify-content-around">
        <div>
          <button className="mt-3 bg-white  d-flex align-items-center" style={{ border: "none" }}>
            <HandThumbsUp className="fs-4 me-2" />
            <span className=" fw-semibold text-secondary"> Consiglia</span>
          </button>
        </div>
        <div>
          <button className="mt-3  bg-white  d-flex align-items-center" style={{ border: "none" }}>
            <ChatText className="fs-4 me-2" /> <span className=" fw-semibold text-secondary"> Commenta</span>
          </button>
        </div>
        <div>
          <button className="mt-3  bg-white  d-flex align-items-center " style={{ border: "none" }}>
            <ArrowRepeat className="fs-4 me-2" /> <span className=" fw-semibold text-secondary ">Diffondi il post</span>
          </button>
        </div>
        <div>
          <button className="mt-3  bg-white  d-flex align-items-center " style={{ border: "none" }}>
            <SendArrowUpFill className="fs-4 me-2" /> <span className=" fw-semibold text-secondary ">Invia</span>
          </button>
        </div>
      </div>
    </Row>
  );
};

export default SinglePost;
