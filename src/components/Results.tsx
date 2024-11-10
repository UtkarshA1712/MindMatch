import React from 'react';
import { BarChart, Brain, Heart, Lightbulb, Smile, Zap } from 'lucide-react';

interface ResultsProps {
  scores: {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
  };
}


export default function Results({ scores }: ResultsProps) {
  const traits = [
    {
      name: 'Openness',
      score: scores.openness,
      icon: Lightbulb,
      description: "Your score in Openness indicates how open you are to new experiences, ideas, and creativity. People with high Openness scores tend to be imaginative, curious, and open-minded. You likely enjoy exploring new concepts and thinking outside the box. If your score is on the lower side, you may prefer routine and familiar experiences, but that's okay—there's value in stability too!",
      color: 'bg-purple-600',
      interpretation: getInterpretation('openness', scores.openness),
      suggestion: 'Challenge yourself with new experiences or ideas outside your usual comfort zone.',
    },
    {
      name: 'Conscientiousness',
      score: scores.conscientiousness,
      icon: Brain,
      description: "Your Conscientiousness score reflects your ability to plan, be detail-oriented, and follow through on tasks. If you're highly conscientious, you're likely organized, responsible, and good at managing your time. A lower score might suggest a more spontaneous approach to life, preferring flexibility and less structured planning.",
      color: 'bg-blue-600',
      interpretation: getInterpretation('conscientiousness', scores.conscientiousness),
      suggestion: 'Keep refining your organizational skills, but remember to allow flexibility when needed.',
    },
    {
      name: 'Extraversion',
      score: scores.extraversion,
      icon: Zap,
      description: "Extraversion is about how energized you feel by social interactions. A high score typically means you're outgoing, enthusiastic, and energized by being around others, On the other hand, a lower score suggests that you may prefer solitude or smaller, more intimate gatherings.",
      color: 'bg-yellow-500',
      interpretation: getInterpretation('extraversion', scores.extraversion),
      suggestion: 'Balance socializing with personal downtime to recharge.',
    },
    {
      name: 'Agreeableness',
      score: scores.agreeableness,
      icon: Heart,
      description: 'Agreeableness reflects how cooperative and compassionate you are towards others. People with high Agreeableness scores are typically empathetic, considerate, and trustworthy, while those with lower scores may be more competitive or assertive.',
      color: 'bg-green-500',
      interpretation: getInterpretation('agreeableness', scores.agreeableness),
      suggestion: 'While compassion is wonderful, remember to set boundaries where needed.',
    },
    {
      name: 'Neuroticism',
      score: scores.neuroticism,
      icon: Smile,
      description: 'Your Neuroticism score reflects how you manage stress and emotional challenges. A higher score indicates a tendency to experience negative emotions like anxiety and sadness, while a lower score suggests emotional stability and a calm, resilient approach to challenges.',
      color: 'bg-red-500',
      interpretation: getInterpretation('neuroticism', scores.neuroticism),
      suggestion: 'Try techniques like meditation, deep breathing, or journaling to manage stress.',
    },
  ];
  function getInterpretation(trait: string, score: number) {
    if (score > 75) {
      switch (trait) {
        case 'openness':
          return 'You thrive in environments that encourage creativity and innovation. You’re likely a thinker who seeks out new experiences and enjoys intellectual challenges.';
        case 'conscientiousness':
          return 'You are very reliable, hardworking, and prefer structure. You likely set high goals for yourself and stick to your plans.';
        case 'extraversion':
          return 'You are outgoing, energetic, and enjoy being the center of attention. Social situations recharge you.';
        case 'agreeableness':
          return 'You are kind-hearted and empathetic. You value harmony in relationships and strive to understand others\' feelings.';
        case 'neuroticism':
          return 'You may experience stress, anxiety, or mood swings more easily. Practicing mindfulness or relaxation techniques might help you find emotional balance.';
      }
    } else if (score >= 50) {
      switch (trait) {
        case 'openness':
          return 'You balance new experiences with familiar routines. While open to new ideas, you may take time to adjust to change.';
        case 'conscientiousness':
          return 'You strike a balance between being organized and adaptable. You complete tasks but allow for flexibility.';
        case 'extraversion':
          return 'You enjoy socializing but also appreciate your downtime. You’re flexible in your social engagements.';
        case 'agreeableness':
          return 'You are generally agreeable but can assert yourself when necessary. You balance compassion with personal boundaries.';
        case 'neuroticism':
          return 'You experience emotional ups and downs but usually recover quickly. You have a good sense of resilience when faced with stress.';
      }
    } else {
      switch (trait) {
        case 'openness':
          return 'You appreciate structure and predictability, and you may prefer practical or traditional approaches over creative methods.';
        case 'conscientiousness':
          return 'You tend to go with the flow, favoring spontaneity over strict schedules and plans.';
        case 'extraversion':
          return 'You may feel drained in social settings and prefer spending time alone or in small, close-knit groups.';
        case 'agreeableness':
          return 'You may focus more on your own goals and less on others’ needs. You value honesty and assertiveness in relationships.';
        case 'neuroticism':
          return 'You are emotionally stable, calm under pressure, and tend not to get bogged down by negative emotions. You handle adversity well.';
      }
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Your Personality Profile</h2>
        <p className="text-gray-600">Based on the Big Five personality traits </p>
      </div>

      <div className="space-y-6">
        {traits.map((trait) => {
          const Icon = trait.icon;
          return (
            <div key={trait.name} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Icon className="w-8 h-8 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-800">{trait.name}</h3>
              </div>
              <div className="mb-4">
                <div className="h-4 bg-gray-200 rounded-full">
                  <div
                    className={`h-full rounded-full ${trait.color}`}
                    style={{ width: `${trait.score}%` }}
                  />
                </div>
                <div className="mt-2 text-right text-sm text-gray-600">{trait.score}%</div>
              </div>
              <p className="text-gray-600">{trait.description}</p>
              <p className="text-gray-700 font-medium">Interpretation:</p>
              <p className="text-gray-600 mb-4">{trait.interpretation}</p>
              <p className="text-gray-700 font-medium">Suggestions for Growth:</p>
              <p className="text-gray-600">{trait.suggestion}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <BarChart className="w-5 h-5 mr-2" />
          Take Test Again
        </button>
      </div>
    </div>
  );
}
