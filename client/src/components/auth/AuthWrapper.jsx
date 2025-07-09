
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import WelcomeScreen from './SplashScreen';
import LoginScreen from './LoginScreen';

const AuthWrapper = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState('welcome'); // 'welcome', 'login', 'signup'
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
    </div>;
  }

  if (!user) {
    if (currentScreen === 'welcome') {
      return (
        <WelcomeScreen 
          onLogin={() => setCurrentScreen('login')}
          onSignUp={() => setCurrentScreen('signup')}
        />
      );
    }
    if (currentScreen === 'login') {
      return <LoginScreen onBack={() => setCurrentScreen('welcome')} />;
    }
    if (currentScreen === 'signup') {
      // For now, redirect to login since signup component doesn't exist yet
      return <LoginScreen onBack={() => setCurrentScreen('welcome')} />;
    }
  }

  return children;
};

export default AuthWrapper;
