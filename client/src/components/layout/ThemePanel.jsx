import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sun, Moon } from 'lucide-react';

const ThemePanel = ({ isOpen, onClose }) => {
  const {
    theme,
    sidebarColor,
    navbarColor,
    navbarVisible,
    fontSize,
    borderRadius,
    animationsEnabled,
    compactMode,
    sidebarFixed,
    updateTheme,
    updateSidebarColor,
    updateNavbarColor,
    toggleNavbarVisible,
    updateFontSize,
    updateBorderRadius,
    toggleAnimations,
    toggleCompactMode,
    toggleSidebarFixed,
    resetToDefault,
  } = useTheme();

  const sidebarColors = [
    { name: 'blue', class: 'bg-blue-600', label: 'Blue' },
    { name: 'purple', class: 'bg-purple-600', label: 'Purple' },
    { name: 'green', class: 'bg-green-600', label: 'Green' },
    { name: 'red', class: 'bg-red-600', label: 'Red' },
    { name: 'indigo', class: 'bg-indigo-600', label: 'Indigo' },
    { name: 'pink', class: 'bg-pink-600', label: 'Pink' },
    { name: 'teal', class: 'bg-teal-600', label: 'Teal' },
    { name: 'gray', class: 'bg-gray-600', label: 'Gray' },
  ];

  const themePresets = [
    { name: 'light', label: 'Light', icon: Sun, colors: { primary: 'blue', secondary: 'gray' } },
    { name: 'dark', label: 'Dark', icon: Moon, colors: { primary: 'blue', secondary: 'gray' } },
    { name: 'ocean', label: 'Ocean', icon: Sun, colors: { primary: 'teal', secondary: 'blue' } },
    { name: 'forest', label: 'Forest', icon: Sun, colors: { primary: 'green', secondary: 'gray' } },
    { name: 'sunset', label: 'Sunset', icon: Sun, colors: { primary: 'red', secondary: 'pink' } },
    { name: 'lavender', label: 'Lavender', icon: Sun, colors: { primary: 'purple', secondary: 'indigo' } },
  ];

  const panelVariants = {
    closed: { x: '100%' },
    open: { x: 0 }
  };

  const ToggleSwitch = ({ checked, onChange }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-4 w-8 items-center rounded-full transition-colors ${
        checked ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
      }`}
    >
      <span
        className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-4' : 'translate-x-0.5'
        }`}
      />
    </button>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed right-0 top-0 h-full w-72 bg-white dark:bg-gray-800 shadow-2xl border-l border-gray-200 dark:border-gray-700 z-50"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Theme Settings
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4 overflow-y-auto h-full pb-24">
              {/* Theme Presets */}
              <div>
                <h4 className="text-xs font-medium text-gray-900 dark:text-white mb-2">
                  Theme Presets
                </h4>
                <div className="grid grid-cols-2 gap-1">
                  {themePresets.map((preset) => {
                    const Icon = preset.icon;
                    return (
                      <button
                        key={preset.name}
                        onClick={() => {
                          if (preset.name === 'dark') {
                            updateTheme('dark');
                            updateSidebarColor('blue');
                          } else if (preset.name === 'light') {
                            updateTheme('light');
                            updateSidebarColor('blue');
                          } else if (preset.name === 'ocean') {
                            updateTheme('light');
                            updateSidebarColor('teal');
                            updateNavbarColor('colored');
                          } else if (preset.name === 'forest') {
                            updateTheme('light');
                            updateSidebarColor('green');
                            updateNavbarColor('colored');
                          } else if (preset.name === 'sunset') {
                            updateTheme('light');
                            updateSidebarColor('red');
                            updateNavbarColor('colored');
                          } else if (preset.name === 'lavender') {
                            updateTheme('light');
                            updateSidebarColor('purple');
                            updateNavbarColor('colored');
                          }
                        }}
                        className={`p-2 border rounded-md text-xs font-medium transition-all ${
                          (preset.name === 'light' && theme === 'light' && sidebarColor === 'blue') ||
                          (preset.name === 'dark' && theme === 'dark') ||
                          (preset.name === 'ocean' && theme === 'light' && sidebarColor === 'teal') ||
                          (preset.name === 'forest' && theme === 'light' && sidebarColor === 'green') ||
                          (preset.name === 'sunset' && theme === 'light' && sidebarColor === 'red') ||
                          (preset.name === 'lavender' && theme === 'light' && sidebarColor === 'purple')
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600'
                            : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <Icon className="w-3 h-3 mx-auto mb-1" />
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Theme Toggle */}
              <div>
                <h4 className="text-xs font-medium text-gray-900 dark:text-white mb-2">
                  Quick Mode
                </h4>
                <div className="grid grid-cols-2 gap-1">
                  <button
                    onClick={() => updateTheme('light')}
                    className={`p-2 border rounded-md text-xs font-medium transition-all ${
                      theme === 'light'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 text-gray-600 hover:border-gray-400'
                    }`}
                  >
                    <Sun className="w-3 h-3 mx-auto mb-1" />
                    Light
                  </button>
                  <button
                    onClick={() => updateTheme('dark')}
                    className={`p-2 border rounded-md text-xs font-medium transition-all ${
                      theme === 'dark'
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600'
                        : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <Moon className="w-3 h-3 mx-auto mb-1" />
                    Dark
                  </button>
                </div>
              </div>

              {/* Sidebar Color */}
              <div>
                <h4 className="text-xs font-medium text-gray-900 dark:text-white mb-2">
                  Sidebar Color
                </h4>
                <div className="grid grid-cols-4 gap-1">
                  {sidebarColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => updateSidebarColor(color.name)}
                      className={`w-8 h-8 rounded-md ${color.class} transition-all ${
                        sidebarColor === color.name
                          ? 'ring-2 ring-offset-1 ring-gray-400 dark:ring-gray-500'
                          : 'hover:ring-2 hover:ring-offset-1 hover:ring-gray-300'
                      }`}
                      title={color.label}
                    />
                  ))}
                </div>
              </div>

              {/* Navbar Color */}
              <div>
                <h4 className="text-xs font-medium text-gray-900 dark:text-white mb-2">
                  Navbar Style
                </h4>
                <div className="grid grid-cols-2 gap-1">
                  <button
                    onClick={() => updateNavbarColor('white')}
                    className={`p-2 border rounded-md text-xs font-medium transition-all ${
                      navbarColor === 'white'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 text-gray-600 hover:border-gray-400'
                    }`}
                  >
                    Light
                  </button>
                  <button
                    onClick={() => updateNavbarColor('colored')}
                    className={`p-2 border rounded-md text-xs font-medium transition-all ${
                      navbarColor === 'colored'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 text-gray-600 hover:border-gray-400'
                    }`}
                  >
                    Colored
                  </button>
                </div>
              </div>

              {/* Font Size */}
              <div>
                <h4 className="text-xs font-medium text-gray-900 dark:text-white mb-2">
                  Font Size
                </h4>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-600 dark:text-gray-400">S</span>
                  <input
                    type="range"
                    min="12"
                    max="18"
                    value={fontSize}
                    onChange={(e) => updateFontSize(parseInt(e.target.value))}
                    className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-xs text-gray-600 dark:text-gray-400">L</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium min-w-[24px]">{fontSize}px</span>
                </div>
              </div>

              {/* Border Radius */}
              <div>
                <h4 className="text-xs font-medium text-gray-900 dark:text-white mb-2">
                  Border Radius
                </h4>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-600 dark:text-gray-400">□</span>
                  <input
                    type="range"
                    min="0"
                    max="16"
                    value={borderRadius}
                    onChange={(e) => updateBorderRadius(parseInt(e.target.value))}
                    className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-xs text-gray-600 dark:text-gray-400">◯</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium min-w-[24px]">{borderRadius}px</span>
                </div>
              </div>

              {/* Animations */}
              <div>
                <h4 className="text-xs font-medium text-gray-900 dark:text-white mb-2">
                  Animations
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Enable animations
                  </span>
                  <ToggleSwitch checked={animationsEnabled} onChange={toggleAnimations} />
                </div>
              </div>

              {/* Layout Options */}
              <div>
                <h4 className="text-xs font-medium text-gray-900 dark:text-white mb-2">
                  Layout
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Show navbar
                    </span>
                    <ToggleSwitch checked={navbarVisible} onChange={toggleNavbarVisible} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Compact mode
                    </span>
                    <ToggleSwitch checked={compactMode} onChange={toggleCompactMode} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Sidebar fixed
                    </span>
                    <ToggleSwitch checked={sidebarFixed} onChange={toggleSidebarFixed} />
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={resetToDefault}
                  className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-xs font-medium"
                >
                  Reset to Default
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ThemePanel;
