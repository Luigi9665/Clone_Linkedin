import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsAction, getPostAction } from "../redux/action";
import SinglePost from "./SinglePost";

const ListPostHome = () => {
  const [countView, setView] = useState(10);

  const dispatch = useDispatch();

  const listPost = useSelector((state) => state.posts.content);

  const quantityPost = listPost.slice(0, countView);

  useEffect(() => {
    dispatch(getPostAction());
    dispatch(getCommentsAction());
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (countView >= listPost.length) return;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setView((prev) => {
          const next = prev + 10;
          return next > listPost.length ? listPost.length : next;
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [listPost.length, countView]);

  return (
    <>
      {quantityPost.map((post) => (
        <SinglePost key={post._id} post={post} />
      ))}
    </>
  );
};

export default ListPostHome;
