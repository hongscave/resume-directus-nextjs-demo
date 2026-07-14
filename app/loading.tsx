export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 px-4 animate-pulse">
      <div className="h-48 w-full max-w-md rounded-lg bg-gray-200 dark:bg-neutral-800" />
      <div className="h-48 w-full max-w-md rounded-lg bg-gray-200 dark:bg-neutral-800" />
      <div className="h-48 w-full max-w-md rounded-lg bg-gray-200 dark:bg-neutral-800" />
    </div>
  );
}
