import React from 'react';

interface DepartmentCardProps {
  name: string;
  description: string;
  image: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ name, description, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded mb-4" />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default DepartmentCard;
