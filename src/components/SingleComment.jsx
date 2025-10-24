import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Pencil, TrashFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { getCommentsAction } from "../redux/action";
import CommentInput from "./CommentInput";

const SingleComment = ({ idPost, comment, allProfile }) => {
  const [viewModal, setModal] = useState(false);
  const [viewDelete, setDelete] = useState(false);
  const [profileSelect, setProfileSelect] = useState(null);

  const [message, setMessage] = useState(null);

  const myProfile = useSelector((state) => state.profileSelect.content);

  const hasMyPost = profileSelect?._id === myProfile?._id;

  const url = `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`;
  const key = import.meta.env.VITE_TOKEN_COMMENTS;

  const dispatch = useDispatch();

  const fetchDelete = async () => {
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
        setMessage({ type: "success", text: "Commento eliminato con successo!" });
        dispatch(getCommentsAction());
        setViewModal();
      }
    } catch (err) {
      setMessage({ type: "danger", text: err.message });
    }
  };

  const setViewModal = () => {
    setModal(!viewModal);
  };

  const setViewDelete = () => {
    setDelete(!viewDelete);
  };

  const hasProfile = () => {
    const profile = allProfile.find((p) => p.email === comment.author);
    setProfileSelect(profile);
  };

  useEffect(() => {
    hasProfile();
  }, []);

  return (
    <>
      {message ? (
        <Alert variant={message.type} onClose={() => setMessage(null)} dismissible>
          {message.text}
        </Alert>
      ) : profileSelect ? (
        <div className="divComment">
          <div className="d-flex align-items-center justify-content-start gap-3">
            {viewModal ? (
              <div className="flex-fill d-flex align-items-center gap-2">
                <CommentInput idPost={idPost} methodSelect="PUT" comment={comment} setViewModal={setViewModal} />
                <Button variant="danger" onClick={setViewModal}>
                  {" "}
                  Annulla{" "}
                </Button>
              </div>
            ) : (
              <>
                <Link to={`/profile/${profileSelect._id}`} className="text-decoration-none text-black">
                  <img
                    src={profileSelect.image ? profileSelect.image : "https://roland.promakim.com.tr/images/resimbulunamadi.jpg"}
                    alt="avatar author comment"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  />
                </Link>
                <div className="flex-fill d-flex align-items-top justify-content-between">
                  <Link to={`/profile/${profileSelect._id}`} className="text-decoration-none text-black">
                    <div>
                      <h4 className="fs-6 m-0 border-bottom">{profileSelect.username}</h4>
                      <p>{comment.comment}</p>
                    </div>
                  </Link>

                  <div className="d-flex align-items-baseline justify-content-xl-end">
                    {viewDelete ? (
                      <Button variant="danger" onClick={fetchDelete}>
                        Confermi?
                      </Button>
                    ) : (
                      hasMyPost && (
                        <>
                          <div style={{ cursor: "pointer" }} className="toAdd rounded-circle d-flex align-items-center p-2" onClick={setViewModal}>
                            <Pencil className="fs-5" />
                          </div>

                          <div style={{ cursor: "pointer" }} className="toAdd rounded-circle d-flex align-items-center p-2" onClick={setViewDelete}>
                            <TrashFill className="fs-5" />
                          </div>
                        </>
                      )
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="divComment">
          <p>{comment.comment}</p>
        </div>
      )}
    </>
  );
};

export default SingleComment;
