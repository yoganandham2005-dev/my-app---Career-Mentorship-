
import React, { useState, useEffect } from 'react';
import { View, UserProfile, JobSector } from './types';
import { MOTIVATIONAL_QUOTES, JOB_SECTORS } from './constants';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ExplorePage from './components/ExplorePage';
import ProfilePage from './components/ProfilePage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('auth');
  const [user, setUser] = useState<UserProfile | null>(null);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Random quote on mount
    setQuote(MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]);
  }, []);

  const handleLogin = (email: string) => {
    setUser({
      email,
      firstName: 'Jane',
      lastName: 'Doe',
      age: '22',
      degree: 'B.Tech CS',
      dob: '2002-05-15',
      passedOutYear: '2024'
    });
    setCurrentView('home');
  };

  const handleSignup = (userData: UserProfile) => {
    setUser(userData);
    setCurrentView('home');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('auth');
  };

  const renderView = () => {
    switch (currentView) {
      case 'auth':
        return <AuthPage onLogin={handleLogin} onSignup={handleSignup} />;
      case 'home':
        return (
          <HomePage 
            user={user} 
            quote={quote} 
            onNavigate={setCurrentView} 
            onLogout={handleLogout}
          />
        );
      case 'quiz':
        return <QuizPage onBack={() => setCurrentView('home')} />;
      case 'explore':
        return <ExplorePage onBack={() => setCurrentView('home')} />;
      case 'profile':
        return <ProfilePage user={user!} setUser={setUser} onBack={() => setCurrentView('home')} />;
      default:
        return <AuthPage onLogin={handleLogin} onSignup={handleSignup} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderView()}
    </div>
  );
};

export default App;
