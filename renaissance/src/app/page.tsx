import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] bg-size-[25px_25px]" />

            <div className="relative w-full py-30">
                <div className="flex flex-col mx-auto max-w-5xl text-center items-center">
                    <h1 className="text-6xl mb-12">Jack Tanner</h1>

                    <p className="mb-12 text-2xl">Tech enthusiast</p>

                    <div className="">
                        <Link href="#footer"
                        className="hover:bg-orange-400 hover:border-orange-400 hover:text-white cursor-pointer bg-white border rounded-full text-black pl-7 pr-7 pt-4 pb-4 mr-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 inline-block">
                            Get in touch
                        </Link>
                        <Link href="#about"
                        className="hover:bg-orange-400/5  cursor-pointer bg-transparent border border-white/28 rounded-full text-white pl-7 pr-7 pt-4 pb-4 mr-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 inline-block">
                            My journey
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}