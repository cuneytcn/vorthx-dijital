import Footer from '@/components/footer';
import GoToTopButton from '@/components/go-to-top';
import Header from '@/components/header';
import React from 'react';

export default function RoutesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <React.Fragment>
            <Header />
            <main>{children}</main>
            <Footer />
            <GoToTopButton />
        </React.Fragment>
    );
}
