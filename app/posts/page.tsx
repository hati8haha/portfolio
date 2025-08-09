import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen">
      <div className="max-w-[1220px] mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 mb-6 text-[var(--muted)] hover:text-white transition-colors no-underline"
          >
            <span>←</span> Back to Portfolio
          </Link>
          <h1 className="text-4xl font-bold gradient-text mb-2">
            My Blog
          </h1>
          <p className="text-[var(--muted)] text-lg">
            Thoughts on frontend development, web technologies, and creative coding
          </p>
        </header>

        <main>
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">All Articles</h2>
            <div className="grid gap-4">
              {posts.map((post) => {
                const { id, date, title } = post;
                return (
                  <Link 
                    key={id} 
                    href={`/posts/${id}`} 
                    className="glass-card p-6 block no-underline group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:gradient-text transition-all mb-2">
                          {title}
                        </h3>
                        {date && (
                          <time className="chip text-xs">
                            {new Date(date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        )}
                      </div>
                      <div className="text-[var(--muted)] group-hover:text-white transition-colors">
                        →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </main>

        <footer className="mt-12 mb-3 text-center text-[var(--muted)] text-sm">
          Made with Liquid Glass principles — Blog 2024
        </footer>
      </div>
    </div>
  );
}
