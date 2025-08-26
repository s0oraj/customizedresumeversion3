import React from 'react';
import { Resume } from './components/Resume';
import { theme } from './theme/tailwind-var';

export function App() {
  return (
    <div className={`flex w-full min-h-screen ${theme.bgMain}`}>
      <Resume />
    </div>
  );
}