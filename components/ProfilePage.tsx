
import React, { useRef } from 'react';
import { UserProfile } from '../types';

interface ProfilePageProps {
  user: UserProfile;
  setUser: (user: UserProfile) => void;
  onBack: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, setUser, onBack }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profilePic: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="bg-white p-4 flex items-center gap-4 border-b">
        <button onClick={onBack} className="text-gray-500 hover:text-indigo-600">
          <i className="fas fa-arrow-left text-xl"></i>
        </button>
        <h2 className="text-xl font-bold text-gray-800">My Profile</h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="h-48 gradient-bg flex items-end justify-center">
            <div className="relative -mb-16">
              <div 
                onClick={handlePhotoClick}
                className="w-40 h-40 rounded-full border-8 border-white shadow-lg bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer group"
              >
                {user.profilePic ? (
                  <img src={user.profilePic} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  <i className="fas fa-user text-6xl text-gray-400"></i>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <i className="fas fa-camera text-white text-2xl"></i>
                </div>
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
              />
            </div>
          </div>

          <div className="pt-20 pb-10 px-8 text-center border-b">
            <h3 className="text-3xl font-bold text-gray-800">{user.firstName} {user.lastName}</h3>
            <p className="text-gray-500 font-medium">{user.email}</p>
          </div>

          <div className="p-8 md:p-12">
            <h4 className="text-lg font-bold text-gray-800 mb-8 flex items-center gap-2">
              <i className="fas fa-id-card text-indigo-600"></i> Student Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DetailItem label="Age" value={`${user.age} Years`} icon="fa-birthday-cake" />
              <DetailItem label="Degree" value={user.degree} icon="fa-graduation-cap" />
              <DetailItem label="Date of Birth" value={user.dob} icon="fa-calendar-alt" />
              <DetailItem label="Passed Out Year" value={user.passedOutYear} icon="fa-user-graduate" />
            </div>

            <div className="mt-12 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
              <h5 className="font-bold text-indigo-800 mb-2">Mentor Notes</h5>
              <p className="text-indigo-600 text-sm leading-relaxed">
                Your profile is 85% complete. Based on your degree in {user.degree}, you might want to look into the Cyber Security or Software Development sectors. Keep up the great work!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem: React.FC<{ label: string, value: string, icon: string }> = ({ label, value, icon }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
      <i className={`fas ${icon}`}></i>
    </div>
    <div>
      <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">{label}</p>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default ProfilePage;
