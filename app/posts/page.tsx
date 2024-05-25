import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <main className="px-24 py-8 flex flex-col w-screen items-center">
      <h1 className="text-4xl font-bold mb-8 text-bunker-600 dark:text-bunker-300">
        My blog
      </h1>
      <h2 className="text-2xl font-bold mb-8 text-bunker-600 dark:text-bunker-300">
        All articles
      </h2>
      <ul>
        {posts.map((post) => {
          const { id, date, title } = post;
          return (
            <li key={id} className="my-4">
              <Link href={`/posts/${id}`} className=" ">
                {date && (
                  <span className="py-1 px-2 mr-2 rounded bg-bunker-200">{`${date}`}</span>
                )}
                <span className="py-1 px-2 mr-2 rounded bg-slate-200 hover:bg-bunker-200 transition">
                  {title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
