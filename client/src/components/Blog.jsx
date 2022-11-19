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

function Blog({ title, description, imageURL, userName }) {
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
        <Box display="flex">
          <IconButton sx={{ marginLeft: "auto" }}></IconButton>
          <IconButton>{/* <DeleteForeverIcon color="error" /> */}</IconButton>
        </Box>

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {userName}
            </Avatar>
          }
          title={title}
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt="Paella dish"
        />

        <CardContent>
          <hr />
          <br />
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Blog;
