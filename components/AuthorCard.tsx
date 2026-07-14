import ThemeToggle from "./ThemeToggle";

export default function AuthorCard() {
  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6 py-12 px-4 max-w-2xl mx-auto">
      <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl font-bold text-gray-500 dark:text-gray-400">
        HC
      </div>
      <div className="text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 py-12 px-4 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold">Hong Cheung</h2>
        <ThemeToggle />
        </div>
        <p className=" mt-1">Software Engineer</p>
        <p className=" mt-3 max-w-md">
          Building things for the web. Passionate about clean code, thoughtful design, and reliable systems.
        </p>
      </div>
    </section>
  )
}
