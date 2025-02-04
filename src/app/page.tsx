import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

// Import existing components
import AboutUs from "./components/about-us";
import { SriLankaMap } from "./components/DestinationMap/sri-lanka-map";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import SustainabilityActivities from "./components/sustainability-activities";

// Sanity query to fetch latest posts
const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function Page() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <SriLankaMap />
      <SustainabilityActivities />

      {/* Blog Section */}
      <section className="container mx-auto max-w-3xl p-8">
        <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>
        <ul className="flex flex-col gap-y-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <li className="hover:underline" key={post._id}>
                <Link href={`/${post.slug.current}`}>
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                </Link>
              </li>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
