import React from 'react';

const Picker = ({options, selected, setSelected, picker, setPicker}) => {
  const prev = () => {
    if(picker > 0) {
      setPicker(picker-1);
    }
  };
  const next = () => {
    if(picker < (Math.floor(options.length)/7)-1) {
      setPicker(picker+1);
    }
  };


  const boxes = options.map((option, index) => {

      return (
        <div key={index}
          style={{
            backgroundImage: `url(${option.pickerImage})`
          }}
          className={`pickerBox ${selected === index ? 'selected' : ''} ${picker === Math.floor(index/7) ? 'visible' : ''}`}
          onClick={() => setSelected(index)}
        >
          <p>{option.name}</p>
        </div>

      );

  });

  return (

    <div className="picker-content">
      <h3>Pick a Color: </h3>
      <div className="picker">
        <div className="btn btn-outline-secondary" onClick={prev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
          </svg>
        </div>
        <div className="picker-items">
          {boxes}
        </div>
        <div className="btn btn-outline-secondary" onClick={next}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Picker;
