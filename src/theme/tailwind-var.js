// src/theme/tailwind-var.js

// COHESITY THEME (Current)
export const colors = {
  // Text Colors
  textHeading: 'text-gray-100',
  textBody: 'text-gray-200', 
  textSecondary: 'text-gray-300',
  textMuted: 'text-gray-400',
  textSubtle: 'text-gray-500',
  textBlack: 'text-black',
  
  // Background Colors
  bgCard: 'bg-gray-900',
  bgSubtle: 'bg-gray-800', 
  bgHover: 'bg-gray-700',
  
  // Border Colors
  borderPrimary: 'border-gray-800',
  borderAccent: 'border-gray-700',
  
  // Brand Colors
  brandPrimary: 'text-[#5DC22D]',
  bgBrandPrimary: 'bg-[#5DC22D]',
};

// AMAZON THEME (Just swap this object)
export const amazonColors = {
  textHeading: 'text-white',
  textBody: 'text-gray-100',
  textSecondary: 'text-gray-200', 
  textMuted: 'text-gray-300',
  textSubtle: 'text-gray-400',
  textBlack: 'text-black',
  
  bgCard: 'bg-[#37475A]',
  bgSubtle: 'bg-[#2D3748]',
  bgHover: 'bg-[#4A5568]',
  
  borderPrimary: 'border-[#37475A]',
  borderAccent: 'border-[#4A5568]',
  
  brandPrimary: 'text-[#FF9900]',
  bgBrandPrimary: 'bg-[#FF9900]',
};

// GOOGLE THEME
export const googleColors = {
  textHeading: 'text-white',
  textBody: 'text-gray-100',
  textSecondary: 'text-gray-200',
  textMuted: 'text-gray-300', 
  textSubtle: 'text-gray-400',
  textBlack: 'text-black',
  
  bgCard: 'bg-[#2d2d2d]',
  bgSubtle: 'bg-[#242424]',
  bgHover: 'bg-[#3d3d3d]',
  
  borderPrimary: 'border-[#2d2d2d]',
  borderAccent: 'border-[#3d3d3d]',
  
  brandPrimary: 'text-[#4285F4]',
  bgBrandPrimary: 'bg-[#4285F4]',
};

// CURRENT ACTIVE THEME - Change this line to switch themes!
export const theme = colors; // Change to amazonColors, googleColors, etc.