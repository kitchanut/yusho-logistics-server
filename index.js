const express = require("express");
const app = express();
const port = 3000;

const usersRouter = require("./routes/users");
const postRouter = require("./routes/post");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRouter);
app.use(postRouter);
