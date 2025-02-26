import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PostsProvider } from "./context/PostsContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import PostDetail from "./pages/PostDetail";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <PostsProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </PostsProvider>
  );
}

export default App;