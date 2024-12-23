import { useEffect } from "react";
import useRecommendation from "@/app/api/useRecommend";
import Skeleton from "../Common/Skeleton";
import RecommendationCard from "./RecommendationCard";
import RecommendationHeader from "./RecommendationHeader";

interface RecommendationProps {
  query: string;
}

export default function Recommendation({ query }: RecommendationProps) {
  const { recommendations, loading, fetchRecommendations } =
    useRecommendation();

  useEffect(() => {
    fetchRecommendations(query);
  }, [query]);

  if (loading) {
    return (
      <div className="space-y-4 px-4">
        <Skeleton />
      </div>
    );
  }

  return (
    <div>
      {recommendations?.length > 0 && <RecommendationHeader />}
      <div className="space-y-4">
        {recommendations?.length === 0 ? (
          <div className="text-center text-base-content/70">
            No recommendations found
          </div>
        ) : (
          recommendations?.map((recommendation) => (
            <RecommendationCard
              key={`${recommendation.program_title}-${recommendation.university}`}
              program_title={recommendation.program_title}
              university={recommendation.university}
            />
          ))
        )}
      </div>
    </div>
  );
}
