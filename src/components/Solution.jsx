import React from "react";
import { useLocation, useNavigate } from "react-router";

const Solution = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Directly get the solutionItem passed from TrashItem
  const { solutionItem } = location.state || {};

  if (!solutionItem) {
    return (
      <div className="text-white text-center py-10">
        No solution found.
      </div>
    );
  }

  return (
    <section className="p-6 min-h-screen bg-gray-900 text-white">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{solutionItem.title}</h1>

      {/* Subtitle */}
      {solutionItem.subtitle && (
        <h2 className="text-xl font-bold italic mb-6">{solutionItem.subtitle}</h2>
      )}

      {/* Description */}
      {solutionItem.description && (
        <p className="text-gray-200 leading-relaxed whitespace-pre-line mb-6">
          {solutionItem.description}
        </p>
      )}

      {/* Back button */}
      <button
        className="mt-8 bg-red-500 px-6 py-2 rounded hover:bg-red-600"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </section>
  );
};

export default Solution;
