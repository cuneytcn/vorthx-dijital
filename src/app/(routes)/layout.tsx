import Footer from '@/components/shared/footer';
import GoToTopButton from '@/components/shared/go-to-top';
import Header from '@/components/shared/header';
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
