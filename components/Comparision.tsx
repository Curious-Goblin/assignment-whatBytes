import LineChart from "./Graph";

export function Comparision({ percentile }: { percentile: string }) {
    let comparisonText;

    if (parseInt(percentile) < 72) {
        comparisonText = "lower than";
    } else if (parseInt(percentile) > 72) {
        comparisonText = "greater than";
    } else {
        comparisonText = "equal to";
    }

    return (
        <div className="mt-8 border rounded-lg m-3 p-4 lg:p-5 flex flex-col gap-6">
            <div className="font-extrabold text-xl">
                Comparision Graph
            </div>
            <div>
                <div className="flex justify-between mb-10">
                    <div className="text-gray-600 text-lg w-9/12 md:w-fit md:text-xl font-medium">
                        <span className="font-extrabold">
                            You scored {percentile}% percentile
                        </span>{" "}
                        which is {comparisonText} the <br></br>
                        average percentile 72% of all engineers who took this assessment
                    </div>
                    <div className=" flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-3">
                        <img src="graph.png"></img>
                    </div>
                </div>
                <div className="w-full">
                    <LineChart />
                </div>
            </div>
        </div>
    );
}
