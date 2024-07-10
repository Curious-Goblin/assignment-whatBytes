export function Sidebar() {
    return (
        <div className="hidden md:block p-8 pr-16 w-full max-w-fit flex flex-col gap-4 border-r flex-grow
        ">
            <div className=" px-6 flex items-center space-x-4">
                {/* <svg width="64" height="64" className="pb-2" viewBox="0 0 10 40" xmlns="http://www.w3.org/2000/svg">
                    <g transform="scale(1, -1) translate(0, -40)">
                        <rect x="5" y="10" width="4" height="10" fill="#475569" />
                        <rect x="12" y="10" width="4" height="20" fill="#475569" />
                        <rect x="19" y="10" width="4" height="14" fill="#475569" />
                    </g>
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <div className="font-bold text-lg text-slate-600">
                    Dashboard
                </div>
            </div>
            <div className="px-6 flex w-full bg-slate-100 rounded-full items-center space-x-4">
                <div className=" flex space-x-4 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1e40af" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <div className="font-bold text-lg text-blue-800">
                        Skill Test
                    </div>
                </div>
            </div>
            <div className="px-6 flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <div className="font-bold text-lg text-slate-600">
                    Internship
                </div>
            </div>
        </div>
    );
}
