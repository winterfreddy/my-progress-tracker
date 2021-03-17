import './App.css';
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`

const Title = styled.h1`
  font-family: sans-serif;
  color: #b19cd9;
`

const WeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`

class App extends React.Component {
  render() {
    return (
      <>
        <Title>Progress Tracker</Title>
        <div>
          <Section>
            <WeekdayTitle>M</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>T</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>W</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>T</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>F</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>S</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>S</WeekdayTitle>
          </Section>
        </div>
      </>
    );
  }
}

export default App;
