import Navbar from '../Navbar';
import Footer from '../Footer';
import { FC, ReactElement } from 'react';

interface LayoutProps {
  type?: 'home' | 'others';
  children: ReactElement;
}

const Layout: FC<LayoutProps> = ({
  type = 'others',
  children,
}: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="m-auto max-w-[700px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
