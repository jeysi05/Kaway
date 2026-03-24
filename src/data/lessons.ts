export type Lesson = {
  slug: string;
  title: string;
  level: string;
  description: string;
  signs: string[];
  tip: string;
};

export const lessons: Lesson[] = [
  {
    slug: "alphabet-basics",
    title: "Alphabet Basics",
    level: "Beginner",
    description:
      "Learn the first few hand signs in the Filipino Sign Language alphabet.",
    signs: ["A", "B", "C", "D", "E"],
    tip: "Focus on finger shape and hand position for each letter.",
  },
  {
    slug: "greetings",
    title: "Greetings",
    level: "Beginner",
    description: "Practice common greetings used in daily conversation.",
    signs: ["Hello", "Good morning", "Thank you", "How are you?"],
    tip: "Practice these signs slowly, then repeat them as a short conversation.",
  },
  {
    slug: "daily-words",
    title: "Daily Words",
    level: "Beginner",
    description: "Learn useful signs for everyday communication.",
    signs: ["Eat", "Drink", "School", "Home", "Help"],
    tip: "Use each word in a short daily-life scenario to remember it better.",
  },
];