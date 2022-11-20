import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Blog from "./Blog";

function Blogs() {
  const [blog, setBlog] = useState();
  const requsetBlog = async () => {
    const res = await axios
      .get("http://localhost:4000/api/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    requsetBlog().then((data) => setBlog(data.findBlog));
  }, []);
  console.log(blog);

  return (
    <>
      {blog &&
        blog.map((blog, index) => (
          <Blog
            id={blog._id}
            isUser={localStorage.getItem("user") === blog.user._id}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={blog.user.name}
          />
        ))}
    </>
  );
}

export default Blogs;
