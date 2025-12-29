import { FaTv, FaAngleUp} from "react-icons/fa";

export default function Page() {
    return (
        <div>
            <section className="relative w-full h-[81.5vh]">
                <div className="absolute inset-0 h-210 w-full dark:bg-black bg-[linear-gradient(to_right,#73737350_1px,transparent_1px),linear-gradient(to_bottom,#73737350_1px,transparent_1px)] bg-size-[40px_40px]">
                    <div className="overflow-hidden absolute inset-0 bg-radial-[at_50%_40%] from-gray to-black to-75%" />
                </div>

                <div className="flex flex-col items-center justify-center w-full pt-40 dark:bg-white">
                    <p className="z-10 font-sans font-stretch-expanded text-orange-400 pt-30 pb-12 uppercase slashed-zero">00 — Identity</p>
                    <h1 className="z-10 font-light text-6xl md:text-9xl sm:text-7xl">Who Am
                        <span className="font-serif italic opacity-50"> I?</span>
                    </h1>
                </div>
            </section>

            <section className="relative dark:bg-charcoal py-54 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="">
                            <p className="z-10 pl-1.5 pb-9 font-sans font-stretch-expanded text-orange-400 uppercase">01 — Philosophy</p>
                            <h1 className="wrap-break-word font-light text-4xl md:text-7xl sm:text-5xl pb-9">Engineering
                                <span className="text-4xl md:text-7xl sm:text-5xl font-serif italic opacity-50"> Understanding.</span>
                            </h1>
                            <p className="border-l-2 border-orange-400 pl-5 font-serif italic opacity-80 text-3xl">“Understanding the system matters more than memorizing the solution.”</p>
                        </div>
                        <div className="">
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
                </div>
            </section>

            <section className="dark:bg-black py-30 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="items-center text-center">
                        <p className="font-sans font-stretch-expanded pb-10 text-orange-400 uppercase slashed-zero">02 — Chronology</p>
                        <h1 className="font-serif pb-30 text-4xl sm:text-6xl md:text-8xl italic">The Path</h1>
                    </div>
                    <div className="flex flex-col md:flex-row mb-50 gap-12 items-center">
                        <div className="flex-1 ">
                            <h1 className="text-7xl md:text-[12rem] italic font-serif">2022</h1>
                            <h3 className="text-4xl md:text-5xl font-serif italic opacity-50">The Spark</h3>
                        </div>

                        <div className="w-px h-45 bg-linear-to-b from-orange-400 to-transparent hidden md:block" />
                        <div className="flex-1" />
                    </div>
                    <div className="flex flex-col md:flex-row mb-50 gap-12 items-center">
                        <div className="flex-1" />
                        <div className="w-px h-45 bg-linear-to-b from-orange-400 to-transparent hidden md:block" />
                        <div className="flex-1">
                            <h1 className="text-7xl md:text-[12rem] italic font-serif">2024</h1>
                            <h3 className="text-4xl md:text-5xl font-serif italic opacity-50">Rose-Hulman</h3>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mb-65 gap-12 items-center">
                        <div className="flex-1 ">
                            <h1 className="text-7xl md:text-[12rem] italic font-serif">2025</h1>
                            <h3 className="text-4xl md:text-5xl font-serif italic opacity-50">Joined Purrquinox</h3>
                        </div>

                        <div className="w-px h-45 bg-linear-to-b from-orange-400 to-transparent hidden md:block" />
                        <div className="flex-1" />
                    </div>
                </div>
            </section>
            <section className="dark:bg-black py-60 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col mb-12 items-centerjustify-between">
                        <p className="font-sans font-stretch-expanded pb-7 text-orange-400 uppercase slashed-zero">03 — Recreation</p>
                        <h1 className="font-serif text-4xl pb-4 md:text-6xl sm:text-5xl">Cinematic
                            <span className="italic pb-12 opacity-50"> Influence.</span>
                        </h1>
                        <div className="flex flex-col md:flex-row gap-12">
                            <div>
                                <p className="text-xl font-sans opacity-50">
                                    The shows/movies that moved me and shaped my personality.
                                </p>
                            </div>
                            <div className="ml-auto">
                                <p className="text-sm font-sans uppercase opacity-50">9 curated masterpieces</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="bg-red-700/85 border border-zinc-100/5 rounded-2xl">
                            <div className="flex flex-row items-center justify-between">
                                <div className="ml-4 border-gray-700/40 border rounded-2xl h-15 bg-gray-700/20">
                                    <FaTv color="blue" className="m-3 size-8 "/>
                                </div>
                                <div className="p-5">
                                    <p className="text-2xl">Silicon Valley</p>
                                    <p className="text-sm font-sans uppercase opacity-90">sitcom | comedy</p>
                                </div>
                                <div>
                                    <FaAngleUp className="mr-8 size-5"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-orange-200/50 border border-orange-200/50 rounded-2xl">
                            <div className="flex flex-row items-center justify-between">
                                <div className="ml-4 border-gray-700/40 border rounded-2xl h-15 bg-gray-700/20">
                                    <FaTv color="blue" className="m-3 size-8 "/>
                                </div>
                                <div className="p-5">
                                    <p className="text-2xl">The Office</p>
                                    <p className="text-sm font-sans uppercase opacity-90">sitcom | comedy</p>
                                </div>
                                <div>
                                    <FaAngleUp className="mr-8 size-5"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-pink-500 border border-zinc-100/5 rounded-2xl">
                            <div className="flex flex-row items-center justify-between">
                                <div className="ml-4 border-gray-700/40 border rounded-2xl h-15 bg-gray-700/20">
                                    <FaTv color="blue" className="m-3 size-8 "/>
                                </div>
                                <div className="p-5">
                                    <p className="text-2xl">Fight Club</p>
                                    <p className="text-sm font-sans uppercase opacity-90">thriller | action</p>
                                </div>
                                <div>
                                    <FaAngleUp className="mr-8 size-5"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-fuchsia-700 border border-fuchsia-700 rounded-2xl">
                            <div className="flex flex-row items-center justify-between">
                                <div className="ml-4 border-gray-700/40 border rounded-2xl h-15 bg-gray-700/20">
                                    <FaTv color="blue" className="m-3 size-8 "/>
                                </div>
                                <div className="p-5">
                                    <p className="text-2xl">La La Land</p>
                                    <p className="text-sm font-sans uppercase opacity-90">romance | musical</p>
                                </div>
                                <div>
                                    <FaAngleUp className="mr-8 size-5"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amber-600 border border-amber-600 rounded-2xl">
                            <div className="flex flex-row items-center justify-between">
                                <div className="ml-4 border-gray-700/40 border rounded-2xl h-15 bg-gray-700/20">
                                    <FaTv color="blue" className="m-3 size-8 "/>
                                </div>
                                <div className="p-5">
                                    <p className="text-2xl">Seven Deadly Sins</p>
                                    <p className="text-sm font-sans uppercase opacity-90">anime | fantasy</p>
                                </div>
                                <div>
                                    <FaAngleUp className="mr-8 size-5"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-300/80 border border-zinc-100/5 rounded-2xl">
                            <div className="flex flex-row items-center justify-between">
                                <div className="ml-4 border-gray-700/40 border rounded-2xl h-15 bg-gray-700/20">
                                    <FaTv color="blue" className="m-3 size-8 "/>
                                </div>
                                <div className="p-5">
                                    <p className="text-2xl">Please Don't Destroy: The Treasure of Foggy Mountain</p>
                                    <p className="text-sm font-sans uppercase opacity-90">comedy | adventure</p>
                                </div>
                                <div>
                                    <FaAngleUp className="mr-8 size-5"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#00AEEF] border border-[#00AEEF] rounded-2xl">
                            <div className="flex flex-row items-center justify-between">
                                <div className="ml-4 border-gray-700/40 border rounded-2xl h-15 bg-gray-700/20">
                                    <FaTv color="blue" className="m-3 size-8 "/>
                                </div>
                                <div className="p-5">
                                    <p className="text-2xl">Nightcrawler</p>
                                    <p className="text-sm font-sans uppercase opacity-90">thriller | crime</p>
                                </div>
                                <div>
                                    <FaAngleUp className="mr-8 size-5"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-emerald-500 border border-emerald-500 rounded-2xl">
                            <div className="flex flex-row items-center justify-between">
                                <div className="ml-4 border-gray-700/40 border rounded-2xl h-15 bg-gray-700/20">
                                    <FaTv color="blue" className="m-3 size-8 "/>
                                </div>
                                <div className="p-5">
                                    <p className="text-2xl">Shameless</p>
                                    <p className="text-sm font-sans uppercase opacity-90">dramedt</p>
                                </div>
                                <div>
                                    <FaAngleUp className="mr-8 size-5"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-zinc-100/5 border border-zinc-100/5 rounded-2xl">
                            <div className="flex flex-row items-center justify-between">
                                <div className="ml-4 border-gray-700/40 border rounded-2xl h-15 bg-gray-700/20">
                                    <FaTv color="blue" className="m-3 size-8 "/>
                                </div>
                                <div className="p-5">
                                    <p className="text-2xl">Batman Beyond</p>
                                    <p className="text-sm font-sans uppercase opacity-90">superhero | action</p>
                                </div>
                                <div>
                                    <FaAngleUp className="mr-8 size-5"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}