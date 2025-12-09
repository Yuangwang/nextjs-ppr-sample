// app/components/DynamicCart.tsx
import { cookies } from "next/headers";

export default async function DynamicCart() {
  // This line forces the component to be dynamic
  const cookieStore = await cookies();
  
  // Simulate a slow network request (e.g., fetching user cart)
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="p-4 border-2 border-blue-500 rounded bg-blue-50">
      <h2 className="text-xl font-bold text-blue-700">🛒 User Cart</h2>
      <p>Items loaded from server!</p>
      <p className="text-sm text-gray-500">Timestamp: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}