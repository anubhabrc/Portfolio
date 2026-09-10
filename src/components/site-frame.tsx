import type { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Oneko from './oneko';

export default function SiteFrame({ children, showFooter = true }: { children: ReactNode; showFooter?: boolean }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {showFooter && <Footer />}
      <Oneko />
    </>
  );
}
