interface UniversityBadgeProps {
  university: string;
}

export default function UniversityBadge({ university }: UniversityBadgeProps) {
  const badgeSrc = university.toLowerCase().split(" ").at(-1) || "";

  return (
    <div className="avatar shrink-0">
      <div className="bg-neutral-focus h-10 w-10 rounded-full text-neutral-content">
        <img src={`${badgeSrc}`} alt={`${university}`} className="h-8 w-8" />
      </div>
    </div>
  );
}
