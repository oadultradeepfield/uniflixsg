import Link from "next/link";
import UniversityBadge from "../Common/UniversityBadge";
import { Recommendation } from "@/app/api/useRecommend";

const RecommendationCard = ({ program_title, university }: Recommendation) => {
  const link = `https://${university
    .toLowerCase()
    .split(" ")
    .at(-1)
    ?.replace(/[()']/g, "")}.edu.sg/`;
  return (
    <Link href={link}>
      <div className="group m-4 max-w-3xl rounded-xl border bg-base-100 p-4 shadow transition-all duration-300 hover:shadow-md">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <UniversityBadge university={university} />
          </div>

          <div className="flex flex-col">
            <span className="text-base font-medium text-base-content">
              {program_title}
            </span>
            <span className="text-sm text-base-content/60">{university}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecommendationCard;
