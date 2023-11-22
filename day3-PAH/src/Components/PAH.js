import React, { useState } from 'react';

const PAH = () => {
  const [transformationClass, setTransformationClass] = useState('Kaioken');

  const toggleClass = () => {
    setTransformationClass((prevClass) =>
      prevClass === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken'
    );
  };

  return (
    <div className={transformationClass}>
      <h1>Hello, World!</h1>
      <button onClick={toggleClass}>Toggle Class</button>
    </div>
  );
};

export default PAH;
