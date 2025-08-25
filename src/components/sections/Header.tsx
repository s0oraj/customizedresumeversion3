import React from 'react';
import { AtSignIcon, GithubIcon, LinkedinIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

export function Header() {
  return <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center">
          {/* Cohesity Logo */}
          <div className="mr-4">
            <img src="/pasted-image.png" alt="Cohesity Logo" className="h-10 mb-3" />
          </div>
          <h1 className="text-3xl font-bold text-gray-100 uppercase tracking-wider">
            SURAJ SINGH
          </h1>
        </div>
        <div className="bg-[#5DC22D] text-black px-3 py-1 rounded font-medium text-sm mt-2 md:mt-0">
          SDET Application
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* Contact Information Column */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <PhoneIcon size={14} className="text-[#5DC22D]" />
              <span>+91 8766039312</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <AtSignIcon size={14} className="text-[#5DC22D]" />
              <span>hotmailsuraj@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPinIcon size={14} className="text-[#5DC22D]" />
              <span>Hyderabad, India</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <LinkedinIcon size={14} className="text-[#5DC22D]" />
              <a href="https://linkedin.com/in/s0oraj" target="_blank" rel="noopener noreferrer" className="hover:text-[#5DC22D] transition-colors">
                linkedin.com/in/s0oraj
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <GithubIcon size={14} className="text-[#5DC22D]" />
              <a href="https://github.com/s0oraj" target="_blank" rel="noopener noreferrer" className="hover:text-[#5DC22D] transition-colors">
                github.com/s0oraj
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-3.5 h-3.5 text-[#5DC22D]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.111.744 1.715.744.603 0 1.213-.229 1.714-.744.513-.513.744-1.111.744-1.714 0-.631-.244-1.229-.72-1.714l-2.733-2.637c-.841-.841-1.8-1.412-2.849-1.729-1.1-.331-2.264-.331-3.363 0-1.05.317-2.021.888-2.849 1.729l-4.319 4.402c-.841.84-1.412 1.8-1.729 2.849-.316 1.1-.316 2.264 0 3.363.317 1.049.888 2.009 1.729 2.849l4.332 4.332c.841.841 1.8 1.412 2.849 1.729 1.1.331 2.264.331 3.363 0 1.05-.317 2.021-.888 2.849-1.729l2.733-2.637c.476-.485.72-1.083.72-1.714 0-.603-.244-1.202-.72-1.714-.513-.514-1.111-.744-1.714-.744-.604.013-1.19.231-1.715.744z" />
              </svg>
              <a href="https://leetcode.com/s0oraj" target="_blank" rel="noopener noreferrer" className="hover:text-[#5DC22D] transition-colors">
                leetcode.com/s0oraj
              </a>
            </div>
          </div>
        </div>

{/* Education Column */}
        <div className="bg-gray-900 p-3 rounded">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-200 font-semibold">
                C.V. Raman Global University
              </h3>
              <div className="flex items-center gap-3">
                <p className="text-sm text-gray-400">B.Tech in CS & IT</p>
                <div className="bg-[#5DC22D] text-black text-xs px-2 py-0.5 rounded font-medium">
                  CGPA: 8.5
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[#5DC22D] text-sm">06/2024</span>
              <p className="text-xs text-gray-500 mt-1">Bhubaneshwar, Odisha</p>
            </div>
          </div>
        </div>

      </div>
    </div>;
}