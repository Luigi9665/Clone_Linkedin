import { useEffect, useState } from "react";
import { Link } from "react-router";
import { DotLoader } from "react-spinners";

const SingleComment = ({ comment, allProfile }) => {
  const [profileSelect, setProfileSelect] = useState(null);

  const hasProfile = () => {
    const profile = allProfile.find((p) => p.email === comment.author);
    setProfileSelect(profile);
  };

  useEffect(() => {
    hasProfile();
  }, []);

  return (
    <>
      {profileSelect ? (
        <div className="divComment">
          <Link to={`/profile/${profileSelect._id}`} className="text-decoration-none text-black">
            <div className="d-flex align-items-center justify-content-start gap-3">
              <img
                src={profileSelect.image ? profileSelect.image : "https://roland.promakim.com.tr/images/resimbulunamadi.jpg"}
                alt="avatar author comment"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <div>
                <h4 className="fs-6 m-0 border-bottom">{profileSelect.username}</h4>
                <p>{comment.comment}</p>
              </div>
            </div>
          </Link>
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
