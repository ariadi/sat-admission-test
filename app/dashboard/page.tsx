import { Card } from '@/app/components/dashboard/cards';
import { lusitana } from '@/app/styles/fonts';
import{ Suspense } from 'react';
import {CardsSkeleton } from '@/app/components/skeletons';

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      </div>
    </main>
  );
}