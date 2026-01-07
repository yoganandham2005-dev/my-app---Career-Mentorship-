
import React, { useState } from 'react';
import { UserProfile } from '../types';

interface AuthPageProps {
  onLogin: (email: string) => void;
  onSignup: (user: UserProfile) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin, onSignup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    age: '',
    degree: '',
    dob: '',
    passedOutYear: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      if (!formData.email || !formData.password) {
        alert("Please fill in all login fields");
        return;
      }
      onLogin(formData.email);
    } else {
      // Signup Validation
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }

      const requiredFields = ['email', 'firstName', 'lastName', 'age', 'degree', 'dob', 'passedOutYear', 'password'];
      const isMissingField = requiredFields.some(field => !formData[field as keyof typeof formData]);

      if (isMissingField) {
        alert("Please fill in all registration fields");
        return;
      }

      onSignup({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age,
        degree: formData.degree,
        dob: formData.dob,
        passedOutYear: formData.passedOutYear
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg px-4 py-12">
      <div className="max-w-md w-full glass p-8 rounded-2xl shadow-2xl transition-all">
        <div className="text-center mb-8">
          <i className="fas fa-graduation-cap text-5xl text-indigo-600 mb-4"></i>
          <h1 className="text-3xl font-bold text-gray-800">Career Mentorship</h1>
          <p className="text-gray-500 mt-2">Empowering your professional journey</p>
        </div>

        <div className="flex mb-6 bg-gray-100 p-1 rounded-lg">
          <button 
            type="button"
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-md transition ${isLogin ? 'bg-white shadow text-indigo-600 font-semibold' : 'text-gray-500'}`}
          >
            Login
          </button>
          <button 
            type="button"
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-md transition ${!isLogin ? 'bg-white shadow text-indigo-600 font-semibold' : 'text-gray-500'}`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" 
            name="email"
            placeholder="E-mail" 
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={formData.email}
            onChange={handleChange}
          />
          
          {!isLogin && (
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                name="firstName"
                placeholder="First Name" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input 
                type="text" 
                name="lastName"
                placeholder="Last Name" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input 
                type="number" 
                name="age"
                placeholder="Age" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                value={formData.age}
                onChange={handleChange}
              />
              <input 
                type="text" 
                name="degree"
                placeholder="Degree" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                value={formData.degree}
                onChange={handleChange}
              />
              <input 
                type="date" 
                name="dob"
                placeholder="D.O.B" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-gray-600"
                value={formData.dob}
                onChange={handleChange}
              />
              <input 
                type="number" 
                name="passedOutYear"
                placeholder="Passed Out Year" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                value={formData.passedOutYear}
                onChange={handleChange}
              />
            </div>
          )}

          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={formData.password}
            onChange={handleChange}
          />

          {!isLogin && (
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password" 
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          )}

          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transform transition active:scale-95 shadow-lg mt-6"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
