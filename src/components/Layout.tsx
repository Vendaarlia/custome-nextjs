import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

import Navbar from "./Navbar";
import Footer from './Footer';

export default function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </>
    )
}