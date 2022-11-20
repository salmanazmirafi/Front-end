import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BlogsDetlass() {
  const [blog, setBlog] = useState();
  const id = useParams().id;
  console.log(id);
  const faceUser = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/blog/${id}`)
      .catch((err) => console.error(err));
    const data = res.data;
    return data;
  };

  useEffect(() => {
    faceUser().then((data) => setBlog(data.Id));
  }, [id]);
  console.log(blog);

  return <div>BlogsDetlass</div>;
}

export default BlogsDetlass;
