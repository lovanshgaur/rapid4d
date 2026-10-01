import Card from "./components/Card";

const App = () => {
  const characters = [
    {
      id: 1,
      name: "Aria Morgan",
      role: "The Strategist",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Aria",
      tagline: "Always three steps ahead.",
      status: "active",
      stats: {
        level: 24,
        stories: 12,
        followers: 1840
      },
      tags: ["Strategist", "Leader", "Calm"],
      color: "#7C3AED"
    },
    {
      id: 2,
      name: "Ethan Cole",
      role: "The Visionary",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Ethan",
      tagline: "Building worlds that don't exist yet.",
      status: "active",
      stats: {
        level: 31,
        stories: 18,
        followers: 3260
      },
      tags: ["Visionary", "Creator", "Dreamer"],
      color: "#2563EB"
    },
    {
      id: 3,
      name: "Maya Bennett",
      role: "The Observer",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Maya",
      tagline: "There is always more beneath the surface.",
      status: "away",
      stats: {
        level: 19,
        stories: 9,
        followers: 1275
      },
      tags: ["Observer", "Curious", "Thoughtful"],
      color: "#0891B2"
    },
    {
      id: 4,
      name: "Noah Williams",
      role: "The Dreamer",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Noah",
      tagline: "Reality is just the starting point.",
      status: "active",
      stats: {
        level: 27,
        stories: 21,
        followers: 2940
      },
      tags: ["Dreamer", "Creative", "Explorer"],
      color: "#DB2777"
    },
    {
      id: 5,
      name: "Sofia Carter",
      role: "The Storyteller",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Sofia",
      tagline: "Every silence has a story.",
      status: "active",
      stats: {
        level: 36,
        stories: 29,
        followers: 4820
      },
      tags: ["Storyteller", "Writer", "Empath"],
      color: "#EA580C"
    },
    {
      id: 6,
      name: "Leo Harrison",
      role: "The Rebel",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Leo",
      tagline: "Rules are suggestions.",
      status: "offline",
      stats: {
        level: 22,
        stories: 15,
        followers: 2180
      },
      tags: ["Rebel", "Bold", "Unpredictable"],
      color: "#DC2626"
    },
    {
      id: 7,
      name: "Nora Ellis",
      role: "The Architect",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Nora",
      tagline: "Nothing happens by accident.",
      status: "active",
      stats: {
        level: 29,
        stories: 16,
        followers: 3510
      },
      tags: ["Architect", "Analytical", "Precise"],
      color: "#059669"
    },
    {
      id: 8,
      name: "Caleb Reed",
      role: "The Wanderer",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Caleb",
      tagline: "The best stories begin off the map.",
      status: "away",
      stats: {
        level: 17,
        stories: 11,
        followers: 980
      },
      tags: ["Wanderer", "Adventurous", "Free"],
      color: "#CA8A04"
    },
    {
      id: 9,
      name: "Elena Brooks",
      role: "The Mystic",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Elena",
      tagline: "Some questions are better left unanswered.",
      status: "active",
      stats: {
        level: 34,
        stories: 24,
        followers: 4170
      },
      tags: ["Mystic", "Intuitive", "Mysterious"],
      color: "#9333EA"
    },
    {
      id: 10,
      name: "Julian Hayes",
      role: "The Investigator",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Julian",
      tagline: "The truth always leaves a trail.",
      status: "active",
      stats: {
        level: 28,
        stories: 19,
        followers: 2650
      },
      tags: ["Investigator", "Sharp", "Persistent"],
      color: "#475569"
    },
    {
      id: 11,
      name: "Zoe Parker",
      role: "The Catalyst",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Zoe",
      tagline: "One idea can change everything.",
      status: "offline",
      stats: {
        level: 21,
        stories: 13,
        followers: 1760
      },
      tags: ["Catalyst", "Energetic", "Innovative"],
      color: "#D97706"
    }
  ];

  return (
    <>
      <div className="cards-wrapper">
        {characters.map(function (e, idx) {
          console.log(e);
          return (
            <div className="card-wrapper" key={idx}>
              <Card character={e} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
