import Link from "next/link";
import { ArrowIcon } from "app/components/footer";
export const metadata = {
  title: "Links",
  description: "Few links that i want to share.",
};

export default function Links() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Links</h1>
      <Link
        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        rel="noopener noreferrer"
        href="/timeline"
      >
        <ArrowIcon />
        <p className="ml-2 h-7">timeline</p>
      </Link>
    </section>
  );
}
