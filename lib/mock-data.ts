export const dashboardMetrics = {
  totalDresses: 248,
  totalUsers: 1396,
  upcomingRentals: 31,
  returnDeadlinesToday: 9,
  dayRevenue: 12450,
  weekRevenue: 84120,
  monthRevenue: 348900,
};

export const upcomingBookings = [
  { code: 'D001', customer: 'Riya Shah', pickup: '2026-04-11 11:00', status: 'Booked' },
  { code: 'D014', customer: 'Anika Patel', pickup: '2026-04-12 18:00', status: 'Booked' },
  { code: 'D102', customer: 'Maria Gomez', pickup: '2026-04-14 12:00', status: 'Trial Pending' },
];

export const deadlines = [
  { code: 'D066', customer: 'Hina Khan', due: '2026-04-10 21:00', lateFee: 300 },
  { code: 'D039', customer: 'Neha Rao', due: '2026-04-10 20:00', lateFee: 300 },
  { code: 'D120', customer: 'Aisha Malik', due: '2026-04-11 10:00', lateFee: 500 },
];

export const users = [
  {
    id: 'U001',
    name: 'Riya Shah',
    phone: '9991112233',
    totalBookings: 8,
    totalPaid: 42300,
    lastMessage: '2026-04-09 09:40',
    bookings: [
      { code: 'D001', date: '2026-03-02', paid: 5000, status: 'Returned' },
      { code: 'D014', date: '2026-04-11', paid: 7200, status: 'Upcoming' },
    ],
  },
];

export const dresses = [
  {
    code: 'D001',
    name: 'Ruby Bridal Lehenga',
    type: 'Bridal',
    purchasePrice: 32000,
    rentalPrice: 5500,
    timesRented: 17,
    totalEarned: 93500,
    status: 'Booked',
    nextBooking: '2026-04-11 11:00',
    images: ['/placeholder-dress.svg'],
  },
];
