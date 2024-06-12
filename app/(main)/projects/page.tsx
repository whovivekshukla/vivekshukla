import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A summary of my projects and contributions.",
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">UltraDiet</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          April 2024 - Present
        </p>
        <p>
          UltraDiet is a diet planner app powered by AI. It uses advanced
          language processing with Claude Opus and LangChain to create
          personalized diet plans for users. The app is built with Next.js for
          an easy and intuitive user experience. It has efficient database
          management to handle data securely and reliably. Industry-standard
          security practices ensure user data privacy. With thorough data
          validation, the system is robust and trustworthy.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Lukas</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          December 2023 - January 2024
        </p>
        <p>
          Lukas is an innovative drone inspection automation software designed
          to streamline and enhance the process of aerial inspections.
          Leveraging cutting-edge technologies such as NextJS, Prisma, Supabase
          DB(Postgres), Clerk Auth, DaisyUI, and FlytBase APIs, Lukas provides a
          robust platform for efficient and intelligent drone inspections.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Mood</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          November 2023 - December 2023
        </p>
        <p>
          This web application utilizes OpenAI GPT APIs to track and analyze
          your mood based on journal entries. It provides detailed insights,
          including mood, subject, negativity, summary, color, and sentiment
          score. Users can query the web app, asking questions like "How have I
          been feeling for the past 3 days?" and receive insightful responses.
        </p>
      </div>
    </section>
  );
}
