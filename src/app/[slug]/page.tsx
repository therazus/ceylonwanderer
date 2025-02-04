import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );

  if (!post) {
    return <div className="text-center text-error">Post not found</div>;
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(600).url()
    : null;

  return (
    <article className="min-h-screen bg-white">
      {/* Category Tag */}
      <div className="container mx-auto px-6 pt-12 max-w-4xl">
        <div className="text-primary mb-4">News</div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-base mb-8">
          {post.title}
        </h1>

        {/* Author and Date */}
        <div className="flex items-center gap-4 text-secondary mb-12">
          <div>Written by {post.author}</div>
          <div>{new Date(post.publishedAt).toLocaleDateString()}</div>
          {post.comments && (
            <Link href="#comments" className="text-primary hover:underline">
              Comments ( {post.comments.length} )
            </Link>
          )}
        </div>

        {/* Main Image */}
        {postImageUrl && (
          <div className="mb-12 rounded-3xl overflow-hidden">
            <Image
              src={postImageUrl || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full object-cover"
              priority
            />
          </div>
        )}

        {/* Content Section */}
        <div className="grid grid-cols-1 gap-8">
          {/* First Paragraph */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-serif text-base mb-4">
              {post.subtitle || "Donec sollicitudin molestie malesuada"}
            </h2>
            <div className="text-base leading-relaxed">
              {Array.isArray(post.body) && (
                <PortableText
                  value={post.body.slice(0, Math.ceil(post.body.length / 2))}
                />
              )}
            </div>
          </div>

          {/* Quote Section with Second Image */}
          <div className="grid md:grid-cols-2 gap-8 items-center my-8">
            <div className="bg-primary/5 p-8 rounded-2xl">
              <blockquote className="text-base italic">
                "Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; Donec velit neque, auctor sit
                amet aliquam vel, ullamcorper sit amet ligula"
              </blockquote>
              <div className="mt-4 text-secondary">- John Doe</div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={post.secondaryImage || "/placeholder.svg"}
                alt="Secondary illustration"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Remaining Content */}
          <div className="prose max-w-none text-base">
            {Array.isArray(post.body) && (
              <PortableText
                value={post.body.slice(Math.ceil(post.body.length / 2))}
              />
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
          {post.previousPost && (
            <Link
              href={`/post/${post.previousPost.slug}`}
              className="text-primary hover:underline"
            >
              ← Previous Article
            </Link>
          )}
          {post.nextPost && (
            <Link
              href={`/post/${post.nextPost.slug}`}
              className="text-primary hover:underline"
            >
              Next Article →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
