
import React, { useState } from 'react';

interface QuizPageProps {
  onBack: () => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ onBack }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const questions = [
    { q: "What do you enjoy most in your free time?", a: ["Solving puzzles/coding", "Creating art/drawing", "Managing events", "Helping others"] },
    { q: "How do you prefer to work?", a: ["Independently with data", "Collaborating on ideas", "Leading a team", "One-on-one interaction"] },
    { q: "Which subject fascinated you most?", a: ["Math/Science", "Literature/Arts", "Economics/Business", "Social Studies"] }
  ];

  const handleAnswer = (idx: number) => {
    const nextAnswers = [...answers, idx];
    if (step < questions.length - 1) {
      setAnswers(nextAnswers);
      setStep(step + 1);
    } else {
      // Basic logic for mock result
      const topAnswer = nextAnswers[0];
      const results = ["Software Engineer", "Creative Designer", "Business Manager", "Psychologist/Counselor"];
      setResult(results[topAnswer]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <button onClick={onBack} className="absolute top-8 left-8 text-gray-500 hover:text-indigo-600 flex items-center gap-2">
        <i className="fas fa-chevron-left"></i> Back to Home
      </button>

      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="h-2 bg-gray-100">
          <div className="h-full bg-indigo-600 transition-all duration-500" style={{ width: `${((step + 1) / questions.length) * 100}%` }}></div>
        </div>

        <div className="p-10">
          {!result ? (
            <>
              <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-2 block">Question {step + 1} of {questions.length}</span>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">{questions[step].q}</h2>
              <div className="space-y-4">
                {questions[step].a.map((ans, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-indigo-600 hover:bg-indigo-50 transition font-medium text-gray-700"
                  >
                    {ans}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-3xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
              <p className="text-gray-500 mb-8">Based on your answers, you're a great fit for:</p>
              <div className="bg-indigo-600 text-white p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold">{result}</h3>
              </div>
              <button onClick={onBack} className="bg-gray-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition">
                Return to Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
