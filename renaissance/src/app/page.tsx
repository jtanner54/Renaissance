'use client';

import Link from "next/link";
import Typewriter from "typewriter-effect";
import BoxesHome from "../Components/BoxesHome";
import Timeline from "../Components/Timeline";
import TechGroup from "../Components/Technologies";
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

            <div className="dark:bg-black py-20 " />

            <section className="dark:bg-black py-40 px-5 pt-59 md:pt-2">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start px-6 max-w-6xl mx-auto">
                    <div className="md:col-span-7">
                        <p className="pl-1.5 pb-9 font-serif text-orange-400 uppercase tracking-widest">01 — Biography</p>
                        <h1 className="wrap-break-word font-serif text-4xl md:text-[105px] sm:text-5xl pb-4">
                            Who Am
                            <br />
                            <span className="italic opacity-50">I Really?</span>
                        </h1>
                        <div className="space-y-8 pt-2 max-w-105rem">
                            <p className="font-sans text-2xl">
                                Hi! I'm <span className="font-serif font-bold">Jack Tanner</span>, a passionate American, self-taught coder. I'm a daily learner, always aiming for personal growth.
                                Lead Architect Designer of <span className="font-serif font-bold text-orange-400"> <Link target="_blank" href="https://purrquinox.com/">Purrquinox</Link></span>.
                            </p>

                            <p className="font-sans text-2xl">
                                I started my coding journey as a self-taught enthusiast, driven by curiosity and a passion for technology.
                                What began as a hobby quickly evolved into pursuing a path in college as a computer scientist as I hone my skills through countless hours of practice and real-world projects.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-5 ">

                        <p className="font-serif text-white/50 uppercase tracking-widest pb-4">progress log</p>
                        <div className="w-full h-px border-t border-white/10 pb-10" />

                        <div className="relative">
                            <div className="absolute left-0.75 top-1 bottom-1 w-px bg-white/10" />
                            <Timeline date="2022" text="Started coding journey" />
                            <Timeline date="2024" text="Attending Rose-Hulman" />
                            <Timeline date="2025" text="Joined Purrquinox" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark:bg-black">
                <div className="w-full h-px border-t border-white/5" />

                <div className="text-center">
                    <p className="font-serif text-orange-400 uppercase tracking-wider pt-50">02 - capabilities</p>
                    <p className="font-serif text-5xl md:text-7xl pt-7"> Technical
                        <span className="font-serif italic opacity-50"> Arsenal</span>
                    </p>
                </div>

                <div className="flex flex-col items-center pt-5">
                    <p className="text-3xl font-serif">What I know: </p>
                    <div className="grid grid-col-1 sm:grid-col-2 md:grid-col-3 pt-10">
                        <TechGroup src="css" name="css" desc="Advanced styling including Flexbox, Grid, and CSS animations" level={5} />
                    </div>
                </div>
            </section>
        </div >
    );
}