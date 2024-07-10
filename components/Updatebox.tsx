import React, { useState } from 'react';

interface Errorstype {
    rank?: string;
    percentile?: string;
    score?: string;
}

interface UpdateScoresProps {
    onClose: () => void;
    rank?: string;
    percentile?: string;
    score?: string;
    setRank: (value: string) => void;
    setPercentile: (value: string) => void;
    setScore: (value: string) => void;
}

export function UpdateScores({ onClose, rank, setRank, percentile, setPercentile, score, setScore }: UpdateScoresProps) {
    const [errors, setErrors] = useState<Errorstype>({});
    const [stats, setStats] = useState(
        {
            rank: '',
            percentile: '',
            score: ''
        }
    )

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
            setRank(stats.rank)
            setPercentile(stats.percentile)
            setScore(stats.score)
            console.log({ rank, percentile, score });
            onClose();
        }
        return [rank, percentile, score]
    };

    return (
        <div className="p-10 md:p-0 flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
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
                        <div className='flex flex-col'>
                            <input
                                type="number"
                                onChange={(e) => setStats(prev => ({
                                    ...prev,
                                    rank: e.target.value
                                }))}
                                className="w-full font-bold max-w-44 border border-gray-300 rounded p-2"
                            />
                            <div>
                                {errors.rank && <p className="text-red-500 text-sm mt-1">{errors.rank}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <label className="block w-11/12 text-lg font-semibold text-black mb-2">
                            2. Update your <span className="font-extrabold">Percentile</span>
                        </label>
                        <div className='flex flex-col'>
                            <input
                                type="number"
                                onChange={(e) => setStats(prev => ({
                                    ...prev,
                                    percentile: e.target.value
                                }))}
                                className="w-full font-bold max-w-44 border border-gray-300 rounded p-2"
                            />
                            <div>
                                {errors.percentile && <p className="text-red-500 text-sm mt-1">{errors.percentile}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <label className="block w-11/12 text-lg font-semibold text-black mb-2">
                            3. Update your <span className="font-extrabold">Current Score (out of 15)</span>
                        </label>
                        <div className='flex flex-col'>
                            <input
                                type="number"
                                onChange={(e) => setStats(prev => ({
                                    ...prev,
                                    score: e.target.value
                                }))}
                                className="w-full font-bold max-w-44 border border-gray-300 rounded p-2"
                            />
                            <div>
                                {errors.score && <p className="text-red-500 text-sm mt-1">{errors.score}</p>}
                            </div>
                        </div>
                    </div>
                </form>
                <div className="flex justify-end mt-6 space-x-4">
                    <button className="bg-white border-blue-800 border-2 font-bold text-blue-800 rounded px-4 py-2" onClick={onClose}>Cancel</button>
                    <button className="bg-blue-800 text-white rounded font-bold px-4 py-2" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}
