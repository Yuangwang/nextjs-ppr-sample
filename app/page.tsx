// app/page.tsx
import { Suspense } from "react";
import DynamicCart from "./components/DynamicCart";

export default function Home() {
  return (
    <main className="min-h-screen p-12 space-y-8">
      {/* --- STATIC SHELL (Loads Instantly) --- */}
      <header className="p-6 bg-gray-100 rounded-lg">
        <h1 className="text-3xl font-bold">Partial Prerendering Demo</h1>
        <p className="text-gray-600">
          This header is static. It is pre-generated at build time and served immediately.
        </p>
      </header>

      {/* --- DYNAMIC HOLE (Streams in later) --- */}
      <section>
        <p className="mb-4">Below is a dynamic component wrapped in Suspense:</p>
        
        <Suspense 
          fallback={
            <div className="p-4 border-2 border-gray-300 border-dashed rounded h-32 flex items-center justify-center bg-gray-50">
              <span className="animate-pulse text-gray-400">Loading Cart Data...</span>
            </div>
          }
        >
          <DynamicCart />
        </Suspense>
      </section>
    </main>
  );
}