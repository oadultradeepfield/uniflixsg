import { PlusIcon } from "@heroicons/react/24/outline";

export default function RecommendationHeader() {
  return (
    <div className="my-4 flex items-center justify-between px-4">
      <span className="text-lg font-bold">Your best matches:</span>
      <button className="btn btn-success btn-sm flex items-center space-x-1">
        <PlusIcon className="h-5 w-5" />
        <span>Collection</span>
      </button>
    </div>
  );
}
