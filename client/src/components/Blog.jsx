import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import "../App.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Blog({ title, description, imageURL, userName, isUser, id }) {
  const naveigat = useNavigate();
  const handleEdit = () => {
    naveigat(`/my-blog/${id}`);
  };
  const serverReq = async () => {
    const res = await axios
      .delete(`http://localhost:4000/api/blog/${id}`)
      .catch((err) => console.error(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    serverReq()
      .then(() => naveigat("/"))
      .then(() => naveigat("/blogs"));
  };

  console.log(title, isUser);
  return (
    <div>
      {" "}
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <EditIcon color="warning" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon color="error" />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {userName ? userName.charAt(0) : ""}
            </Avatar>
          }
          title={title}
        />
        <CardMedia
          className="Img"
          component="img"
          image={imageURL}
          alt="Paella dish"
        />

        <CardContent>
          <hr />
          <br />
          <Typography>
            <b>{userName}</b>
            <br />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Blog;
