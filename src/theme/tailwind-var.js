// src/theme/tailwind-var.js

// COHESITY THEME (Current)
export const colors = {
  // Text Colors (EXISTING - KEPT AS IS)
  textHeading: 'text-gray-100',
  textBody: 'text-gray-200', 
  textSecondary: 'text-gray-300',
  textMuted: 'text-gray-400',
  textSubtle: 'text-gray-500',
  textBlack: 'text-black',
  
  // Background Colors (EXISTING - KEPT AS IS)
  bgMain: 'bg-black',           // Main app background
  bgCard: 'bg-gray-900',
  bgSubtle: 'bg-gray-800', 
  bgHover: 'bg-gray-700',
  
  // Border Colors (EXISTING - KEPT AS IS)
  borderPrimary: 'border-gray-800',
  borderAccent: 'border-gray-700',
  
  // Brand Colors (EXISTING - KEPT AS IS)
  brandPrimary: 'text-[#5DC22D]',
  bgBrandPrimary: 'bg-[#5DC22D]',

  // NEW COLORS FOUND IN UI DIRECTORY
  // UI Component Colors (from hardcoded values in UI files)
  uiTextPrimary: 'text-slate-800',      // Main headings in UI components
  uiTextSecondary: 'text-slate-700',    // Secondary text in UI components  
  uiTextTertiary: 'text-slate-600',     // Body text in UI components
  uiTextMuted: 'text-slate-500',        // Muted text like locations
  
  // UI Background Colors
  uiBgPrimary: 'bg-slate-100',          // Main UI component backgrounds
  uiBgHover: 'bg-indigo-100',           // Hover states for links/buttons
  
  // UI Border Colors  
  uiBorderAccent: 'border-indigo-100',  // Left borders on timeline items
  
  // UI Brand/Accent Colors
  uiBrandPrimary: 'text-indigo-600',    // Primary brand color in UI
  uiBrandSecondary: 'text-indigo-700',  // Secondary brand color for hovers
  uiBrandTertiary: 'text-indigo-800',   // Tertiary brand color for skills
};

// AMAZON THEME (Just swap this object)
export const amazonColors = {
  // EXISTING COLORS (KEPT AS IS)
  textHeading: 'text-white',
  textBody: 'text-gray-100',
  textSecondary: 'text-gray-200', 
  textMuted: 'text-gray-300',
  textSubtle: 'text-gray-400',
  textBlack: 'text-black',
  
  bgMain: 'bg-[#232F3E]',       // Amazon dark blue background
  bgCard: 'bg-[#37475A]',
  bgSubtle: 'bg-[#2D3748]',
  bgHover: 'bg-[#4A5568]',
  
  borderPrimary: 'border-[#37475A]',
  borderAccent: 'border-[#4A5568]',
  
  brandPrimary: 'text-[#FF9900]',
  bgBrandPrimary: 'bg-[#FF9900]',

  // NEW UI COLORS - Amazon themed equivalents
  uiTextPrimary: 'text-gray-100',
  uiTextSecondary: 'text-gray-200',
  uiTextTertiary: 'text-gray-300',
  uiTextMuted: 'text-gray-400',
  
  uiBgPrimary: 'bg-[#37475A]',
  uiBgHover: 'bg-[#FF9900]/10',        // Orange tint for hover
  
  uiBorderAccent: 'border-[#FF9900]',
  
  uiBrandPrimary: 'text-[#FF9900]',
  uiBrandSecondary: 'text-[#FFB84D]',   // Lighter orange for hovers
  uiBrandTertiary: 'text-[#CC7700]',    // Darker orange
};

// GOOGLE THEME
export const googleColors = {
  // EXISTING COLORS (KEPT AS IS)
  textHeading: 'text-white',
  textBody: 'text-gray-100',
  textSecondary: 'text-gray-200',
  textMuted: 'text-gray-300', 
  textSubtle: 'text-gray-400',
  textBlack: 'text-black',
  
  bgMain: 'bg-[#1a1a1a]',       // Google dark background
  bgCard: 'bg-[#2d2d2d]',
  bgSubtle: 'bg-[#242424]',
  bgHover: 'bg-[#3d3d3d]',
  
  borderPrimary: 'border-[#2d2d2d]',
  borderAccent: 'border-[#3d3d3d]',
  
  brandPrimary: 'text-[#4285F4]',
  bgBrandPrimary: 'bg-[#4285F4]',

  // NEW UI COLORS - Google themed equivalents
  uiTextPrimary: 'text-gray-100',
  uiTextSecondary: 'text-gray-200',
  uiTextTertiary: 'text-gray-300',
  uiTextMuted: 'text-gray-400',
  
  uiBgPrimary: 'bg-[#2d2d2d]',
  uiBgHover: 'bg-[#4285F4]/10',        // Blue tint for hover
  
  uiBorderAccent: 'border-[#4285F4]',
  
  uiBrandPrimary: 'text-[#4285F4]',
  uiBrandSecondary: 'text-[#5A95F5]',   // Lighter blue for hovers  
  uiBrandTertiary: 'text-[#3367D6]',    // Darker blue
};

// CURRENT ACTIVE THEME - Change this line to switch themes!
export const theme = colors; // Change to amazonColors, googleColors, etc.