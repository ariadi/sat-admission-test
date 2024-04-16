import { Card } from '@/app/components/dashboard/cards';
import { lusitana } from '@/app/styles/fonts';
import{ Suspense } from 'react';
import {CardsSkeleton } from '@/app/components/skeletons';

export default async function Page() {
  // const latestInvoices = await fetchLatestInvoices();
  // const { numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
      Insta Like page
      </h1>
      <h3>Data source: https://jsonplaceholder.typicode.com/albums and https://jsonplaceholder.typicode.com/photos</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      </div>
    </main>
  );
}