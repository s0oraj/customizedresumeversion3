import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon } from 'lucide-react';

export function Achievements() {
  return (
    <div>
      <SectionTitle>Achievements</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {/* Column 1 */}
        <div className="bg-gray-900 p-4 rounded">
          <div className="flex justify-between items-start">
            <h3 className="text-lg text-gray-200 font-semibold">
              IIT Kanpur Research Internship Offer
            </h3>
            <span className="text-[#5DC22D] text-xs">01/2024</span>
          </div>
          <div className="flex items-start text-lg text-gray-400 mt-1">
            <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
            <p>
              Offered a Research internship by Prof. Tushar Sandhan from IIT
              Kanpur to work on{' '}
              <span className="font-semibold text-[#5DC22D]">
                Image segmentation of the heart for 3D heart model generation
              </span>
              .
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-gray-900 p-4 rounded">
          <div className="flex justify-between items-start">
            <h3 className="text-lg text-gray-200 font-semibold">
              Coding & Competitive Exams
            </h3>
            <span className="text-[#5DC22D] text-xs">05/2024</span>
          </div>
          <div className="space-y-1 mt-1">
            <div className="flex items-start text-lg text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <p>
                Ranked{' '}
                <span className="font-semibold text-[#5DC22D]">Top 9.53%</span> on LeetCode with a{' '}
                <span className="font-semibold text-[#5DC22D]">
                  contest rating of 1755
                </span>{' '}
                <a href="https://leetcode.com/u/s0oraj/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded ml-2">
                  <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D]" />
                  Link
                </a>
              </p>
            </div>
            <div className="flex items-start text-lg text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <p>
                Ranked <span className="font-semibold text-[#5DC22D]">AIR 688</span>{' '}
                out of{' '}
                <span className="font-semibold text-[#5DC22D]">
                  25,000+ candidates (Top 2.752%)
                </span>{' '}
                in C-DAC Common Admission Test 2025.
              </p>
            </div>
          </div>
        </div>

        {/* Full width Amazon & IEEE */}
        <div className="bg-gray-900 p-4 rounded md:col-span-2">
          <div className="flex justify-between items-start">
            <h3 className="text-lg text-gray-200 font-semibold">
              Amazon & IEEE
            </h3>
            <span className="text-[#5DC22D] text-xs">04/2023</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-start text-lg text-gray-400 mt-1">
                <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
                <p>
                  Ranked <span className="font-semibold text-[#5DC22D]">228</span>{' '}
                  globally out of{' '}
                  <span className="font-semibold text-[#5DC22D]">30,000+</span>{' '}
                  teams in the{' '}
                  <span className="font-semibold text-[#5DC22D]">
                    Amazon ML Challenge 2023
                  </span>
                  {' '}
                  <a href="https://www.kaggle.com/code/umitsahoo/nlp-with-regression/notebook" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded ml-2">
                    <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D]" />
                    Python Code
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-start text-lg text-gray-400 mt-1 md:mt-1">
                <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
                <div>
                  <p>
                    Presented at the{' '}
                    <span className="font-semibold text-[#5DC22D]">
                      14th ICCCNT conference 2023
                    </span>{' '}
                    by <span className="font-semibold text-[#5DC22D]">IEEE</span> at{' '}
                    <span className="font-semibold text-[#5DC22D]">IIT Delhi</span>
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <a href="https://ieeexplore.ieee.org/document/10306481" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                      <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D]" />
                      Publication
                    </a>
                    <a href="https://drive.google.com/file/d/1JWcyN7JysQWhkED1CN3ktS-hS7UeeoL7/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                      <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D]" />
                      View PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}