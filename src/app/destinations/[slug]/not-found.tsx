import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function DestinationNotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[64px]">
        <div className="flex h-[50vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-base mb-4">
              Destination Not Found
            </h1>
            <p className="text-secondary mb-6">
              The destination you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              href="/"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
