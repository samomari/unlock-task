import { Spinner } from "./components/ui/spinner";
import { useAskQuestion } from "@/hooks/useAskQuestion";
import { QuestionForm } from "./components/question/QuestionForm";
import { AnswerCard } from "./components/question/AnswerCard";
import { ErrorMessage } from "./components/question/ErrorMessage";

function App() {
  const { ask, loading, error, answer } = useAskQuestion();

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        Decision Helper
      </h1>
      <h2 className="text-lg md:text-xl font semibold mb-4 text-center">
        Ask your question
      </h2>
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col gap-3">
        <QuestionForm onSubmit={ask} loading={loading} />
        {loading && (
          <div className="flex flex-col items-center">
            <Spinner className="size-6" />
          </div>
        )}
        {error && <ErrorMessage message={error} />}
        {answer && <AnswerCard answer={answer} />}
      </div>
    </div>
  );
}

export default App;
