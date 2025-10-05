import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import trashSolutions from "../../../public/marsTrash.json";

const OurSolution = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Load trash items from JSON
    const fetchAllTrash = () => {
      try {
        const filteredCards = trashSolutions.filter(
          (item) => item && item.title
        );
        setCards(filteredCards);
      } catch (error) {
        console.error("Error fetching trash items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllTrash();
  }, []);

  // Navigate to solution page
  const handleSolutionClick = (card) => {
    const matchedSolution = trashSolutions.find(
      (solution) =>
        solution.title &&
        solution.title.trim().toLowerCase() === card.title.trim().toLowerCase()
    );

    if (matchedSolution) {
      navigate("/solution", { state: { solutionItem: matchedSolution } });
    } else {
      console.warn("No solution found for:", card.title);
    }
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
         className="bg-gray-800/60 rounded-lg p-4 flex flex-col justify-between"
        >
          <div>
            {card.imageURL && (
              <img
                src={card.imageURL}
                alt={card.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
            )}
            <h2 className="text-white font-bold text-lg">{card.title}</h2>
            <p className="text-gray-300 text-sm mt-1">{card.subtitle || ""}</p>
          </div>
          <button
            onClick={() => handleSolutionClick(card)}
            className="mt-4 btn btn-outline text-white font-semibold py-2 px-4 rounded"
          >
            View Solution
          </button>
        </div>
      ))}
    </div>
  );
};

export default OurSolution;
