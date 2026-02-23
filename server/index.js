import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/ask", (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "No question provided" });
  }

  const answers = ["Yes", "No", "Maybe", "I don't know", "Ask again later"];
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

  res.json({ answer: randomAnswer });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
