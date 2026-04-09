import { notFound } from 'next/navigation';
import { DashboardShell } from '@/components/dashboard-shell';
import { dresses } from '@/lib/mock-data';

export default async function DressDetailsPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const dress = dresses.find((item) => item.code === code);

  if (!dress) notFound();

  return (
    <DashboardShell title={dress.name} subtitle="Dress-level inventory and revenue intelligence.">
      <section className="detail-grid">
        <article className="card"><p>Dress ID</p><h3>{dress.code}</h3></article>
        <article className="card"><p>Type</p><h3>{dress.type}</h3></article>
        <article className="card"><p>Purchase price</p><h3>₹{dress.purchasePrice.toLocaleString('en-IN')}</h3></article>
        <article className="card"><p>Rental price</p><h3>₹{dress.rentalPrice.toLocaleString('en-IN')}</h3></article>
        <article className="card"><p>Times rented</p><h3>{dress.timesRented}</h3></article>
        <article className="card"><p>Total earned</p><h3>₹{dress.totalEarned.toLocaleString('en-IN')}</h3></article>
        <article className="card"><p>Status</p><h3>{dress.status}</h3></article>
        <article className="card"><p>Next booking</p><h3>{dress.nextBooking}</h3></article>
      </section>
    </DashboardShell>
  );
}
