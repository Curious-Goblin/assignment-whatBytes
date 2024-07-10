"use client"

import { useState } from "react";
import { UpdateScores } from "./Updatebox";

export function Update() {
    const [showUpdateScores, setShowUpdateScores] = useState(false);

    return (
        <div>
            <div className="bg-blue-900 h-fit p-3 text-md rounded-lg font-bold text-white px-4 ml-4 mt-2">
                <button onClick={() => setShowUpdateScores(true)}>
                    Update
                </button>
            </div>
            {showUpdateScores && <UpdateScores onClose={() => setShowUpdateScores(false)} />}
        </div>
    );
}
