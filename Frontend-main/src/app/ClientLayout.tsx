'use client';
import './globals.css';
import { usePathname } from 'next/navigation';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isDashboardPage = pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboardPage && <NavBar />}
      {children}
    </>
  );
}
