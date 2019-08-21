import React, { useState } from 'react';
import styled from 'styled-components'
import i18n from "i18next";

const H1 = styled.h1`
  color: #222222;
`;

const H3 = styled.h3`
  color: #666666;
`;

const H6 = styled.h6`
  color: #222222;
  margin:auto 16px 10px;
  font-size: 14px;
`;

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:600,700&display=swap');
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #666666;
  margin-bottom: 10px;
  padding-bottom: 100px;
  background-color: white;
  > * {
    margin: -10px;
    padding: 8px;
  }
`;

const ChipWrapper = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Chip = styled.label`
  padding: 8px 16px;
  border-radius: 40px;
  margin: 10px;
  margin-left: 0;
  white-space: nowrap;
`;

const Checkbox = styled.input`
  appearance: none;
  margin: 0;
  width: 0;
  background-color: none;
  &:before {
    padding: 8px 0;
    border-radius: 40px;
    margin: 10px;
    margin-left: 0;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  background-color: #6a3460;
  border: none;
  color: white;
  font-size: 16px;
  height: 70px;
  margin-top: 10px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
`;

const Suggestions = styled.ul`
  background-color: #f5f5f5;
  border-radius: 0 0 8px 8px;
  margin: -8px auto auto;
  padding-bottom: 8px;
  > * {
    list-style: none;
  }
`;

const Input = styled.input`
  background-color: #f5f5f5;
  font-size: 14px;
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 8px;
  padding-left: 16px;
`;

const Header = styled.div`
  margin: 30px auto;
  position: relative;
  > * {
    margin: 0;
  }
`;

const Close = styled.a`
  position: absolute;
  right: 0;
  color: black;
  text-decoration: none;
  padding: 0 10px;
  border-radius: 20px;
  background-color: #f5f5f5;
  font-size: 24px;
`;
function App() {
  const [origin, autocompleteOriginTrigger] = useState('');
  const [originaSuggestions, originsUpdate] = useState([]);
  const [selectedOrigins, originsList] = useState(['Paris', 'Fortaleza', 'Lisbon']);

  const [destination, autocompleteDestinationTrigger] = useState('');
  const [destinationSuggestions, destinationsUpdate] = useState(['a', 'b', 'c']);
  const [selectedDestinations, destinationsList] = useState(['Paris', 'Fortaleza', 'Lisbon']);

  const [vacations, setVacation] = useState([
    ['Wellness', false],
    ['City trip', false],
    ['Vacation by the sea', false],
    ['Acativity vacations', false],
    ['Luxury vacations', false],
    ['Flights only', false]
  ]);

  const [budget, setBudget] = useState(0);

  const submit = () => {
    console.log(`The selected origins are ${selectedOrigins.map(el => el)}`);
    console.log(`The selected destinations are ${selectedDestinations.map(el => el)}`);
    console.log(`The selected preferences are ${vacations.filter(el => el[1] === true).map(el => el[0])}`);
    console.log(`The selected budget is ${budget}`);
    window.location = 'appboy://close';
  };

  const autocomplete = async (value) => {
    if ( value.length > 1 ) {
      const results = await fetch(`https://${i18n.t('AUTOCOMPLETE_URL')}/location/public?name=${value}`);
      console.log(results);
    }
  };

  return (
    <>
      <Container>
        <Header>
          <Close href='appboy://close'>&times;</Close>
          <H1>{i18n.t('AHOY')}</H1>
          <H3>{i18n.t('SAVE_PREFERENCES')}</H3>
        </Header>
        <div>
          <H6>{i18n.t('LABEL.DESTINATIONS')}</H6>
          <Input
            placeholder={i18n.t('LABEL.DESTINATIONS_PLACEHOLDER')}
            type="text"
            onChange={e => autocomplete(e.target.value)}/>
         <Suggestions>
            {originaSuggestions.map(value => <li key={value}>{value}</li>)}
          </Suggestions>
          <ChipWrapper>
            {selectedOrigins.map(place => <Chip style={{ backgroundColor: '#f25f5c' }} key={place} className="chip">{ place }</Chip>)}
          </ChipWrapper>
        </div>
        <div>
          <H6>{i18n.t('LABEL.ORIGINS')}</H6>
          <Input
            placeholder={i18n.t('LABEL.ORIGINS_PLACEHOLDER')}
            type="text"
            onChange={e => autocompleteOriginTrigger(e.target.value)}/>
          <Suggestions>
            {destinationSuggestions.map(value => <li key={value}>{value}</li>)}
          </Suggestions>
          <ChipWrapper>
            {selectedDestinations.map(place => <Chip style={{ backgroundColor:'#219bc6' }} key={place} className="chip">{ place }</Chip>)}
          </ChipWrapper>
        </div>
        <div>
          <H6>{i18n.t('LABEL.INTERESTS')}</H6>
          <ChipWrapper>
            {vacations.map((val, index) => (
              <Chip
                key={ val[0] }
                style={{ backgroundColor: val[1] ? "#70b62c" : "#cccccc" }}>
                { val[0] }
                <Checkbox
                type="checkbox"
                onClick={() => setVacation(vacations.map((e, i) => e === val ? [e[0], !val[1]] : e ))}/>
              </Chip>
            ))}
          </ChipWrapper>
        </div>
        <div>
          <H6>{i18n.t('LABEL.BUDGET')}</H6>
          <Input
            type="number"
            placeholder={i18n.t('LABEL.BUDGET_PLACEHOLDER')}
            onChange={e => setBudget(e.target.value)}/>
        </div>
      </Container>
      <Button onClick={submit}>{i18n.t('SAVE')}</Button>
    </>
  );
}

export default App;
