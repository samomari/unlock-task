type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <p className="text-red-600 text-sm md:text-base font-medium">{message}</p>
  );
};
