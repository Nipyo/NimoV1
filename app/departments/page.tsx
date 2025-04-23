'use client'; // Required if using app router

import React from 'react';
import DepartmentCard from '../departments/DepartmentCard';

interface Department {
  name: string;
  description: string;
  image: string;
}

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

function TeamMember({ name, position, image, bio }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <div className="aspect-square">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
}

const Home: React.FC = () => {
  const departments: Department[] = [
    { name: 'Cardiology', description: 'Heart-related treatments and surgeries.', image: '/ECG.png' },
    { name: 'Radiology and Imaging', description: 'Video X-Ray and Ultrasound (USG).', image: '/Carousel3.png' },
    { name: 'ENT-Head', description: 'Ears, Nose and Throat treatments.', image: '/Ent.png' },
    { name: 'Laboratory Medicine and Pathology', description: 'Bio-Chemistry, Hematology and other Pathology tests.', image: '/Carousel2.png' },
  ];

  return (
    <>
      {/* Department Section */}
      <div className="flex justify-center mb-16">
        <div className="flex overflow-x-auto space-x-6 px-4">
          {departments.map((dept, index) => (
            <div key={index} className="flex-shrink-0 w-[300px]">
              <DepartmentCard {...dept} />
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <section className="mb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-primary mb-12 drop-shadow-sm">
            Our Medical Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Dr. Anuj Shrestha"
              position="Orthopaedics, MBBS, Nepal"
              image="/DrAnujshrestha.png"
              bio="Dr. Shrestha has over 20 years of experience in orthopaedics medicine and has specialized in visa medical examinations for the past decade."
            />
            <TeamMember
              name="Dr. Sudhar Prasad Adhikari"
              position="Senior Radiologist and Ultrasonologist"
              image="/DrSudharPrasadAdhikari.png"
              bio="Dr. Adhikari is bilingual in English and Japanese and specializes in internal medicine with extensive experience in immigration medical requirements."
            />
            <TeamMember
              name="HA Rabina Baniya"
              position="Health Assistant"
              image="/placeholder.svg"
              bio="Ms Baniya coordinates our medical examination process and ensures all patients receive attentive and professional care."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
