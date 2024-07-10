import { percentileState, rankState, scoreState } from '@/atoms/Statistics';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

interface Errorstype {
    rank?: string;
    percentile?: string;
    score?: string;
}

interface UpdateScoresProps {
    onClose: () => void;
}

export function UpdateScores({ onClose }: UpdateScoresProps) {
    const [rank, setRank] = useRecoilState<string>(rankState);
    const [percentile, setPercentile] = useRecoilState<string>(percentileState);
    const [score, setScore] = useRecoilState<string>(scoreState);
    const [errors, setErrors] = useState<Errorstype>({});

    const validate = (): Errorstype => {
        let errors: Errorstype = {};

        if (!rank) {
            errors.rank = 'Rank should be a number';
        } else if (isNaN(Number(rank))) {
            errors.rank = 'Rank should be a number';
        }

        if (!percentile) {
            errors.percentile = 'Required | Percentile 0-100';
        } else if (Number(percentile) < 0 || Number(percentile) > 100) {
            errors.percentile = 'Percentile must be between 0 and 100';
        }

        if (!score) {
            errors.score = 'Score is required';
        } else if (Number(score) < 0 || Number(score) > 15) {
            errors.score = 'Score should be between 0 and 15';
        } else if (isNaN(Number(score))) {
            errors.score = 'Score should be a number between 0-15';
        }

        return errors;
    };

    const handleSave = () => {
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            console.log({ rank, percentile, score });
            onClose();
        }
        return [rank,percentile,score]
    };

    return (
        <div className="flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-full max-w-3xl relative">
                <div className='flex justify-between mb-6'>
                    <div className="text-2xl font-bold">Update scores</div>
                    <div className='w-16 bg-white h-16'><img src='html.jpg' alt='html icon' /></div>
                </div>
                <form className="space-y-6 flex flex-col gap-5">
                    <div className='flex gap-10'>
                        <label className="block w-11/12 text-lg font-semibold text-black mb-2">
                            1. Update your <span className="font-extrabold">Rank</span>
                        </label>
                        <input
                            type="number"
                            value={rank}
                            onChange={(e) => setRank(e.target.value)}
                            className="w-full max-w-44 border border-gray-300 rounded p-2"
                        />
                        {errors.rank && <p className="text-red-500 text-sm mt-1">{errors.rank}</p>}
                    </div>
                    <div className='flex gap-10'>
                        <label className="block w-11/12 text-lg font-semibold text-black mb-2">
                            2. Update your <span className="font-extrabold">Percentile</span>
                        </label>
                        <input
                            type="number"
                            value={percentile}
                            onChange={(e) => setPercentile(e.target.value)}
                            className="w-full max-w-44 border border-gray-300 rounded p-2"
                        />
                        {errors.percentile && <p className="text-red-500 text-sm mt-1">{errors.percentile}</p>}
                    </div>
                    <div className='flex gap-10'>
                        <label className="block w-11/12 text-lg font-semibold text-black mb-2">
                            3. Update your <span className="font-extrabold">Current Score (out of 15)</span>
                        </label>
                        <input
                            type="number"
                            value={score}
                            onChange={(e) => setScore(e.target.value)}
                            className="w-full max-w-44 border border-gray-300 rounded p-2"
                        />
                        {errors.score && <p className="text-red-500 text-sm mt-1">{errors.score}</p>}
                    </div>
                </form>
                <div className="flex justify-end mt-6 space-x-4">
                    <button className="bg-white border border-gray-300 text-black rounded px-4 py-2" onClick={onClose}>Cancel</button>
                    <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}
