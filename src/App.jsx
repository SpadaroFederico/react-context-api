import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PostsProvider } from "./context/PostsContext"; // Importiamo il Provider
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import PostsPage from "./pages/PostsPage";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <PostsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="posts/:id" element={<PostDetail />} />
          </Route>
        </Routes>
      </Router>
    </PostsProvider>
  );
}

export default App;
