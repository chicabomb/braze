import React, { useState } from 'react';



function MultipleOptions({ title, options }) {
  let color = '#70b62c';

  return (
    <div className="question">
      <h6>{title}</h6>
      <div className="chip-area">
        {options.map(({ label, selected }) => (
          <div style={{ backgroundColor: selected ? '#70b62c' : '#cccccc' }} key={ label } className="chip">{ label }</div>
        ))}
      </div>
    </div>
  )
}

export default MultipleOptions;