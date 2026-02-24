import { validateQuestion } from "@/utils/validateQuestion";
import { useState } from "react";

export const useAskQuestion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [answer, setAnswer] = useState("");

  const ask = async (question: string) => {
    setError("");
    setAnswer("");

    const validationError = validateQuestion(question);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://unlock-task.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong");
        return;
      }

      const data = await res.json();
      setAnswer(data.answer);
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return { ask, loading, error, answer };
};
