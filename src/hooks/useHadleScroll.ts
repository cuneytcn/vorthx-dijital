import { useEffect, useState } from 'react';

export function useHandleScroll() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        let currentScrollY = window.scrollY;
        let lastScrollY = 0;
        const handleScroll = () => {
            currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsSticky(true);
            } else {
                // Scrolling up
                setIsSticky(false);
            }
            lastScrollY = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isSticky;
}
