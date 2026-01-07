interface Props {
  message: string;
  onRetry?: () => void;
}

export const ErrorState = ({ message, onRetry }: Props) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <p className="text-lg font-medium text-red-600">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700"
        >
          Retry
        </button>
      )}
    </div>
  );
};


