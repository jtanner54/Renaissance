const webKnow = ["react", "nextjs", "css", "html", "tailwind", "ts", "js"];
let lowKnow = ["rust", "discord", "github", "git", "vscode", "visualstudio", "linux", "ubuntu", "windows", "c"];
let learning = ["go", "yarn", "npm", "nodejs", "express", "vercel"];
 
function Lines(filled: number) {
    return (
        <div className="flex gap-2 ">
            {Array.from({length: 5}).map((_, i) => {
                return ((5 - (filled) > 0) && ((i + 1) > filled)) ? <div className="bg-pink-500 border border-transparent rounded-full w-7 h-1" /> : <div className="bg-orange-400 border border-orange-400 rounded-full w-7 h-1" />
            })}
        </div>
    );
}

export default function TechGroup({ src, name, desc, level }: { src: string, name: string, desc: string, level: number}) {
    return (
        <div className="flex flex-col overflow-hidden bg:white/40 border w-70 px-2 border-orange-400 rounded-2xl items-start">
            <div className="flex gap-5">
                <img width="28" height="28" src={`https://skillicons.dev/icons?i=${src}`} />

                <div className="flex flex-col">
                    <p className="text-2xl font-serif">{name}</p>
                    {Lines(level)}
                </div>
            </div>
            <div className="font-serif"> 
                {desc}
            </div>
        </div>
    );
}