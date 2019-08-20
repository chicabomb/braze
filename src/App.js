import React from 'react';
import './App.scss';
import InputDeviceInfo from './components/InputWithChips'
import MultipleOptions from './components/MultipleOptions'

const autocompleteQuestions = [
  {title: "Places that you dream to visit?", color: "#f25f5c"},
  {title: "What is your favorite departure city?", color: "#219bc6"},
]

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Ahoy Capitain!</h1>
          <h3>Save your preferences here</h3>
        </div>
        { autocompleteQuestions.map(({title, color}) => <InputDeviceInfo title={title} key={title} color={color}/>) }
        <MultipleOptions />
      </div>
      <button className="submit">Save my preferences</button>
    </>
  );
}

export default App;
