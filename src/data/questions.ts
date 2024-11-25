export interface Question {
  id: number;
  text: string;
  factor: 'openness' | 'conscientiousness' | 'extraversion' | 'agreeableness' | 'neuroticism';
  direction: 1 | -1;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "I am the life of the party",
    factor: "extraversion",
    direction: 1
  },
  {
    id: 2,
    text: "I don't talk a lot",
    factor: "extraversion",
    direction: -1
  },
  {
    id: 3,
    text: "I feel comfortable around people",
    factor: "extraversion",
    direction: 1
  },
  {
    id: 4,
    text: "I feel energized when interacting with others.",
    factor: "extraversion",
    direction: 1
  },
  {
    id: 5,
    text: "I start conversations",
    factor: "extraversion",
    direction: 1
  },
  {
    id: 6,
    text: "I have little to say",
    factor: "extraversion",
    direction: -1
  },
  {
    id: 7,
    text: "I talk to a lot of different people at parties",
    factor: "extraversion",
    direction: 1
  },
  {
    id: 8,
    text: "I prefer group activities over spending time alone.",
    factor: "extraversion",
    direction: 1
  },
  {
    id: 9,
    text: "I don't mind being the center of attention",
    factor: "extraversion",
    direction: 1
  },
  {
    id: 10,
    text: "I am quiet around strangers",
    factor: "extraversion",
    direction: -1
  },
  
  {
    id: 11,
    text: "I feel little concern for others",
    factor: "agreeableness",
    direction: -1
  },
  {
    id: 12,
    text: "I am interested in people",
    factor: "agreeableness",
    direction: 1
  },
  {
    id: 13,
    text: "I insult people",
    factor: "agreeableness",
    direction: -1
  },
  {
    id: 14,
    text: "I sympathize with others' feelings",
    factor: "agreeableness",
    direction: 1
  },
  {
    id: 15,
    text: "I am not interested in other people’s problems",
    factor: "agreeableness",
    direction: -1
  },
  {
    id: 16,
    text: "I have a soft heart",
    factor: "agreeableness",
    direction: 1
  },
  {
    id: 17,
    text: "I am not really interested in others",
    factor: "agreeableness",
    direction: -1
  },
  {
    id: 18,
    text: "I take time out for others",
    factor: "agreeableness",
    direction: 1
  },
  {
    id: 19,
    text: "I feel others' emotions",
    factor: "agreeableness",
    direction: 1
  },
  {
    id: 20,
    text: "I make people feel at ease",
    factor: "agreeableness",
    direction: 1
  },
  {
    id: 21,
    text: "I am always prepared",
    factor: "conscientiousness",
    direction: 1
  },
  {
    id: 22,
    text: "I leave my belongings around",
    factor: "conscientiousness",
    direction: -1
  },
  {
    id: 23,
    text: "I pay attention to details",
    factor: "conscientiousness",
    direction: 1
  },
  {
    id: 24,
    text: "I make a mess of things",
    factor: "conscientiousness",
    direction: -1
  },
  {
    id: 25,
    text: "I get chores done right away",
    factor: "conscientiousness",
    direction: 1
  },
  {
    id: 26,
    text: "I often forget to put things back in their proper place",
    factor: "conscientiousness",
    direction: -1
  },
  {
    id: 27,
    text: "I like order",
    factor: "conscientiousness",
    direction: 1
  },
  {
    id: 28,
    text: "I shirk my duties",
    factor: "conscientiousness",
    direction: -1
  },
  {
    id: 29,
    text: "I follow a schedule",
    factor: "conscientiousness",
    direction: 1
  },
  {
    id: 30,
    text: "I am exacting in my work",
    factor: "conscientiousness",
    direction: 1
  },
  {
    id: 31,
    text: "I get stressed out easily",
    factor: "neuroticism",
    direction: 1
  },
  {
    id: 32,
    text: "I am relaxed most of the time",
    factor: "neuroticism",
    direction: -1
  },
  {
    id: 33,
    text: "I worry about things",
    factor: "neuroticism",
    direction: 1
  },
  {
    id: 34,
    text: "I seldom feel blue",
    factor: "neuroticism",
    direction: -1
  },
  {
    id: 35,
    text: "I am easily disturbed",
    factor: "neuroticism",
    direction: 1
  },
  {
    id: 36,
    text: "I get upset easily",
    factor: "neuroticism",
    direction: 1
  },
  {
    id: 37,
    text: "I change my mood a lot",
    factor: "neuroticism",
    direction: 1
  },
  {
    id: 38,
    text: "I have frequent mood swings",
    factor: "neuroticism",
    direction: 1
  },
  {
    id: 39,
    text: "I get irritated easily",
    factor: "neuroticism",
    direction: 1
  },
  {
    id: 40,
    text: "I often feel blue",
    factor: "neuroticism",
    direction: 1
  },
  
  {
    id: 41,
    text: "I have a rich vocabulary",
    factor: "openness",
    direction: 1
  },
  {
    id: 42,
    text: "I have difficulty understanding abstract ideas",
    factor: "openness",
    direction: -1
  },
  {
    id: 43,
    text: "I have a vivid imagination",
    factor: "openness",
    direction: 1
  },
  {
    id: 44,
    text: "I am not interested in abstract ideas",
    factor: "openness",
    direction: -1
  },
  {
    id: 45,
    text: "I have excellent ideas",
    factor: "openness",
    direction: 1
  },
  {
    id: 46,
    text: "I do not have a good imagination",
    factor: "openness",
    direction: -1
  },
  {
    id: 47,
    text: "I am quick to understand things",
    factor: "openness",
    direction: 1
  },
  {
    id: 48,
    text: "I use difficult words",
    factor: "openness",
    direction: 1
  },
  {
    id: 49,
    text: "I spend time reflecting on things",
    factor: "openness",
    direction: 1
  },
  {
    id: 50,
    text: "I am full of ideas",
    factor: "openness",
    direction: 1
  }
  
];