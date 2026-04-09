import { DashboardShell } from '@/components/dashboard-shell';
import { dashboardMetrics, deadlines, upcomingBookings } from '@/lib/mock-data';

const money = (value: number) => `₹${value.toLocaleString('en-IN')}`;

export default function DashboardPage() {
  return (
    <DashboardShell title="Owner Dashboard" subtitle="All business controls in one place.">
      <section className="card-grid">
        <article className="card"><p>Total dresses</p><h3>{dashboardMetrics.totalDresses}</h3></article>
        <article className="card"><p>Total users</p><h3>{dashboardMetrics.totalUsers}</h3></article>
        <article className="card"><p>Upcoming rentals</p><h3>{dashboardMetrics.upcomingRentals}</h3></article>
        <article className="card"><p>Return deadlines</p><h3>{dashboardMetrics.returnDeadlinesToday}</h3></article>
      </section>

      <section className="card-grid">
        <article className="card"><p>Revenue (Today)</p><h3>{money(dashboardMetrics.dayRevenue)}</h3></article>
        <article className="card"><p>Revenue (Week)</p><h3>{money(dashboardMetrics.weekRevenue)}</h3></article>
        <article className="card"><p>Revenue (Month)</p><h3>{money(dashboardMetrics.monthRevenue)}</h3></article>
      </section>

      <section className="tables-wrap">
        <article className="table-card">
          <h3>Upcoming bookings</h3>
          <table>
            <thead><tr><th>Dress ID</th><th>Customer</th><th>Pickup</th><th>Status</th></tr></thead>
            <tbody>
              {upcomingBookings.map((row) => (
                <tr key={`${row.code}-${row.pickup}`}>
                  <td>{row.code}</td><td>{row.customer}</td><td>{row.pickup}</td><td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="table-card">
          <h3>Return deadlines</h3>
          <table>
            <thead><tr><th>Dress ID</th><th>Customer</th><th>Due</th><th>Late fee/day</th></tr></thead>
            <tbody>
              {deadlines.map((row) => (
                <tr key={`${row.code}-${row.due}`}>
                  <td>{row.code}</td><td>{row.customer}</td><td>{row.due}</td><td>{money(row.lateFee)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
    </DashboardShell>
  );
}
