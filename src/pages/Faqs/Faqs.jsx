// src/components/FAQ.jsx
import React, { useState } from "react";

const faqs = [
  {
    question: "What is the main purpose of Mars habitats?",
    answer:
      "Mars habitats are designed to provide a safe and sustainable living environment for astronauts and researchers, including protection from radiation, temperature extremes, and low atmospheric pressure.",
  },
  {
    question: "How is water recycled on Mars?",
    answer:
      "Water is collected from waste, condensation, and other sources, purified using filtration and chemical treatment, and then reused for drinking, hygiene, and plant cultivation.",
  },
  {
    question: "How is waste managed on Mars?",
    answer:
      "All waste is carefully sorted, recycled when possible, and minimized. Some waste materials, like packaging foam, can be repurposed for insulation or construction materials.",
  },
  {
    question: "What kind of energy sources are used on Mars?",
    answer:
      "Solar panels are the primary energy source, supplemented by small nuclear reactors for continuous power supply during dust storms or night cycles.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg md:text-xl font-medium">{faq.question}</span>
              <span className="text-2xl transform transition-transform duration-300">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-300 text-sm md:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
