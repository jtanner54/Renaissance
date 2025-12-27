import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/About', current: false },
    { name: 'Tech', href: '/Tech', current: false }
]

function classNames(...classes: Array<String>) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    return (
        <div className="dark:bg-black">
            <div className=''></div>



            <div>
                <Bars3Icon className="block size-8" />
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
        </div>
    );
}
