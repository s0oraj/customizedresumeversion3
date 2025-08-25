import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export function AndroidDev() {
  return (
    <div>
      <SectionTitle>Android Development</SectionTitle>
      <div className="space-y-4 mt-3">
        <div className="bg-gray-900 p-4 rounded">
          <div className="flex justify-between items-start">
            <h3 className="text-lg text-gray-200 font-semibold">
              Animus - Cryptography Based Social Media App
            </h3>
            <div className="flex gap-1">
              <a href="https://github.com/s0oraj/Animus" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <ExternalLinkIcon size={8} className="mr-1  " style={{ color: 'var(--resume-accent-primary)' }} />
                Demo
              </a>
              <a href="https://github.com/s0oraj/animus" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <GithubIcon size={8} className="mr-1  " style={{ color: 'var(--resume-accent-primary)' }} />
                Repo
              </a>
            </div>
          </div>
          <p className="  italic mt-1 mb-2" style={{ color: 'var(--resume-accent-primary)' }}>
            Android Studio, Java, OpenCV, E2EE, AES, Alan-AI
          </p>
          <ul className="space-y-1">
            <li className="flex items-start text-lg text-gray-400">
              <span className="  mr-2 mt-0.5" style={{ color: 'var(--resume-accent-primary)' }}>•</span>
              <span>
                Utilized{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>
                  Advanced Encryption Standard (AES)
                </span>{' '}
                algorithm to make chats{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>
                  End-to-End Encrypted (E2EE)
                </span>
                .
              </span>
            </li>
            <li className="flex items-start text-lg text-gray-400">
              <span className="  mr-2 mt-0.5" style={{ color: 'var(--resume-accent-primary)' }}>•</span>
              <span>
                Pioneered an in-app{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>
                  AI Voice Assistant
                </span>{' '}
                allowing users to navigate the app using voice commands, via{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>
                  Alan-AI
                </span>.
              </span>
            </li>
            <li className="flex items-start text-lg text-gray-400">
              <span className="  mr-2 mt-0.5" style={{ color: 'var(--resume-accent-primary)' }}>•</span>
              <span>
                Created{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>
                  Avatar Creator
                </span>{' '}
                using{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>
                  Google ML Kit
                </span>{' '}
                and <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>
                  OpenCV
                </span>{' '}
                for{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>
                  image segmentation
                </span>{' '}
                and cartoonization.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-900 p-4 rounded">
          <div className="flex justify-between items-start">
            <h3 className="text-lg text-gray-200 font-semibold">
              SangeetAI - Emotion-Based Music Recommender
            </h3>
            <div className="flex gap-1">
              <a href="https://github.com/s0oraj/SangeetAI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <ExternalLinkIcon size={8} className="mr-1  " style={{ color: 'var(--resume-accent-primary)' }}/>
                Demo
              </a>
              <a href="https://github.com/s0oraj/SangeetAI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <GithubIcon size={8} className="mr-1  " style={{ color: 'var(--resume-accent-primary)' }} />
                Repo
              </a>
            </div>
          </div>
          <p className="  italic mt-1 mb-2" style={{ color: 'var(--resume-accent-primary)' }}>
            Python, TensorFlow Lite, VGG19, Android Java
          </p>
          <ul className="space-y-1">
            <li className="flex items-start text-lg text-gray-400">
              <span className="  mr-2 mt-0.5" style={{ color: 'var(--resume-accent-primary)' }}>•</span>
              <span>
                Built{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>
                  VGG19 CNN model
                </span>{' '}
                with transfer learning on{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>
                  35K+ FER2013 images
                </span>{' '}
                for 7-class emotion detection, achieving optimized mobile
                inference through{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>
                  TensorFlow Lite conversion
                </span>
                .
              </span>
            </li>
            <li className="flex items-start text-lg text-gray-400">
              <span className="  mr-2 mt-0.5" style={{ color: 'var(--resume-accent-primary)' }}>•</span>
              <span>
                Implemented complete ML pipeline from{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>Kaggle API</span>{' '}
                to Android deployment with augmentation (rotation/flip),
                normalization, and{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>
                  Adam optimizer with early stopping
                </span>
                .
              </span>
            </li>
            <li className="flex items-start text-lg text-gray-400">
              <span className="  mr-2 mt-0.5" style={{ color: 'var(--resume-accent-primary)' }}>•</span>
              <span>
                Developed Android app using{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>CameraView</span>{' '}
                and{' '}
                <span className="font-semibold  " style={{ color: 'var(--resume-accent-primary)' }}>JCPlayer</span>{' '}
                for real-time emotion-based music recommendations.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}