import Head from 'next/head';
import Script from 'next/script';

type MetaProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  imageUrl?: string;
  url?: string;
};

export default function Meta({
  title = "YaghanTech – Technology Growth Partner",
  description = "Premium technology solutions for SME owners and digital marketers",
  keywords = [],
  imageUrl = "/assets/hero_illustration.jpg",
  url = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
}: MetaProps) {
  // Structured data (schema.org) for Organization / Website
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": url,
    "name": "YaghanTech",
    "logo": "/logo.png",
    "sameAs": [
      "https://twitter.com/YaghanTech",
      "https://www.linkedin.com/company/yaghantech",
      "https://www.facebook.com/YaghanTech"
    ]
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && keywords.length > 0 && (
          <meta name="keywords" content={keywords.join(', ')} />
        )}
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {imageUrl && <meta name="twitter:image" content={imageUrl} />}
        {/* Canonical link */}
        <link rel="canonical" href={url} />
        {/* Robots */}
        <meta name="robots" content="index,follow" />
      </Head>
      {/* JSON-LD structured data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
