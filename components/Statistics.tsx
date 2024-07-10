export function Statistics({ percentile, rank, score }:{percentile:string,rank:string,score:string}) {
    return (
        <div className="border rounded-lg p-2 md:p-2 lg:p-5 m-3 mt-8">
            <div className="font-extrabold text-xl">
                Quick Statistics
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between pt-8 pl-6">
                <div className="flex">
                    <div className=" flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-2"><img src="trophy.png"></img></div>
                    <div className="pl-5">
                        <div className="font-bold text-xl">{rank}</div>
                        <div className="font-semibold text-slate-400 text-md">YOUR RANK</div>
                    </div>
                </div>
                <div className="w-0.5 bg-slate-300"></div>
                <div className="flex ">
                    <div className=" flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-2"><img src="note.png"></img></div>
                    <div className="pl-5">
                        <div className="font-bold text-xl">{percentile}%</div>
                        <div className="font-semibold text-slate-400 text-md">PERCENTILE</div>
                    </div>
                </div>
                <div className="w-0.5 bg-slate-300"></div>
                <div className="flex">
                    <div className=" flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-3"><img src="checkbox.png"></img></div>
                    <div className="pl-5 pr-10">
                        <div className="font-bold text-xl">{score}/15</div>
                        <div className="font-semibold text-slate-400 text-md">CORRECT ANSWERS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}