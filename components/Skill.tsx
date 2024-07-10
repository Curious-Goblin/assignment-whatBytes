"use client";

import { useRecoilValue } from "recoil";
import { Comparision } from "./Comparision";
import { Html } from "./Html";
import { QuestionAnalysis } from "./Question";
import { Statistics } from "./Statistics";
import { SyllabusAnalysis } from "./Syllabus";
import { percentileState, rankState, scoreState } from "@/atoms/Statistics";
import { useEffect, useState } from "react";
import { SidebarN } from "./Sidebar-1";

export function Skill() {
    const rank = useRecoilValue<string>(rankState);
    const percentile = useRecoilValue<string>(percentileState);
    const correctAnswers = useRecoilValue<string>(scoreState);
    const [isOpen, setIsOpen] = useState(false)
    console.log(rank, percentile, correctAnswers);

    useEffect(() => {
        console.log(rank, percentile, correctAnswers);
        console.log("Rank, percentile, or correctAnswers changed");
    }, [rank, percentile, correctAnswers]);

    return (
        <div className="md:p-16 md:pt-10 flex-grow">
            <div className="p-4 md:p-0 text-slate-500 font-semibold text-xl md:pb-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    onClick={() => { setIsOpen(true) }}
                    className="md:hidden pb-2 size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {isOpen && <SidebarN isOpen={isOpen} setIsOpen={setIsOpen}/>}
                
                Skill test {rank} {percentile} {correctAnswers}
            </div>
            <div className="flex flex-col md:flex-row ">
                <div className="w-screen md:w-2/3 mb-6 md:mb-0 md:pr-4">
                    <Html
                        questions="08"
                        duration="15"
                        submittedDate="5 June 2021"
                    />
                    <Statistics
                        rank={rank}
                        percentile={percentile}
                        correctAnswers={correctAnswers}
                    />
                    <Comparision percentile={percentile} />
                </div>
                <div className="w-screen md:w-1/2 md:pl-4">
                    <SyllabusAnalysis />
                    <QuestionAnalysis correctAnswers={correctAnswers} />
                </div>
            </div>
        </div>
    );
}
