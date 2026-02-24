export const getRandomAnswer = () => {
  const answers = ["Yes", "No", "Maybe", "I don't know", "Ask again later"];
  return answers[Math.floor(Math.random() * answers.length)];
};
