import React from 'react';
import type { Question } from '../data/questions';

interface TestQuestionProps {
  question: Question;
  onAnswer: (value: number) => void;
  value: number;
}

export default function TestQuestion({ question, onAnswer, value }: TestQuestionProps) {
  const options = [
    { value: 1, label: 'Disagree Strongly' },
    { value: 2, label: 'Disagree a Little' },
    { value: 3, label: 'Neutral' },
    { value: 4, label: 'Agree a Little' },
    { value: 5, label: 'Agree Strongly' },
  ];

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-medium mb-4 text-gray-800">{question.text}</h3>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className={`px-4 py-2 rounded-lg transition-all ${
              value === option.value
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}