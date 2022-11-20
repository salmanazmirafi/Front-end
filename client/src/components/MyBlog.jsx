import { useState, useEffect } from "react";
import axios from "axios";
import Blog from "./Blog";

function MyBlog() {
  const [user, setuser] = useState();
  const id = localStorage.getItem("user");

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setuser(data.user.blogs));
  });
  console.log(user);
  return (
    <div>
      {user &&
        user.map((blog, index) => (
          <Blog
            key={index}
            isUser={true}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={blog.user.name}
          />
        ))}
    </div>
  );
}

export default MyBlog;
