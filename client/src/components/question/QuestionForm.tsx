import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";

type QuestionFormProps = {
  onSubmit: (question: string) => void;
  loading: boolean;
};

export const QuestionForm = ({ onSubmit, loading }: QuestionFormProps) => {
  const [question, setQuestion] = useState("");

  return (
    <Field orientation="horizontal">
      <Input
        className="bg-white shadow-sm"
        placeholder="Type your question..."
        value={question}
        disabled={loading}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit(question);
        }}
      />
      <Button onClick={() => onSubmit(question)} disabled={loading}>
        Send
      </Button>
    </Field>
  );
};
