import { getRandomAnswer } from "../utils/randomAnswer.js";

const questionController = {
  askQuestion: (req, res) => {
    const { question } = req.body;

    if (!question || typeof question !== "string" || !question.trim()) {
      return res.status(400).json({ error: "No question provided" });
    }

    const answer = getRandomAnswer();
    res.json({ answer });
  },
};

export default questionController;
