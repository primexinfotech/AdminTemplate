import { useState } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { 
  Search, 
  Bell, 
  Plus, 
  Download, 
  Palette, 
  ChevronDown,
  Coins,
  Menu
} from 'lucide-react';

const Header = ({ onThemeToggle }) => {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const { compactMode } = useTheme();
  const [notifications] = useState(3);

  return (
    <motion.header 
      initial={{ marginLeft: isCollapsed ? '64px' : '256px' }}
      animate={{ marginLeft: isCollapsed ? '64px' : '256px' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30"
    >
      <div className={`flex items-center justify-between ${compactMode ? 'px-4 py-1.5' : 'px-6 py-2'}`}>
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleSidebar}
            className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            aria-label="Toggle Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Orders Management
          </h2>
          <div className="flex items-center space-x-2">
            <button className={`${compactMode ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm'} bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1`}>
              <Plus className="w-4 h-4" />
              <span>Add Order</span>
            </button>
            <button className={`${compactMode ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm'} bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center space-x-1`}>
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search orders..." 
              className={`${compactMode ? 'w-48 py-1.5' : 'w-64 py-2'} pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          {/* Notifications */}
          <div className="relative">
            <button className="relative p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
          </div>

          {/* Credits */}
          <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-2 rounded-lg">
            <Coins className="w-4 h-4" />
            <span className="text-sm font-medium">Credits: 1,247</span>
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40" 
                alt="Profile" 
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">John Doe</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={onThemeToggle}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Palette className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
