export function QuestionAnalysis({ correctAnswers }) {
  return (
    <div className="m-3 md:m-0">
      <div className="p-2 lg:p-5 md:p-10 md:ml-4 mt-8 bg-white border rounded-lg max-w-5xl w-full md:mx-auto h-fit">
      <div className="flex justify-between">
        <div className="text-xl font-bold mb-10">Question Analysis</div>
        <div className="text-blue-800 font-extrabold">{correctAnswers}/15</div>
      </div>
      <div className="text-gray-600 text-xl font-medium">
        <span className="font-extrabold">You scored {correctAnswers} questions correct out of 15.</span>{" "} However it still needs
        some improvements
      </div>
    </div>
    </div>
  )
}