import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { questions } from './data/questions';
import TestQuestion from './components/TestQuestion';
import Results from './components/Results';
import LandingPage from './components/LandingPage';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(-1); // -1 represents landing page
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [scores, setScores] = useState<Record<string, number>>({});

  const startTest = () => {
    setCurrentQuestion(0);
  };

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: value }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        calculateResults();
        setIsLoading(false);
        setShowResults(true);
      }, 5000);
    }
  };

  const calculateResults = () => {
    const results = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0,
    };
  
    let counts = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0,
    };
  
    questions.forEach((question, index) => {
      const answer = answers[index];
      if (answer) {
        console.log(answer);
        const score = answer * question.direction;
        results[question.factor] += score;
        counts[question.factor]++;
      }
    });
    console.log('Raw Scores:', results);
    console.log('Question Counts:', counts);
    Object.keys(results).forEach((key) => {
      const factor = key as keyof typeof results;
      const calculatedScore = results[factor] / (counts[factor] * 5);
  
      // Calculate percentage, double it, and cap it at 100
      results[factor] = Math.min(93, Math.max(0, Math.round(calculatedScore * 100 * 1.75)));
      console.log(`${factor} Final Percentage:`, results[factor]);
    });
  
    setScores(results);
    console.log('Final Scores:', results);
  };
  

  if (currentQuestion === -1) {
    return <LandingPage onStart={startTest} />;
  }

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (showResults) {
    return <Results scores={scores} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Brain className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mind Match Personality Test</h1>
          <p className="text-gray-600">
            Discover your personality traits based on the Five Factor Model of personality
          </p>
        </header>

        <div className="mb-8">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-blue-600">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        <TestQuestion
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          value={answers[currentQuestion] || 0}
        />
      </div>
    </div>
  );
}

export default App;