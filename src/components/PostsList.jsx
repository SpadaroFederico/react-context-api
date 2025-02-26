import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import PostCard from "./PostCard";

function PostsList() {
    
  // Recuperiamo i post dal Context
  const { posts } = useContext(PostsContext); 

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsList;
