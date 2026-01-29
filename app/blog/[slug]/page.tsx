import { Suspense } from 'react';
import { headers } from 'next/headers';
import { getViews, incrementViews } from '../../actions';

// 1. DYNAMIC COMPONENT (The "Hole" in the PPR Shell)
async function UserStatus() {
  // Artificial Delay to ensure you see the loading state
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  // FIX: headers() is now async and must be awaited
  const headerList = await headers(); 
  const middlewareRan = headerList.get('x-middleware-injected');
  const userAgent = headerList.get('user-agent');

  return (
    <div className="p-4 border rounded bg-blue-50 mt-4">
      <h3 className="font-bold text-blue-800">Dynamic User Info (Streamed)</h3>
      <ul className="text-sm font-mono mt-2">
        <li>Timestamp: {new Date().toISOString()}</li>
        <li>Middleware Ran: {middlewareRan ? '✅ YES' : '❌ NO'}</li>
        <li>User Agent: {userAgent?.slice(0, 20)}...</li>
      </ul>
    </div>
  );
}

// 2. SERVER ACTION COMPONENT
async function ViewCounter() {
  const views = await getViews();
  return (
    <div className="p-4 border rounded bg-green-50 mt-4">
      <h3 className="font-bold text-green-800">Server Actions Test</h3>
      <p className="text-2xl font-bold">{views} Views</p>
      <form action={incrementViews}>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded mt-2 hover:bg-green-700">
          Increment Server View (Mutation)
        </button>
      </form>
    </div>
  );
}

// 3. THE PAGE (Static Shell)
// FIX: 'params' is now a Promise<...> in Next.js 15+
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPage({ params }: Props) {
  // FIX: You must await params before accessing properties
  const { slug } = await params;

  return (
    <div className="max-w-2xl mx-auto p-10 font-sans">
      {/* STATIC SHELL START */}
      <h1 className="text-4xl font-bold">Blog Post: {slug}</h1>
      <p className="text-gray-600 mt-2">
        This shell is static. It should load instantly and cache.
      </p>
      
      <div className="mt-8 p-4 border-l-4 border-gray-300">
        <p>Static content... Lorem ipsum dolor sit amet.</p>
      </div>
      {/* STATIC SHELL END */}

      {/* DYNAMIC HOLE 1: Request Data */}
      <Suspense fallback={<div className="p-4 border border-dashed rounded mt-4 animate-pulse">Loading User Data...</div>}>
        <UserStatus />
      </Suspense>

      {/* DYNAMIC HOLE 2: Server Data */}
      <Suspense fallback={<div className="p-4 border border-dashed rounded mt-4 animate-pulse">Loading Views...</div>}>
        <ViewCounter />
      </Suspense>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: 'hello-world' }, { slug: 'rewritten' }];
}