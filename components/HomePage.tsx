
import React from 'react';
import { UserProfile, View } from '../types';
import { JOB_SECTORS } from '../constants';

interface HomePageProps {
  user: UserProfile | null;
  quote: string;
  onNavigate: (view: View) => void;
  onLogout: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ user, quote, onNavigate, onLogout }) => {
  const highlightedJobs = JOB_SECTORS.slice(0, 3);

  return (
    <div className="pb-12">
      {/* Header */}
      <nav className="bg-white shadow-sm p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <i className="fas fa-graduation-cap text-indigo-600 text-2xl"></i>
            <span className="font-bold text-xl text-gray-800">CareerMentorship</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('profile')}
              className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 border-2 border-transparent hover:border-indigo-300 transition"
            >
              {user?.profilePic ? (
                <img src={user.profilePic} alt="profile" className="w-full h-full rounded-full object-cover" />
              ) : (
                <i className="fas fa-user"></i>
              )}
            </button>
            <button onClick={onLogout} className="text-gray-500 hover:text-red-500 transition">
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Motivational Quote Section */}
      <div className="bg-indigo-600 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <i className="fas fa-quote-left text-3xl opacity-20 mb-4"></i>
          <h2 className="text-2xl md:text-3xl font-light italic leading-relaxed">
            "{quote}"
          </h2>
          <div className="mt-8 w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Main Actions */}
      <div className="max-w-4xl mx-auto -mt-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onClick={() => onNavigate('quiz')}
            className="group glass p-8 rounded-2xl shadow-xl flex flex-col items-center text-center hover:bg-indigo-50 transition transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
              <i className="fas fa-rocket text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">START QUIZ</h3>
            <p className="text-gray-500">Discover which career suits your personality and skills best.</p>
          </button>

          <button 
            onClick={() => onNavigate('explore')}
            className="group glass p-8 rounded-2xl shadow-xl flex flex-col items-center text-center hover:bg-emerald-50 transition transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition">
              <i className="fas fa-compass text-2xl text-emerald-600 group-hover:text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Explore Career</h3>
            <p className="text-gray-500">Browse through 35+ job sectors with detailed roadmaps and salary info.</p>
          </button>
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="max-w-6xl mx-auto mt-20 px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Featured Opportunities</h3>
            <p className="text-gray-500">Popular paths chosen by students this month</p>
          </div>
          <button onClick={() => onNavigate('explore')} className="text-indigo-600 font-semibold hover:underline">
            View All <i className="fas fa-arrow-right ml-1 text-sm"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightedJobs.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                  <i className={`fas ${job.icon} text-xl`}></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{job.title}</h4>
                  <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{job.category}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-emerald-600">{job.salary.split('-')[0]}</span>
                <button onClick={() => onNavigate('explore')} className="text-gray-400 hover:text-indigo-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
