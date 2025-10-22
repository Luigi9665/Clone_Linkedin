import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostAction } from "../redux/action";
import SinglePost from "./SinglePost";

const ListPostHome = () => {
  const [countView, setView] = useState(10);

  const dispatch = useDispatch();

  const listPost = useSelector((state) => state.posts.content);

  const quantityPost = listPost.slice(0, countView);

  useEffect(() => {
    dispatch(getPostAction());
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      setView(countView + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {quantityPost.map((post) => (
        <SinglePost key={post._id} post={post} />
      ))}
    </>
  );
};

export default ListPostHome;
