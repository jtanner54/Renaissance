'use client';

import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { clsx } from 'clsx';
import Link from 'next/link';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/About', current: false },
    { name: 'Tech', href: '/Tech', current: false }
]

function classNames(...classes: Array<String>) {
    return classes.filter(Boolean).join(' ')
}

export default function DropdownButton() {
    const [clicked, setClicked] = useState(false);

    function handleClicked() {
        setClicked(!clicked);
    }

    return (
        <>
            <button onClick={handleClicked} className={clsx(
                clicked ? 'hidden' : '')}>
                <IoMdMenu className='size-8 cursor-pointer' />
            </button>
            <button onClick={handleClicked} className={clsx(
                clicked ? '' : 'hidden')}>
                <IoClose className='size-8 cursor-pointer' />
                <div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <Link key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-[#71717a] text-white' : 'hover:bg-white/5',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </button>
        </>
    );
}