"use client";

import { useRecoilValue } from "recoil";
import { Comparision } from "./Comparision";
import { Html } from "./Html";
import { QuestionAnalysis } from "./Question";
import { Statistics } from "./Statistics";
import { SyllabusAnalysis } from "./Syllabus";
import { percentileState, rankState, scoreState } from "@/atoms/Statistics";
import { useEffect } from "react";

export function Skill() {
    const rank = useRecoilValue<string>(rankState);
    const percentile = useRecoilValue<string>(percentileState);
    const correctAnswers = useRecoilValue<string>(scoreState);
    
    useEffect(() => {
        console.log(rank, percentile, correctAnswers);
        console.log("Rank, percentile, or correctAnswers changed");
    }, [rank, percentile, correctAnswers]);

    return (
        <div className="md:p-16 md:pt-10 flex-grow">
            <div className="p-4 md:p-0 text-slate-500 font-semibold text-xl md:pb-10">
                Skill test
            </div>
            <div className="flex flex-col md:flex-row ">
                <div className="w-screen md:w-1/2 mb-6 md:mb-0 md:pr-4">
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
