import React, { useState } from 'react';

function InputWithChips({ title, color }) {
  const [value, autocompleteTrigger] = useState('');
  const [suggestions, suggestionsUpdate] = useState(['a', 'a', 'a', 'a']);
  const [selectedSuggestions, suggestionsList] = useState(['Paris', 'Fortaleza', 'Lisbon']);

  return (
    <div className="question">
      <h6>{title}</h6>
      <input className="autocomplete-input" type="text" onChange={autocompleteTrigger}/>
      {/* <ul className="autocomplete-suggestions">
         {suggestions.map(value => <li key={value}>{value}</li>)}
      </ul> */}
      <div className="chip-area">
        {selectedSuggestions.map(place => <div style={{ backgroundColor: color }} key={place} className="chip">{ place }</div>)}
      </div>
    </div>
  )
}

export default InputWithChips;