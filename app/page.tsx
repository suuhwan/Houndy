import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold font-heading mb-8">Houndy Portfolio</h1>
      <Link 
        href="/demo/marketing" 
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-bold"
      >
        View Marketing Agency Demo
      </Link>
    </main>
  );
}
