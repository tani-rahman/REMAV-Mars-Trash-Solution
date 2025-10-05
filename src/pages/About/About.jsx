<<<<<<< HEAD
import { useState } from "react";

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className=" py-10 px-6 lg:px-20">
      {/* Title */}
      <h2 className="text-lg font-mono font-bold mb-4">About ReMav</h2>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 font-orbitron">
        Mars isn’t just a planet of <span className="text-black">exploration</span> <br />
        It’s becoming a planet of <span className="text-black">debris</span>
      </h1>

      {/* Images */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <img
          src="/about1.png" 
          alt="Mars debris"
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <img
          src="/about2.png" 
          alt="Mars waste"
          className="w-full md:w-2/3 rounded-lg shadow-lg"
        />
      </div>

      {/* Text */}
      <p className="text-lg leading-relaxed font-semibold">
        Over 7 tons of debris from robotic missions now lie scattered across its
        surface. This isn’t just broken metal parts, it includes packaging,
        textiles, and other materials that reflect our everyday impact.
      </p>

      {showMore && (
        <div className="mt-4 space-y-4 text-base leading-relaxed font-medium">
          <p>
            The REMAV team shows this problem by using real mission data and
            creative visuals. They take the trash left on Mars and turn it into
            a story that reminds us of our responsibility as space explorers.
          </p>
          <p>
            As future missions happen especially with humans going to Mars, the
            amount of waste will grow. Mars is a big place, but it’s still
            fragile, so every piece of trash counts.
          </p>
          <p>
            REMAV doesn’t just show the trash. They transform it into treasure.
            Their goal is to create reusable and sustainable materials from this
            waste, helping us explore in a way that cares for the planet and the
            future.
          </p>
          <p className="font-semibold">
            This is a reminder to think beyond just discovering Mars. We must
            explore carefully, because what we leave behind tells the story of
            humans in space.
          </p>
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        {showMore ? "Read Less" : "Read More"}
      </button>
    </section>
  );
};

export default AboutSection;
=======
import { useState } from "react";

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className=" py-10 px-6 lg:px-20">
      {/* Title */}
      <h2 className="text-lg font-mono font-bold mb-4">About ReMAV</h2>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 font-orbitron">
        Mars isn’t just a planet of exploration <br />
        It’s becoming a planet of debris
      </h1>

      {/* Images */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <img
          src="/about1.png" 
          alt="Mars debris"
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <img
          src="/about2.png" 
          alt="Mars waste"
          className="w-full md:w-2/3 rounded-lg shadow-lg"
        />
      </div>

      {/* Text */}
      <p className="text-lg leading-relaxed font-semibold">
        Over 7 tons of debris from robotic missions now lie scattered across its
        surface. This isn’t just broken metal parts, it includes packaging,
        textiles, and other materials that reflect our everyday impact.
      </p>

      {showMore && (
        <div className="mt-4 space-y-4 text-base leading-relaxed font-medium">
          <p>
            The REMAV team shows this problem by using real mission data and
            creative visuals. They take the trash left on Mars and turn it into
            a story that reminds us of our responsibility as space explorers.
          </p>
          <p>
            As future missions happen especially with humans going to Mars, the
            amount of waste will grow. Mars is a big place, but it’s still
            fragile, so every piece of trash counts.
          </p>
          <p>
            REMAV doesn’t just show the trash. They transform it into treasure.
            Their goal is to create reusable and sustainable materials from this
            waste, helping us explore in a way that cares for the planet and the
            future.
          </p>
          <p className="font-semibold">
            This is a reminder to think beyond just discovering Mars. We must
            explore carefully, because what we leave behind tells the story of
            humans in space.
          </p>
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        {showMore ? "Read Less" : "Read More"}
      </button>
    </section>
  );
};

export default AboutSection;
>>>>>>> 9971610 (set the all api)
