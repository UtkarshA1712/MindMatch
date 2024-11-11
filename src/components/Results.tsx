import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Brain, Heart, Lightbulb, Smile, Zap, ChevronDown } from 'lucide-react';

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
  const [expandedTrait, setExpandedTrait] = useState<string | null>(null);

  const traits = [
    {
      name: 'Openness',
      score: scores.openness,
      icon: Lightbulb,
      description: "Your score in Openness indicates how open you are to new experiences, ideas, and creativity. People with high Openness scores tend to be imaginative, curious, and open-minded. You likely enjoy exploring new concepts and thinking outside the box. If your score is on the lower side, you may prefer routine and familiar experiences, but that's okay—there's value in stability too!",
      color: 'bg-purple-600',
      lightColor: 'bg-purple-100',
      interpretation: getInterpretation('openness', scores.openness),
      suggestion: 'Challenge yourself with new experiences or ideas outside your usual comfort zone.',
    },
    {
      name: 'Conscientiousness',
      score: scores.conscientiousness,
      icon: Brain,
      description: "Your Conscientiousness score reflects your ability to plan, be detail-oriented, and follow through on tasks. If you're highly conscientious, you're likely organized, responsible, and good at managing your time. A lower score might suggest a more spontaneous approach to life, preferring flexibility and less structured planning.",
      color: 'bg-blue-600',
      lightColor: 'bg-blue-100',
      interpretation: getInterpretation('conscientiousness', scores.conscientiousness),
      suggestion: 'Keep refining your organizational skills, but remember to allow flexibility when needed.',
    },
    {
      name: 'Extraversion',
      score: scores.extraversion,
      icon: Zap,
      description: "Extraversion is about how energized you feel by social interactions. A high score typically means you're outgoing, enthusiastic, and energized by being around others. On the other hand, a lower score suggests that you may prefer solitude or smaller, more intimate gatherings.",
      color: 'bg-yellow-500',
      lightColor: 'bg-yellow-100',
      interpretation: getInterpretation('extraversion', scores.extraversion),
      suggestion: 'Balance socializing with personal downtime to recharge.',
    },
    {
      name: 'Agreeableness',
      score: scores.agreeableness,
      icon: Heart,
      description: 'Agreeableness reflects how cooperative and compassionate you are towards others. People with high Agreeableness scores are typically empathetic, considerate, and trustworthy, while those with lower scores may be more competitive or assertive.',
      color: 'bg-green-500',
      lightColor: 'bg-green-100',
      interpretation: getInterpretation('agreeableness', scores.agreeableness),
      suggestion: 'While compassion is wonderful, remember to set boundaries where needed.',
    },
    {
      name: 'Neuroticism',
      score: scores.neuroticism,
      icon: Smile,
      description: 'Your Neuroticism score reflects how you manage stress and emotional challenges. A higher score indicates a tendency to experience negative emotions like anxiety and sadness, while a lower score suggests emotional stability and a calm, resilient approach to challenges.',
      color: 'bg-red-500',
      lightColor: 'bg-red-100',
      interpretation: getInterpretation('neuroticism', scores.neuroticism),
      suggestion: 'Try techniques like meditation, deep breathing, or journaling to manage stress.',
    },
  ];

  function getInterpretation(trait: string, score: number) {
    if (score > 75) {
      switch (trait) {
        case 'openness':
          return "You thrive in environments that encourage creativity and innovation. You're likely a thinker who seeks out new experiences and enjoys intellectual challenges.";
        case 'conscientiousness':
          return 'You are very reliable, hardworking, and prefer structure. You likely set high goals for yourself and stick to your plans.';
        case 'extraversion':
          return 'You are outgoing, energetic, and enjoy being the center of attention. Social situations recharge you.';
        case 'agreeableness':
          return 'You are kind-hearted and empathetic. You value harmony in relationships and strive to understand others feelings.';
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
          return 'You enjoy socializing but also appreciate your downtime. Youre flexible in your social engagements.';
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
          return 'You may focus more on your own goals and less on others needs. You value honesty and assertiveness in relationships.';
        case 'neuroticism':
          return 'You are emotionally stable, calm under pressure, and tend not to get bogged down by negative emotions. You handle adversity well.';
      }
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Your Personality Profile
          </h2>
          <p className="text-gray-600 text-lg">
            Based on the Big Five personality traits model
          </p>
        </motion.div>

        {/* Bar Graph Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 bg-white p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Personality Traits Overview</h3>
          <div className="space-y-4">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <trait.icon className={`w-5 h-5 ${trait.color.replace('bg-', 'text-')}`} />
                    <span className="font-medium text-gray-700">{trait.name}</span>
                  </div>
                  <span className={`font-semibold ${trait.color.replace('bg-', 'text-')}`}>
                    {trait.score}%
                  </span>
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${trait.score}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full ${trait.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            const isExpanded = expandedTrait === trait.name;

            return (
              <motion.div
                key={trait.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'ring-2 ring-offset-2 ' + trait.color.replace('bg-', 'ring-') : ''
                }`}
              >
                <div 
                  className={`p-6 cursor-pointer ${trait.lightColor} transition-colors duration-300`}
                  onClick={() => setExpandedTrait(isExpanded ? null : trait.name)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${trait.color} bg-opacity-10`}>
                        <Icon className={`w-6 h-6 ${trait.color.replace('bg-', 'text-')}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{trait.name}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </div>

                  <div className="mt-4">
                    <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${trait.score}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`absolute h-full ${trait.color}`}
                      />
                    </div>
                    <div className="mt-2 text-right">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`text-sm font-medium ${trait.color.replace('bg-', 'text-')}`}
                      >
                        {trait.score}%
                      </motion.span>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 border-t border-gray-100">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Description</h4>
                        <p className="text-gray-600">{trait.description}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Your Result</h4>
                        <p className="text-gray-600">{trait.interpretation}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Growth Suggestion</h4>
                        <p className="text-gray-600">{trait.suggestion}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <BarChart className="w-5 h-5 mr-2" />
            Take Test Again
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}