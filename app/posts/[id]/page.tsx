import { Footer } from "@/components/sections";
import { getPostById, getAllPosts } from "@/lib/api";
import Link from "next/link";

// Generate the post, note that this is a "react server component"! it is
// allowed to be async
export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const { html, title, date } = await getPostById(id);
  return (
    <div className="min-h-screen">
      <div className="max-w-[1220px] mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <Link 
            href="/posts" 
            className="inline-flex items-center gap-3 mb-6 text-[var(--muted)] hover:text-white transition-colors no-underline"
          >
            <span>←</span> Back to Blog
          </Link>
        </header>

        <main>
          <article className="liquid-glass p-8 max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl font-bold gradient-text mb-4">{title}</h1>
              {date && date !== "undefined" && (
                <time className="chip">
                  {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
            </header>
            
            <div 
              className="prose prose-invert prose-lg max-w-none
                         prose-headings:gradient-text prose-headings:font-bold
                         prose-p:text-[var(--muted)] prose-p:leading-relaxed
                         prose-a:text-[var(--accent-a)] prose-a:no-underline hover:prose-a:text-[var(--accent-b)]
                         prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
                         prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg
                         prose-blockquote:border-l-[var(--accent-a)] prose-blockquote:border-l-4 prose-blockquote:pl-6
                         prose-ul:text-[var(--muted)] prose-ol:text-[var(--muted)]
                         prose-li:text-[var(--muted)]" 
              dangerouslySetInnerHTML={{ __html: html }} 
            />
          </article>
        </main>

      <Footer />
      </div>
    </div>
  );
}

// This function can statically allow nextjs to find all the posts that you
// have made, and statically generate them
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}

// Set the title of the page to be the post title, note that we no longer use
// e.g. next/head in app dir, and this can be async just like the server
// component
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const { title } = await getPostById(id);
  return {
    title,
  };
}
