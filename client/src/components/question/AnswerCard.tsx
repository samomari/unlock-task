import { Card, CardContent } from "@/components/ui/card";
type AnswerCardProps = {
  answer: string;
};

export const AnswerCard = ({ answer }: AnswerCardProps) => {
  return (
    <Card>
      <CardContent className="text-sm md:text-base font-medium">
        {answer}
      </CardContent>
    </Card>
  );
};
