import './App.css';
import React from 'react';
import styled from 'styled-components';
import Section from './components/Section';

const Title = styled.h1`
  font-family: sans-serif;
  color: #b19cd9;
`

class App extends React.Component {
  render() {
    return (
      <>
        <Title>Progress Tracker</Title>
        <div>
          <Section day="M" />
          <Section day="T" />
          <Section day="W" />
          <Section day="T" />
          <Section day="F" />
          <Section day="S" />
          <Section day="S" />
        </div>
      </>
    );
  }
}

export default App;
