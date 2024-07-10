import { useState } from "react";
import { UpdateScores } from "./Updatebox";

interface UpdatePropsType {
    rank?: string;
    percentile?: string;
    score?: string;
    setRank: (value: string) => void;
    setPercentile: (value: string) => void;
    setScore: (value: string) => void;
}

export function Update({ rank, setRank, percentile, setPercentile, score, setScore }: UpdatePropsType) {
    const [showUpdateScores, setShowUpdateScores] = useState(false);

    return (
        <div>
            <div onClick={() => setShowUpdateScores(true)} className="bg-blue-900 h-fit p-3 text-md rounded-lg cursor-pointer font-bold text-white px-4 ml-4 mt-2">
                <button>
                    Update
                </button>
            </div>
            {showUpdateScores && <UpdateScores
                rank={rank}
                setRank={setRank}
                percentile={percentile}
                setPercentile={setPercentile}
                score={score}
                setScore={setScore}
                onClose={() => setShowUpdateScores(false)}
            />}
        </div>
    );
}
