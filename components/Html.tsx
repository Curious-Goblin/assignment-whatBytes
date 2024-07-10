"use client"

import { RecoilRoot } from "recoil";
import { Update } from "./Update";

export function Html({ questions, duration, submittedDate }) {
    return (
        <div className="m-3 flex flex-col md:flex-row justify-evenly border rounded-lg p-1 md:p-2 lg:p-5">
            <div className="flex">
                <div className="w-16 h-16 md:w-24 md:h-24 pt-2 md:pt-0">
                    <img src="html.jpg" alt="HTML Logo" />
                </div>
                <div className="pt-4 md:pt-0 md:pl-4 flex-grow">
                    <div className="text-xl font-extrabold">
                        Hyper Text Markup Language
                    </div>
                    <div className="hidden md:block text-gray-600 text-sm md:text-md font-semibold pt-3">
                        Questions: {questions} | Duration: {duration} mins | Submitted on {submittedDate}
                    </div>
                    <div className=" md:hidden text-gray-600 text-sm md:text-md font-semibold pt-3">
                        Questions: {questions} | Duration: {duration} mins |<br></br> Submitted on {submittedDate}
                    </div>
                </div>
            </div>
            <div className="w-fit pt-2 pb-4 md:pb-0 md:pt-0 md:pl-4">
                <RecoilRoot>
                <Update />
                </RecoilRoot>
            </div>
        </div>
    )
}
