import ScoreBadge from "./ScoreBadge";
import ScoreGauge from "./ScoreGauge";

const getScoreColor = (score: number) =>
  score > 69
    ? "text-green-600"
    : score > 49
      ? "text-yellow-600"
      : "text-red-600";

const Category = ({ title, score }: { title: string; score: number }) => {
  return (
    <div className="resume-summary">
      <div className="category">
        <div className="flex flex-row gap-2 items-center justify-center">
          <p className="text-2xl">{title}</p>
          <ScoreBadge score={score} />
        </div>
        <p className="text-2xl">
          <span className={getScoreColor(score)}>{score}</span>/100
        </p>
      </div>
    </div>
  );
};
const Summary = ({ feedback }: { feedback: Feedback }) => {
  if (!feedback) return null;
  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
      <div className="flex flex-row items-center p-4 gap-8">
        <ScoreGauge score={feedback.overallScore ?? 0} />

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Your Resume Score</h2>
          <p className="text-sm text-gray-500">
            This score is calculated based on the variables listed below.
          </p>
        </div>
      </div>

      <Category title="Tone & Style" score={feedback.toneAndStyle.score ?? 0} />
      <Category title="Content" score={feedback.content.score ?? 0} />
      <Category title="Structure" score={feedback.structure.score ?? 0} />
      <Category title="Skills" score={feedback.skills.score ?? 0} />
    </div>
  );
};

export default Summary;
