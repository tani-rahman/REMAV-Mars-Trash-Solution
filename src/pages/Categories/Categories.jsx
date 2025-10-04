// import React from "react";
// import { motion } from "framer-motion";

// const marsCategories = [
//   {
//     name: "Packaging Waste",
//     description:
//       "Boxes, plastic wraps, and containers used to carry supplies. Once opened, they turn into lightweight trash that quickly piles up.",
//     color: "border-blue-700",
//   },
//   {
//     name: "Textile Waste",
//     description:
//       "Clothes, blankets, and fabric wraps used during the mission. After use, they become soft but bulky trash that takes up space.",
//     color: "border-blue-700",
//   },
//   {
//     name: "Structural Waste",
//     description:
//       "Broken parts, damaged panels, and leftover building materials. These are hard and heavy items that are difficult to reuse.",
//     color: "border-blue-700",
//   },
// ];

// const MarsCategoriesSection = () => {
//   return (
//     <section className="py-16 px-4 md:px-16 bg-black text-white">
//       {/* Section Header */}
//       <div className="text-center mb-12 max-w-3xl mx-auto">
//         <h2 className="text-4xl font-orbitron font-bold mb-4">
//           Mars Trash Categories
//         </h2>
//         <p className="text-gray-400 text-lg">
//           A three year Mars mission could generate over 12,600 kg of inorganic waste,
//           including packaging, textiles, and structural debris, all of which must be
//           reused or repurposed to survive.
//         </p>
//       </div>

//       {/* Category Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {marsCategories.map((cat, index) => (
//           <motion.div
//             key={cat.name}
//             className={`border ${cat.color} rounded-xl p-6 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300`}
//             initial={{ y: 0 }}
//             animate={{ y: [0, -8, 0] }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               repeatType: "loop",
//               delay: index * 0.2,
//             }}
//             whileHover={{
//               scale: 1.05,
//               transition: { duration: 0.3 },
//             }}
//           >
//             <h3 className="text-xl font-orbitron font-semibold text-blue-500 mb-4">
//               {cat.name}
//             </h3>
//             <p className="text-gray-300">{cat.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MarsCategoriesSection;
