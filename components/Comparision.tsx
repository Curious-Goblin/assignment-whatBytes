export function Comparision({ percentile }) {
    let comparisonText;

    if (percentile < 72) {
        comparisonText = "lower than";
    } else if (percentile > 72) {
        comparisonText = "greater than";
    } else {
        comparisonText = "equal to";
    }

    return (
        <div className="mt-8 border rounded-lg m-3 p-2 lg:p-5 flex flex-col gap-6">
            <div className="font-extrabold text-xl">
                Comparision Graph
            </div>
            <div className="flex justify-between">
                <div className="text-gray-600 text-lg md:text-xl font-medium">
                    <span className="font-extrabold">
                        You scored {percentile}% percentile
                    </span>{" "}
                    which is {comparisonText} the <br></br>
                    average percentile 72% of all engineers who took this assessment
                </div>
                <div className=" flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-4">
                    <img src="graph.png"></img>
                </div>
            </div>
        </div>
    );
}
