export const validateQuestion = (question: string): string | null => {
  const trimmed = question.trim();

  if (!trimmed) return "Question cannot be empty";

  if (trimmed.length < 2) return "Question is too short";

  if (!/[a-zA-Z]/.test(trimmed)) return "Question must contain letters";

  return null;
};
