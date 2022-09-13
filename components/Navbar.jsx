import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FIX_HEIGHT_NAVBAR, routes } from '../config.ts';
import NavLink from './NavLink';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    const [windowYPos, setWindowYPos] = useState(() => {
        if (typeof window === 'undefined') return;
        return window.screenY;
    });

    function handleWindowScroll() {
        setWindowYPos(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleWindowScroll);

        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        };
    }, [windowYPos]);

    return (
        <nav
            style={{
                backgroundColor: `rgba(255,255,255,${
                    Number(windowYPos) / 100
                })`,
                height: FIX_HEIGHT_NAVBAR,
            }}
            className={`bg-white flex fixed z-10 top-0 w-full items-center px-10 lg:px-20 border-b-fancy-blue/20 border-b-[1px]`}
        >
            <div className="relative w-32 lg:w-48 h-full ">
                <Image
                    draggable={false}
                    objectFit="contain"
                    layout="fill"
                    src="/images/logo.png"
                    alt="img"
                />
            </div>
            <ul className="lg:ml-[72px] lg:flex lg:gap-x-7 hidden ">
                {routes.map(({ title, route }) => (
                    <NavLink
                        key={route}
                        title={title}
                        href={route}
                        active={router.pathname === route}
                    />
                ))}
            </ul>
        </nav>
    );
}
