import React, { useState } from 'react';

const fruitOptions = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

const MyForm = () => {
  const [name, setName] = useState('');
  const [selectedFruit, setSelectedFruit] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && selectedFruit) {
      setGreeting(`Hello, ${name}! Your favorite fruit is ${selectedFruit}.`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="name"
            aria-label="Name:"
          />
        </label>
        <br />
        <label>
          Choose a fruit:
          <select
            value={selectedFruit}
            onChange={(e) => setSelectedFruit(e.target.value)}
            data-testid="autocomplete"
            aria-label="Choose a fruit:"
          >
            <option value="">Select</option>
            {fruitOptions.map((fruit) => (
              <option key={fruit} value={fruit} data-testid={`option-${fruit}`}>
                {fruit}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit" data-testid="button">
          Submit
        </button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default MyForm;
