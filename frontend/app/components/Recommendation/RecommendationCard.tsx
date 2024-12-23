import Link from "next/link";
import UniversityBadge from "../Common/UniversityBadge";
import { Recommendation } from "@/app/api/useRecommend";

const RecommendationCard = ({ program, university }: Recommendation) => {
  return (
    <Link href={`/${program}`}>
      <div className="group w-full max-w-3xl rounded-lg border bg-base-100 p-4 shadow transition-all duration-300 hover:shadow-md">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <UniversityBadge university={university} />
          </div>

          <div className="flex flex-col">
            <span className="text-base font-medium text-base-content">
              {program}
            </span>
            <span className="text-sm text-base-content/60">{university}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecommendationCard;
