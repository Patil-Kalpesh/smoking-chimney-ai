

import Header from '@/app/header/page';
import Footer from '@/components/Footer/index';

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <main className="mt-20">{children}</main>
      <Footer />
    </>
  );
}