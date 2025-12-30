import { IconType } from "react-icons";

export default function BoxesHome({icon, m_text, l_text}: {icon: IconType, m_text: string, l_text: string}) {
    return (
        <div className="flex items-center flex-col gap-2">
            <div className="z-10 flex items-center align-middle border p-3 bg-white/5 border-white/7 rounded-2xl">
                {icon}
            </div>
            <div>
                <p className="text-5xl font-serif pb-3">{m_text}</p>
                <p className="text-sm opacity-50 uppercase">{l_text}</p>
            </div>
        </div>
    );
}   