import Image from "next/image";
import Link from "next/link";
import type { Entry } from "contentful";

/**
 * Props for a blog post entry fetched from Contentful.
 */
interface BlogPostProps {
  post: any;
}

export default function BlogPostCard({ post }: BlogPostProps) {
  const { title, slug, excerpt, featuredImage } = (post as any).fields || {};
  const imageUrl = featuredImage?.fields?.file?.url;

  return (
    <article className="rounded-xl bg-white/30 backdrop-blur-sm p-6 shadow-lg transition hover:shadow-xl">
      {imageUrl && (
        <Image
          src={`https:${imageUrl}`}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-foreground/80 mb-4 line-clamp-3">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        className="inline-block text-primary hover:underline font-medium"
      >
        Read more →
      </Link>
    </article>
  );
}
