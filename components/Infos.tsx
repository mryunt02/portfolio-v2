import React from 'react';

// Define the types for the props
interface InfosProps {
  title: string;
  description: string;
}

const Infos: React.FC<InfosProps> = ({ title, description }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ borderBottom: '1px solid', marginBottom: '2px' }}>
        {title}
      </h2>
      <p style={{ marginTop: '5px' }}>{description}</p>
    </div>
  );
};

export default Infos;
