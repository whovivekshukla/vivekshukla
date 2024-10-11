import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        vivek shukla
      </h1>
      <p className="mb-4">
        {`i'm a 23-year-old software engineer working on some cool projects and always learning new things. my interests are diverse and include computer programming, machine learning, artificial intelligence, water desalination, renewable energy, physics, economics, finance, business, philosophy, and more. i'm always seeking out new challenges and opportunities to learn and grow.

`}
      </p>
      {/* <p className="mb-4">
        check out my{" "}
        <Link href="/now">
          (<span className="font-medium">now page</span>)
        </Link>{" "}
        to see what i'm currently focused on.
      </p> */}

      <div className="my-8">
        <h2 className="font-medium text-xl mb-4 tracking-tighter">blog</h2>
        <BlogPosts />
      </div>
    </section>
  );
}
