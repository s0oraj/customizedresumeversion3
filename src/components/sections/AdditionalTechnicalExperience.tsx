import React from 'react';
import { theme } from '../../theme/tailwind-var';

export function AdditionalTechnicalExperience() {
  return <div className={`border-b ${theme.borderPrimary} pb-4 mb-6`}>
      <h2 className={`text-2xl font-bold text-center ${theme.textHeading}`} style={{paddingTop: '20px'}} > {/* Adding extra padding before start of second page */}
        Additional Technical Experience
      </h2>
    </div>;
}