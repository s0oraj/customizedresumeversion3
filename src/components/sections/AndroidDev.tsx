import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function AndroidDev() {
  return <div>
      <SectionTitle>Android Development</SectionTitle>
      <div className="space-y-4 mt-3">
        <div className="bg-gray-900 p-4 rounded">
          <div className="flex justify-between items-start">
            <h3 className="text-gray-200 font-semibold">
              Animus - Cryptography Based Social Media App
            </h3>
            <div className="flex gap-1">
              <a href="https://github.com/s0oraj/Animus" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D]" />
                Demo
              </a>
              <a href="https://github.com/s0oraj/animus" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <GithubIcon size={8} className="mr-1 text-[#5DC22D]" />
                Repo
              </a>
            </div>
          </div>
          <p className="text-xs text-[#5DC22D] mt-1 mb-2">
            Android Studio, Java, OpenCV, E2EE, AES, Alan-AI
          </p>
          <ul className="space-y-1">
            <li className="flex items-start text-xs text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Utilized{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Advanced Encryption Standard (AES)
                </span>{' '}
                algorithm to make chats{' '}
                <span className="font-semibold text-[#5DC22D]">
                  End-to-End Encrypted (E2EE)
                </span>
                .
              </span>
            </li>
            <li className="flex items-start text-xs text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Pioneered an in-app{' '}
                <span className="font-semibold text-[#5DC22D]">
                  AI Voice Assistant
                </span>{' '}
                allowing users to navigate the app using voice commands, via{' '}
                <span className="font-semibold text-[#5DC22D]">Alan-AI</span>.
              </span>
            </li>
            <li className="flex items-start text-xs text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Created{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Avatar Creator
                </span>{' '}
                using{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Google ML Kit
                </span>{' '}
                and <span className="font-semibold text-[#5DC22D]">OpenCV</span>{' '}
                for{' '}
                <span className="font-semibold text-[#5DC22D]">
                  image segmentation
                </span>{' '}
                and cartoonization.
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-900 p-4 rounded">
          <div className="flex justify-between items-start">
            <h3 className="text-gray-200 font-semibold">
              SangeetAI - Emotion-Based Music Recommender
            </h3>
            <div className="flex gap-1">
              <a href="https://github.com/s0oraj/SangeetAI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D]" />
                Demo
              </a>
              <a href="https://github.com/s0oraj/SangeetAI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <GithubIcon size={8} className="mr-1 text-[#5DC22D]" />
                Repo
              </a>
            </div>
          </div>
          <p className="text-xs text-[#5DC22D] mt-1 mb-2">
            Python, TensorFlow Lite, VGG19, Android Java
          </p>
          <ul className="space-y-1">
            <li className="flex items-start text-xs text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Built{' '}
                <span className="font-semibold text-[#5DC22D]">
                  VGG19 CNN model
                </span>{' '}
                with transfer learning on{' '}
                <span className="font-semibold text-[#5DC22D]">
                  35K+ FER2013 images
                </span>{' '}
                for 7-class emotion detection, achieving optimized mobile
                inference through{' '}
                <span className="font-semibold text-[#5DC22D]">
                  TensorFlow Lite conversion
                </span>
                .
              </span>
            </li>
            <li className="flex items-start text-xs text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Implemented complete ML pipeline from{' '}
                <span className="font-semibold text-[#5DC22D]">Kaggle API</span>{' '}
                to Android deployment with augmentation (rotation/flip),
                normalization, and{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Adam optimizer with early stopping
                </span>
                .
              </span>
            </li>
            <li className="flex items-start text-xs text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Developed Android app using{' '}
                <span className="font-semibold text-[#5DC22D]">CameraView</span>{' '}
                and{' '}
                <span className="font-semibold text-[#5DC22D]">JCPlayer</span>{' '}
                for real-time emotion-based music recommendations.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>;
}