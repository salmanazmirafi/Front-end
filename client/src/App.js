import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import MyBlog from "./components/MyBlog";
import BlogsDetlass from "./components/BlogsDetlass";
import AddBlog from "./components/AddBlog";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/my-blog" element={<MyBlog />} />
          <Route path="/my-blog/:id" element={<BlogsDetlass />} />
          <Route path="/blog/add" element={<AddBlog />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
