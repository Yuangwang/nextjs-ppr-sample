'use server';

import { revalidatePath } from 'next/cache';

// Mock database
let views = 0;

export async function incrementViews() {
  // Simulate network delay to make the action feel "real"
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  views++;
  revalidatePath('/blog/[slug]'); // Triggers the page to reload with new data
  
  // ❌ REMOVED: return views; 
  // We return nothing (void) to satisfy the <form action> type signature.
}

export async function getViews() {
  return views;
}