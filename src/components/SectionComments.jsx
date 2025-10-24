import SingleComment from "./SingleComment";
import { DotLoader } from "react-spinners";
import { useSelector } from "react-redux";

const SectionComments = ({ comments }) => {
  const allProfile = useSelector((state) => state.profileSelect.allProfile);

  if (comments.length === 0) {
    return "";
  }

  return (
    <>
      {allProfile ? (
        <div className="border-bottom p-0">
          {comments.map((comment) => (
            <SingleComment key={comment._id} comment={comment} allProfile={allProfile} />
          ))}
        </div>
      ) : (
        <div>
          <DotLoader />
        </div>
      )}
    </>
  );
};

export default SectionComments;
