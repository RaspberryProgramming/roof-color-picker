import React from 'react';
import './App.css';

const Picker = ({options, selected, setSelected}) => {

  const boxes = options.map((option, index) => {

      return (
        <div key={option.name}
          style={{
            backgroundImage: `url(${option.pickerImage})`
          }}
          className={`pickerBox ${selected === index ? 'selected' : ''}`}
          onClick={() => setSelected(index)}
        >
          <p>{option.name}</p>
        </div>

      );

  });

  return (
    <div className="picker">
      {boxes}
    </div>
  );
};

export default Picker;
