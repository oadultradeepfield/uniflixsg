"use client";

import { useState } from "react";

export interface Recommendation {
  program: string;
  university: string;
}

interface UseRecommendationResult {
  recommendations: Recommendation[];
  loading: boolean;
  fetchRecommendations: (query: string) => Promise<void>;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("API_URL environment variable is not set.");
}

export default function useRecommendation(): UseRecommendationResult {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendations = async (query: string): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/recommend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setRecommendations(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { recommendations, loading, fetchRecommendations };
}
