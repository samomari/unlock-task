import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";
import { Card, CardContent } from "@/components/ui/card";
import { Spinner } from "./components/ui/spinner";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setError("");
    setAnswer("");

    if (!question.trim() || question.length < 2) {
      setError("Please enter a valid question");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong");
        return;
      }

      const data = await res.json();
      setAnswer(data.answer);
    } catch (error) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Ask your question
      </h1>
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col gap-3">
        <Field orientation="horizontal">
          <Input
            className="bg-white"
            placeholder="Type your question..."
            value={question}
            disabled={loading}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAsk();
            }}
          />
          <Button onClick={handleAsk} disabled={loading}>
            Send
          </Button>
        </Field>
        {loading && (
          <div className="flex flex-col items-center">
            <Spinner className="size-6" />
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {answer && (
          <Card>
            <CardContent className="text-sm">{answer}</CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
