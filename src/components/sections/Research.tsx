import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export function Research() {
  return (
    <div>
      <SectionTitle>Research - Machine Learning</SectionTitle>
      <div className="space-y-4 mt-3">
        {/* Box 1: University and Role */}
        <div className="bg-gray-900 p-4 rounded">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg text-gray-200 font-semibold">
                C.V. Raman Global University
              </h3>
              <p className="text-lg text-gray-400">Undergraduate Researcher</p>
            </div>
            <span className="text-[#5DC22D] text-xs">12/2022 - 06/2023</span>
          </div>
        </div>

        {/* Box 2: Glaucoma Project */}
        <div className="bg-gray-900 p-4 rounded">
          <div className="flex justify-between items-start">
            <h3 className="text-lg text-gray-200 font-semibold">
              Early-Stage Glaucoma Detection
            </h3>
            <a href="https://github.com/s0oraj/Early_Stage_Glaucoma_Detection/tree/main" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
              <GithubIcon size={8} className="mr-1 text-[#5DC22D]" />
              Repo
            </a>
          </div>
          <p className="text-[#5DC22D] italic mt-1 mb-1">
            Machine Learning, CNN, Transfer Learning, Python
          </p>
          <ul className="space-y-1">
            <li className="flex items-start text-lg text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Developing an{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Extreme Learning Machine Model
                </span>{' '}
                with{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Convolutional Neural Networks (CNN) and Transfer Learning
                </span>
                , achieving{' '}
                <span className="font-semibold text-[#5DC22D]">96%</span>{' '}
                accuracy in vision preservation for early-stage glaucoma
                detection.
              </span>
            </li>
            <li className="flex items-start text-lg text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Conducted research at{' '}
                <span className="font-semibold text-[#5DC22D]">
                  C.V. Raman Global University
                </span>{' '}
                as{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Undergraduate Researcher
                </span>{' '}
                in Machine Learning department from{' '}
                <span className="font-semibold text-[#5DC22D]">
                  12/2022 -- 06/2023
                </span>
                .
              </span>
            </li>
          </ul>
        </div>

        {/* Box 3: Alzheimer's Project */}
        <div className="bg-gray-900 p-4 rounded">
          <div className="flex justify-between items-start">
            <h3 className="text-lg text-gray-200 font-semibold">
              Alzheimer's Disease Diagnostic System
            </h3>
            <div className="flex gap-1">
              <a href="https://ieeexplore.ieee.org/document/10306481" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D]" />
                Paper
              </a>
              <a href="https://github.com/s0oraj/Alizhiemers_Detection_Transfer_Learning" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <GithubIcon size={8} className="mr-1 text-[#5DC22D]" />
                Repo
              </a>
            </div>
          </div>
          <p className="text-[#5DC22D] italic mt-1 mb-1">
            Image Processing, DWT, SWT, CLAHE, Python
          </p>
          <ul className="space-y-1">
            <li className="flex items-start text-lg text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Employed{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Advanced image preprocessing
                </span>{' '}
                techniques, including{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Discrete Wavelet Transform (DWT)
                </span>
                ,{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Stationary Wavelet Transform (SWT)
                </span>
                , and{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Contrast Limited Adaptive Histogram Equalization (CLAHE)
                </span>{' '}
                for hippocampus-based analysis.
              </span>
            </li>
            <li className="flex items-start text-lg text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Achieved{' '}
                <span className="font-semibold text-[#5DC22D]">
                  98% accuracy
                </span>{' '}
                in Alzheimer's disease detection through optimized neural
                network architecture and preprocessing pipeline implementation.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}