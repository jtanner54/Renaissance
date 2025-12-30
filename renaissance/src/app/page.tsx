'use client';

import Link from "next/link";
import Typewriter from "typewriter-effect";
import BoxesHome from "../Components/BoxesHome";
import { BiCodeAlt } from "react-icons/bi";
import { IoSparklesOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import Box from "../Components/BoxesAbout";

export default function Page() {
    return (
        <div>
            <section className="py-20 px-5 h-screen">
                <div className="absolute inset-0 h-screen w-full bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] bg-size-[30px_30px] sm:bg-size-[40px_40px]">
                    <div className="overflow-hidden absolute inset-0 bg-radial-[at_50%_40%] from-transparent to-black to-100% sm:to-110%" />
                </div>

                <div className="relative w-full py-10">
                    <div className="flex flex-col mx-auto max-w-5xl text-center items-center">
                        <p className="font-serif text-orange-400 pb-10 uppercase tracking-wider">Thoughtful engineering. Intentional design.</p>

                        <h1 className="font-serif text-4xl md:text-9xl sm:text-6xl mb-5">Jack
                            <span className="italic opacity-50"> Tanner</span>
                        </h1>

                        <p className="text-2xl sm:text-3xl md:text-5xl font-sans pb-5 opacity-50 italic">I'm a</p>
                        <div className="flex pb-10 font-serif text-2xl sm:text-3xl md:text-4xl">
                            <Typewriter options={{
                                strings: ['Tech Enthusiast', 'Software Engineer', 'Full-Stack Developer', 'Student'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 16,
                                delay: 50,
                                cursor: '',
                            }} />
                            <span className="text-orange-400">|</span>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5 mb-20">
                            <Link href="#footer"
                                className="hover:bg-orange-400 hover:border-orange-400 hover:text-white cursor-pointer bg-white border rounded-full text-black pl-9 pr-9 pt-3 pb-3 mr-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 inline-block">
                                Get in touch
                            </Link>
                            <Link href="#about"
                                className="hover:bg-orange-400/5  cursor-pointer bg-transparent border border-white/28 rounded-full text-white pl-9 pr-9 pt-3 pb-3 mr-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 inline-block">
                                My journey
                            </Link>
                        </div>

                        <div className="w-full h-px border-t border-white/5 pb-15" />

                        <div className="flex flex-col md:flex-row items-center text-center gap-20">
                            <BoxesHome icon={BiCodeAlt} m_text="20+" l_text="technologies known" />
                            <BoxesHome icon={IoSparklesOutline} m_text="4+" l_text="Years of Experience" />
                            <BoxesHome icon={MdOutlineRocketLaunch} m_text="12+" l_text="completed projects" />
                            <BoxesHome icon={FaGithub} m_text="13+" l_text="repositories" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="dark:bg-black">
                <div className="w-full h-px border-t border-white/5 pb-15" />

            </section>
        </div >
    );
}