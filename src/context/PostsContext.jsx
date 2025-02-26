import { createContext, useState } from "react";

// Creiamo il Context
export const PostsContext = createContext();

// Creiamo il Provider
export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1", content: "Contenuto del post 1" },
    { id: 2, title: "Post 2", content: "Contenuto del post 2" },
    { id: 3, title: "Post 3", content: "Contenuto del post 3" },
  ]);

  return (
    <PostsContext.Provider value={{ posts }}>
      {children}
    </PostsContext.Provider>
  );
}
