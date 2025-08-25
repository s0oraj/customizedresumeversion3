import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
export function Experience() {
  const experiences = [{
    company: 'Wipro Technologies',
    position: 'Data Engineer L2 - Top 4 BFSI Client',
    period: '03/2025 - Present',
    location: 'Hyderabad',
    points: ['Building <span class="font-semibold text-[#5DC22D]">distributed systems</span> for processing <span class="font-semibold text-[#5DC22D]">multi-terabyte datasets</span> through <span class="font-semibold text-[#5DC22D]">Genesis DataMart</span>, handling data flows from PP files through NGL/DRI processes to holding layers', 'Optimizing PySpark <span class="font-semibold text-[#5DC22D]">Directed Acyclic Graph (DAG)</span> execution using <span class="font-semibold text-[#5DC22D]">topological sorting algorithms</span> for <span class="font-semibold text-[#5DC22D]">SUBGL processes</span> and <span class="font-semibold text-[#5DC22D]">backfeed mechanisms</span> with STR/SRU components', 'Implementing <span class="font-semibold text-[#5DC22D]">SQL/Hive partitioning strategies</span> for banking data across dual holding layers and BSS file processing', 'Processing <span class="font-semibold text-[#5DC22D]">multi-stream PP-SGL reconciliation</span> via <span class="font-semibold text-[#5DC22D]">BTEQ scripts</span> and <span class="font-semibold text-[#5DC22D]">STDDEF processes</span> with <span class="font-semibold text-[#5DC22D]">Teradata</span>', 'Developing <span class="font-semibold text-[#5DC22D]">pipelines</span> with <span class="font-semibold text-[#5DC22D]">checkpoint mechanisms</span> for downstream GLRS, IFRS9, Y9C, RUBY integration']
  }, {
    company: 'Roboslog Pvt Ltd',
    position: 'Software Developer Intern (Java)',
    period: '06/2022 - 08/2022',
    location: 'Delhi, NCR',
    points: ['Developed Agent-Driver Android apps with <span class="font-semibold text-[#5DC22D]">Firebase Cloud Messaging</span> for live order notifications and <span class="font-semibold text-[#5DC22D]">MapBox location tracking</span> for real-time delivery monitoring', 'Designed and implemented <span class="font-semibold text-[#5DC22D]">REST API integration</span> using <span class="font-semibold text-[#5DC22D]">Retrofit</span> for authentication and data management', 'Integrated <span class="font-semibold text-[#5DC22D]">Razorpay, PayPal, PayU</span> with commission split: <span class="font-semibold text-[#5DC22D]">60% driver, 18% sender-receiver, 4% admin</span>', 'Built a <span class="font-semibold text-[#5DC22D]">wallet UI</span> to display balance storage and track goods transactions, using <span class="font-semibold text-[#5DC22D]">XML and Jetpack Compose</span>']
  }];
  return <div>
      <SectionTitle>Experience</SectionTitle>
      <div className="space-y-4 mt-3">
        {experiences.map((exp, index) => <div key={index} className="bg-gray-900 p-4 rounded">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg text-lg text-gray-200 font-semibold">{exp.company}</h3>
              <span className="text-[#5DC22D] text-sm">{exp.period}</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm text-lg text-lg text-gray-300">{exp.position}</p>
              <div className="flex items-center text-lg text-lg text-gray-400">
                <MapPinIcon size={12} className="mr-1" />
                <span>{exp.location}</span>
              </div>
            </div>
            <ul className="space-y-1 mt-2">
              {exp.points.map((point, idx) => <li key={idx} className="flex items-start text-lg text-lg text-gray-400">
                  <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
                  <span dangerouslySetInnerHTML={{
              __html: point
            }}></span>
                </li>)}
            </ul>
          </div>)}
      </div>
    </div>;
}