import Link from 'next/link';
import { Bars3Icon} from '@heroicons/react/24/outline';

export default function NavBar() {
    return (
        <div className="flex items-center justify-center dark:bg-black text-3xl">
            <div className="pr-20">
                <Link href="/">Home</Link>
            </div>
            <div className="pr-20">
               <Link href="/AboutMe">About</Link> 
            </div>
            <div className="pr-20"> 
                <Link href="/Tech">Tech</Link>
            </div>
            <Bars3Icon className="w-6 h-6"/>
        </div>
    );
}
