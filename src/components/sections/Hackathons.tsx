import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon } from 'lucide-react';
export function Hackathons() {
  return <div>
      <SectionTitle>Hackathons</SectionTitle>
      <div className="bg-gray-900 p-4 rounded mt-3">
        <div className="mb-2">
          <div className="flex justify-between items-start">
            <h3 className="text-gray-200 font-semibold">
              NLP Regression: Amazon Product Length Prediction
            </h3>
            <a href="https://www.kaggle.com/code/umitsahoo/nlp-with-regression" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
              <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D]" />
              Code
            </a>
          </div>
          <p className="text-xs text-[#5DC22D] mt-1">
            Natural Language Processing, Regression Analysis, Python, Keras
          </p>
        </div>
        <ul className="space-y-1">
          <li className="flex items-start text-gray-400">
            <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
            <span>
              Formulated an{' '}
              <span className="font-semibold text-[#5DC22D]">NLP model</span>{' '}
              using{' '}
              <span className="font-semibold text-[#5DC22D]">TensorFlow</span>{' '}
              and{' '}
              <span className="font-semibold text-[#5DC22D]">
                Keras regression
              </span>{' '}
              with <span className="font-semibold text-[#5DC22D]">ReLU</span>{' '}
              activation to predict product length on{' '}
              <span className="font-semibold text-[#5DC22D]">
                regression analysis
              </span>{' '}
              on Amazon dataset of{' '}
              <span className="font-semibold text-[#5DC22D]">
                2.2 million products
              </span>{' '}
              to enhance packaging and customer satisfaction.
            </span>
          </li>
          <li className="flex items-start text-gray-400">
            <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
            <span>
              Optimized{' '}
              <span className="font-semibold text-[#5DC22D]">
                text vectorization
              </span>{' '}
              (vocab size:{' '}
              <span className="font-semibold text-[#5DC22D]">10,000</span>, max
              sequence length: 200 tokens) achieved excellent training loss:{' '}
              <span className="font-semibold text-[#5DC22D]">0.38121589</span>{' '}
              and validation loss:{' '}
              <span className="font-semibold text-[#5DC22D]">0.31848289</span>.
            </span>
          </li>
        </ul>
      </div>
    </div>;
}