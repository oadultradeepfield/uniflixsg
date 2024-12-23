import { useEffect } from "react";
import useRecommendation from "@/app/api/useRecommend";
import Skeleton from "../Common/Skeleton";
import RecommendationCard from "./RecommendationCard";

interface RecommendationProps {
  query: string;
}

const Recommendation = ({ query }: RecommendationProps) => {
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
    <div className="mx-auto max-w-3xl space-y-4 px-4">
      {recommendations?.length === 0 ? (
        <div className="text-center text-base-content/70">
          No recommendations found
        </div>
      ) : (
        recommendations?.map((recommendation) => (
          <RecommendationCard
            key={`${recommendation.program}-${recommendation.university}`}
            program={recommendation.program}
            university={recommendation.university}
          />
        ))
      )}
    </div>
  );
};

export default Recommendation;
