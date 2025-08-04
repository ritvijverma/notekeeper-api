const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");

const app = express();
connectToDB();

app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  console.log(title, content);

  await noteModel.create({
    title,
    content,
  });
  res.json({
    message: "note created successfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.json({
    message: "notes fetched successfully",
    notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  await noteModel.findOneAndDelete({
    _id: noteId,
  });
  res.json({
    meassage: "note deleted successfully",
    noteId,
  });
});

app.patch("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  const { title } = req.body;

  await noteModel.findOneAndUpdate(
    {
      _id: noteId,
    },
    {
      title: title,
    });
   res.json({
          meassage: "note updated successfully",

  })
 
});

connectToDB();
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
