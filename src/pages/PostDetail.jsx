import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../context/PostsContext";

const PostDetail = () => {
  const { posts } = useContext(PostsContext);
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>Post non trovato</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;