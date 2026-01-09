
import React, { useState } from 'react';

interface QuizPageProps {
  onBack: () => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ onBack }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<{ category: string; description: string } | null>(null);

  const questions = [
    { q: "1. Which activity do you enjoy the most?", a: ["Solving puzzles or logical problems", "Drawing, designing, or editing", "Talking and convincing people", "Helping or teaching others"] },
    { q: "2. Which subject do you like the most?", a: ["Mathematics / Computer Science", "Arts / Design / Media", "Business / Economics", "Biology / Social Science"] },
    { q: "3. How do you prefer to work?", a: ["Alone with full focus", "In a creative environment", "With a team and discussions", "Directly with people"] },
    { q: "4. What is your strongest skill?", a: ["Logical thinking", "Creativity", "Communication", "Empathy and patience"] },
    { q: "5. Which tool excites you the most?", a: ["Laptop & coding tools", "Camera, design software", "Presentation & spreadsheets", "Books, notes, or counseling tools"] },
    { q: "6. What kind of job do you imagine yourself in?", a: ["Technical / IT-related", "Creative / Media-related", "Business / Management", "Service / Education / Healthcare"] },
    { q: "7. How do you handle problems?", a: ["Analyze and find logical solutions", "Think creatively", "Discuss and negotiate", "Support and guide others"] },
    { q: "8. What motivates you more?", a: ["Learning new technology", "Expressing ideas visually", "Leadership and growth", "Making a difference in lives"] },
    { q: "9. Which work environment do you prefer?", a: ["Office or remote system", "Studio or flexible workspace", "Corporate environment", "Schools, hospitals, or NGOs"] },
    { q: "10. Are you comfortable with numbers and data?", a: ["Very comfortable", "Somewhat", "Only basic", "Not really"] },
    { q: "11. Do you enjoy public speaking or presentations?", a: ["No, I prefer behind-the-scenes work", "Sometimes", "Yes, I enjoy it", "Only if it helps others"] },
    { q: "12. Which task sounds most interesting?", a: ["Writing code / debugging", "Designing posters or videos", "Marketing or managing projects", "Teaching or counseling"] },
    { q: "13. How do you react under pressure?", a: ["Stay calm and logical", "Find creative solutions", "Take charge and lead", "Stay supportive and patient"] },
    { q: "14. What is more important to you in a job?", a: ["Skill development", "Creativity and freedom", "Salary and career growth", "Job satisfaction and service"] },
    { q: "15. Which role sounds best to you?", a: ["Software Developer / Data Analyst", "Designer / Content Creator", "Manager / Sales / HR", "Teacher / Healthcare / Social Worker"] }
  ];

  const handleAnswer = (idx: number) => {
    const nextAnswers = [...answers, idx];
    if (step < questions.length - 1) {
      setAnswers(nextAnswers);
      setStep(step + 1);
    } else {
      calculateResult(nextAnswers);
    }
  };

  const calculateResult = (finalAnswers: number[]) => {
    const counts = [0, 0, 0, 0]; // Index 0:A, 1:B, 2:C, 3:D
    finalAnswers.forEach(ans => counts[ans]++);

    const maxVal = Math.max(...counts);
    const maxIdx = counts.indexOf(maxVal);

    const outcomes = [
      { category: "IT / Technical Sector", description: "You have a logical and analytical mind. You are well-suited for roles in Software Development, Data Science, AI, or Cyber Security." },
      { category: "Creative / Media / Design Sector", description: "Your imagination is your greatest asset. You should explore Graphic Design, UI/UX, Animation, or Content Creation." },
      { category: "Business / Management / Corporate Sector", description: "You are a natural leader and communicator. Focus on Business Administration, Marketing, HR, or Entrepreneurship." },
      { category: "Education / Healthcare / Social Service Sector", description: "You are driven by empathy and a desire to help. Look into Teaching, Healthcare, Research, or Public Service." }
    ];

    setResult(outcomes[maxIdx]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <button onClick={onBack} className="absolute top-8 left-8 text-gray-500 hover:text-indigo-600 flex items-center gap-2 font-medium">
        <i className="fas fa-chevron-left"></i> Back to Home
      </button>

      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="h-2 bg-gray-100">
          <div className="h-full bg-indigo-600 transition-all duration-500" style={{ width: `${((step + 1) / questions.length) * 100}%` }}></div>
        </div>

        <div className="p-8 md:p-12">
          {!result ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase">Question {step + 1} of {questions.length}</span>
                <span className="text-gray-400 text-xs font-medium">{Math.round(((step + 1) / questions.length) * 100)}% Complete</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-tight">{questions[step].q}</h2>
              <div className="space-y-4">
                {questions[step].a.map((ans, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className="group w-full text-left p-5 rounded-2xl border-2 border-gray-100 hover:border-indigo-600 hover:bg-indigo-50 transition-all flex items-center gap-4 shadow-sm hover:shadow-md"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-gray-500 font-bold text-sm transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-indigo-900">{ans}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner animate-bounce">
                <i className="fas fa-compass text-4xl"></i>
              </div>
              <h2 className="text-xl text-gray-500 font-medium mb-2">Your Career Path Analysis</h2>
              <h3 className="text-3xl font-black text-gray-800 mb-4">{result.category}</h3>
              <div className="bg-gray-50 p-6 rounded-2xl mb-10 border border-gray-100">
                <p className="text-gray-600 leading-relaxed italic text-lg">"{result.description}"</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                <div className="p-4 bg-emerald-50 rounded-xl text-emerald-700 font-bold">
                  High Fit
                </div>
                <div className="p-4 bg-indigo-50 rounded-xl text-indigo-700 font-bold">
                  Top Recommended
                </div>
              </div>

              <button 
                onClick={onBack} 
                className="w-full bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition transform active:scale-95 shadow-xl flex items-center justify-center gap-2"
              >
                Go to Career Explorer <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
