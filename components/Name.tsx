export function Name() {
    return (
        <div className="flex gap-2 p-4 md:p-6 lg:p-8">
            <div className="flex justify-center items-center">
                {/* <svg width="60" height="60" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="5,20 15,10 15,54 5,54" fill="#000" />
                    <polygon points="20,10 30,20 30,54 20,54" fill="#000" />
                    <polygon points="35,20 45,10 45,54 35,54" fill="#000" />
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
            <div className="flex flex-col pb-1 justify-center items-center text-lg md:text-4xl font-extrabold">
                WhatBytes
            </div>
        </div>
    )
}