import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 50)}...</p>
      <Link to={`/posts/${post.id}`}>Leggi di più</Link>
    </div>
  );
}

export default PostCard;
