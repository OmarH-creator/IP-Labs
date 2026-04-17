const express = require("express");
const app = express();

app.use(express.json());

const posts = [];
let nextPostId = 1;
let nextCommentId = 1;




// home route
app.get("/", (req, res) => {
  res.send("Mini Twitter API is running");
});

// Read all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// Create a post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "title and content are required",
    });
  }

  const newPost = {
    id: nextPostId++,
    title,
    content,
    comments: [],
  };



  posts.push(newPost);
  res.status(201).json(newPost);
});

// Edit a post
app.put("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  const { title, content } = req.body;

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: "post not found" });
  }

  if (title) post.title = title;
  if (content) post.content = content;



  res.json(post);
});

// Delete a post
app.delete("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ message: "post not found" });
  }


  posts.splice(postIndex, 1);
  res.json({ message: "post deleted successfully" });
});

// Add a comment to a post
app.post("/posts/:id/comments", (req, res) => {
  const postId = Number(req.params.id);
  const { text } = req.body;

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: "post not found" });
  }

  if (!text) {
    return res.status(400).json({ message: "comment text is required" });
  }

  const newComment = {
    id: nextCommentId++,
    text,
  };



  post.comments.push(newComment);
  res.status(201).json(newComment);
});

// Read comments of a post
app.get("/posts/:id/comments", (req, res) => {
  const postId = Number(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: "post not found" });
  }

  res.json(post.comments);
});

// Read a single post by ID
app.get('/posts/:id', (req, res) => {
  const postId = Number(req.params.id);

  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: 'post not found' });
  }

  res.json(post);
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


