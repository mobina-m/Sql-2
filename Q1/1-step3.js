const express = require("express");
const app = express();
const { User, Post } = require("./0-step2");
const { where } = require("sequelize");
app.post("/users", async (req, res) => {
  const user = await User.creat(req.body);
  res.json(user);
});
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});
app.put("/users/:id", async (req, res) => {
  const user = await User.update(req.body);
  res.json(user);
});
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const isExistBook = await Book.findByPk(id);

    if (!isExistBook) {
      return res.status(404).json({ message: "not found!" });
    }

    await isExistBook.destroy();
    res.status(204).end();
  } catch (error) {
    console.log("error in deleteuser controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const port = process.env.PORT | 7000;
app.listen(port, () => {
  console.log(`server is RUNNING on PORT : ${port}`);
});
