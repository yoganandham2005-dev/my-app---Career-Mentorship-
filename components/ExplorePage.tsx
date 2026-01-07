
import React, { useState } from 'react';
import { JOB_SECTORS } from '../constants';
import { JobSector } from '../types';

interface ExplorePageProps {
  onBack: () => void;
}

const ExplorePage: React.FC<ExplorePageProps> = ({ onBack }) => {
  const [selectedJob, setSelectedJob] = useState<JobSector | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = JOB_SECTORS.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    job.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm border-b p-4 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center gap-6">
          <button onClick={onBack} className="text-gray-500 hover:text-indigo-600">
            <i className="fas fa-arrow-left text-xl"></i>
          </button>
          <div className="relative flex-1">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input 
              type="text" 
              placeholder="Search careers, skills, or industries..." 
              className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore Careers</h2>
        <p className="text-gray-500 mb-8">Detailed roadmaps for {JOB_SECTORS.length} different paths</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map(job => (
            <div 
              key={job.id} 
              onClick={() => setSelectedJob(job)}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <i className={`fas ${job.icon} text-xl`}></i>
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">{job.title}</h4>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{job.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">{job.category}</span>
                <i className="fas fa-arrow-right text-gray-300 text-sm"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Job Details */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden relative flex flex-col animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition z-10"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="flex flex-col md:flex-row h-full overflow-y-auto">
              <div className="md:w-1/3 bg-indigo-600 p-8 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`fas ${selectedJob.icon} text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{selectedJob.title}</h3>
                <p className="opacity-80 mb-8 leading-relaxed">{selectedJob.description}</p>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <span className="text-xs uppercase opacity-60 block mb-1">Estimated Salary</span>
                    <span className="text-xl font-bold">{selectedJob.salary}</span>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 p-8 md:p-12 overflow-y-auto">
                <div className="mb-10">
                  <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-6">
                    <i className="fas fa-map-signs text-indigo-600"></i> Career Roadmap
                  </h4>
                  <div className="space-y-6 relative ml-4">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-100"></div>
                    {selectedJob.roadmap.map((step, idx) => (
                      <div key={idx} className="flex gap-4 relative">
                        <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full border-4 border-white bg-indigo-600 shadow-sm"></div>
                        <div>
                          <p className="font-semibold text-gray-800">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                    <i className="fas fa-list-check text-indigo-600"></i> Requirements
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg text-gray-700 text-sm">
                        <i className="fas fa-check-circle text-emerald-500"></i>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
