'use client';

import Link from "next/link";
import Typewriter from "typewriter-effect";
import BoxesHome from "../Components/BoxesHome";
import { BiCodeAlt } from "react-icons/bi";
import { IoSparklesOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";

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

                        <div className="grid grid-cols-2 md:grid-cols-4 items-center text-center gap-20">
                            <BoxesHome icon={BiCodeAlt} m_text="20+" l_text="technologies known" />
                            <BoxesHome icon={IoSparklesOutline} m_text="4+" l_text="Years of Experience" />
                            <BoxesHome icon={MdOutlineRocketLaunch} m_text="12+" l_text="completed projects" />
                            <BoxesHome icon={FaGithub} m_text="13+" l_text="repositories" />
                        </div>

                        <div className="pt-25 tracking-wider flex flex-col items-center ">
                            <span className="font-serif uppercase opacity-50 ">explore</span>
                            <div className="pt-5 animate-bounce">
                                <FaArrowDown color="orange" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="dark:bg-black py-20 "/>

            <section className="dark:bg-black py-40 px-5 pt-59 md:pt-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-7">
                        <p className="z-10 pl-1.5 pb-9 font-sans font-stretch-expanded text-orange-400 uppercase tracking-widest">01 — Biography</p>
                        <h1 className="wrap-break-word font-serif text-4xl md:text-[105px] sm:text-5xl pb-4">
                            Who Am 
                            <br/>
                            <span className="italic opacity-50">I Really?</span>
                        </h1>
                        <p className="border-l-2 border-orange-400 pl-5 font-serif italic opacity-80 text-3xl">“Understanding the system matters more than memorizing the solution.”</p>
                    </div>
                    <div className="md:col-span-5">
                        <p className="text-2xl font-serif pb-8.5">I'm Jack Tanner, a computer science student at Rose-Hulman, driven less by lectures and more by curiosity.
                            My education doesn't stop at the syllabus—it accelerates when something breaks, behaves unexpectedly, or begs to be understood at a deeper level.
                        </p>
                        <p className="text-2xl font-serif opacity-50">
                            I believe the best engineers are self-taught long before they're credentialed.
                            I learn by building, deconstructing, and iterating—treating every system as both a tool and a puzzle.
                            Code, to me, is not just implementation; it's a way to reason about complexity, efficiency, and truth.
                        </p>
                    </div>
                </div>

            </section>
        </div >
    );
}