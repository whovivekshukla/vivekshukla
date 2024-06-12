import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Vivek Shukla
      </h1>
      <p className="mb-4">
        {`I'm a 22-year-old Software Engineer working on some cool projects and always learning new things. My interests are diverse and include computer programming, machine learning, artificial intelligence, water desalination, renewable energy, physics, economics, finance, business, philosophy, and more. I'm always seeking out new challenges and opportunities to learn and grow.

`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
