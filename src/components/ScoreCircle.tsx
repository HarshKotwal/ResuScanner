const ScoreCircle = ({ score = 75 }: { score?: number }) => {
  const safeScore = Math.min(100, Math.max(0, score));
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const progress = safeScore / 100;
  const strokeDashoffset = circumference * (1 - progress);
  const gradientId = `grad-${Math.random().toString(36).slice(2)}`;

  return (
    <div className="relative w-25 h-25">
      <svg
        aria-hidden="true"
        focusable="false"
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        className="transform -rotate-90"
      >
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke="#e5e7eb"
          strokeWidth={stroke}
          fill="transparent"
        />

        <defs>
          <linearGradient id={gradientId} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF97AD" />
            <stop offset="100%" stopColor="#5171FF" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-semibold text-sm">{safeScore}/100</span>
      </div>
    </div>
  );
};

export default ScoreCircle;
