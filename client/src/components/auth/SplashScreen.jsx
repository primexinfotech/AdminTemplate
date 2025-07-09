import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  LogIn, 
  ArrowRight,
  Building2,
  Shield,
  Zap
} from 'lucide-react';

const WelcomeScreen = ({ onLogin, onSignUp }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md mx-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20"
        >
          {/* Logo/Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
              <Building2 className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Company Name and Date/Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-white text-2xl font-bold mb-4">Welcome Back</h1>
            
            {/* Date and Time Display */}
            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <div className="text-white text-3xl font-bold mb-1">
                {formatTime(currentTime)}
              </div>
              <div className="text-white/80 text-sm">
                {formatDate(currentTime)}
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-8 space-y-3"
          >
            <div className="flex items-center space-x-3 text-white/80 text-sm">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Secure & Reliable</span>
            </div>
            <div className="flex items-center space-x-3 text-white/80 text-sm">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Fast & Efficient</span>
            </div>
            <div className="flex items-center space-x-3 text-white/80 text-sm">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>Enterprise Grade</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="space-y-4"
          >
            {/* Login Button */}
            <motion.button
              onClick={onLogin}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <LogIn className="w-5 h-5" />
              <span>Login to Account</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* SignUp Button */}
            <motion.button
              onClick={onSignUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-white/10 text-white font-semibold rounded-lg shadow-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 flex items-center justify-center space-x-2 border border-white/20"
            >
              <UserPlus className="w-5 h-5" />
              <span>Create New Account</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Powered by */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center mt-8 pt-4 border-t border-white/20"
          >
            <p className="text-white/60 text-xs">Powered by</p>
            <p className="text-white/80 text-sm font-semibold">Primex Infotech</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeScreen;