import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './footerSection';


type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }:LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
