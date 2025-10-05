import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import trashSolutions from "../../../public/marsTrash.json";

const TrashItem = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedCards, setExpandedCards] = useState({}); // Track expanded state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllTrash = async () => {
      try {
        const res = await axios.get("https://re-mav-server.vercel.app/trashItems");
        setCards(res.data);
      } catch (error) {
        console.error("Failed to fetch trash items:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllTrash();
  }, []);

  const handleSolutionClick = (card) => {
    const matchedSolution = trashSolutions.find(
      (solution) =>
        solution.title?.trim().toLowerCase() === card.title?.trim().toLowerCase()
    );

    if (matchedSolution) {
      navigate("/solution", { state: { solutionItem: matchedSolution } });
    } else {
      alert("No solution available for this item");
    }
  };

  const toggleDescription = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-lg text-white">Loading...</div>
    );
  }

  return (
    <section className="py-16 px-4 md:px-16 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        All Trash Items
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.length > 0 ? (
          cards.map((card) => {
            const isExpanded = expandedCards[card._id];
            return (
              <div
                key={card._id}
                className="p-6 rounded-lg shadow hover:shadow-md transition duration-300 bg-gray-800/60 backdrop-blur-sm flex flex-col"
              >
                {card.imageURL && (
                  <img
                    src={card.imageURL}
                    alt={card.title}
                    className="w-full h-56 object-cover rounded-md mb-4"
                  />
                )}
                <h2 className="text-xl font-bold mb-2 text-center text-white">
                  {card.title}
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  {isExpanded ? card.description : `${card.description?.slice(0, 100)}...`}
                </p>

                <div className="mt-auto flex gap-2">
                  <button
                    className="flex-1 btn btn-outline"
                    onClick={() => toggleDescription(card._id)}
                  >
                    {isExpanded ? "Hide Details" : "Details"}
                  </button>
                  <button
                    className="flex-1 btn btn-outline"
                    onClick={() => handleSolutionClick(card)}
                  >
                    Solution
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center col-span-3 text-white">
            No trash items found.
          </p>
        )}
      </div>
    </section>
  );
};

export default TrashItem;
