interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  const { badgeColor, badgeText } =
    score > 69
      ? { badgeColor: "bg-badge-green text-green-600", badgeText: "Strong" }
      : score > 49
        ? {
            badgeColor: "bg-badge-yellow text-yellow-600",
            badgeText: "Good Start",
          }
        : { badgeColor: "bg-badge-red text-red-600", badgeText: "Needs Work" };

  return (
    <div className={`px-3 py-1 rounded-full ${badgeColor}`}>
      <span className="text-sm font-medium">{badgeText}</span>
    </div>
  );
};

export default ScoreBadge;
