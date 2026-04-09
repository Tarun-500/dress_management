import { notFound } from 'next/navigation';
import { DashboardShell } from '@/components/dashboard-shell';
import { users } from '@/lib/mock-data';

export default async function UserDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = users.find((item) => item.id === id);

  if (!user) notFound();

  return (
    <DashboardShell title={`User ${user.name}`} subtitle="Customer history and payment details.">
      <section className="detail-grid">
        <article className="card"><p>Phone (Unique)</p><h3>{user.phone}</h3></article>
        <article className="card"><p>Total bookings</p><h3>{user.totalBookings}</h3></article>
        <article className="card"><p>Total paid</p><h3>₹{user.totalPaid.toLocaleString('en-IN')}</h3></article>
        <article className="card"><p>Last WhatsApp</p><h3>{user.lastMessage}</h3></article>
      </section>

      <article className="table-card">
        <h3>Booking timeline</h3>
        <table>
          <thead><tr><th>Dress</th><th>Date</th><th>Paid</th><th>Status</th></tr></thead>
          <tbody>
            {user.bookings.map((booking) => (
              <tr key={`${booking.code}-${booking.date}`}>
                <td>{booking.code}</td>
                <td>{booking.date}</td>
                <td>₹{booking.paid.toLocaleString('en-IN')}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </DashboardShell>
  );
}
