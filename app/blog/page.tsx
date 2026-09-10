"use client";
import { contentfulClient } from "../../lib/contentful";
import BlogPostCard from "@/components/BlogPostCard";
import { useEffect, useState } from "react";
import { trackEvent } from "@/components/Analytics";

/**
 * Blog listing page – fetches entries of content type "blogPost" from Contentful.
 * For simplicity we render a flat list (no pagination). In a real app you could
 * implement server‑side pagination via `skip`/`limit` parameters.
 */
export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await contentfulClient.getEntries({
          content_type: "blogPost",
          order: ["-sys.createdAt"],
        });
        setPosts(response.items);
        trackEvent('blog', 'view');
      } catch (err) {
        console.error("Error fetching blog posts", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <p className="text-center py-8">Loading posts…</p>;

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-center text-foreground/70">No posts found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <BlogPostCard key={post.sys.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
