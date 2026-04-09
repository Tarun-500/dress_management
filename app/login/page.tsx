'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'SUPER_ADMIN' | 'ADMIN'>('ADMIN');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) return;

    localStorage.setItem('dm_user', JSON.stringify({ email, role }));
    router.push('/dashboard');
  };

  return (
    <main className="auth-wrap">
      <section className="auth-card">
        <h1>DressFlow Admin</h1>
        <p>Owner/admin login. Successful login redirects to dashboard.</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Email
            <input
              type="email"
              placeholder="owner@dressflow.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <label>
            Role
            <select value={role} onChange={(e) => setRole(e.target.value as 'SUPER_ADMIN' | 'ADMIN')}>
              <option value="ADMIN">Admin</option>
              <option value="SUPER_ADMIN">Super Admin</option>
            </select>
          </label>

          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}
