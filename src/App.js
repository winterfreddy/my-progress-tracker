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
          <Section day="M" progress="100%"/>
          <Section day="T" progress="90%"/>
          <Section day="W" progress="80%"/>
          <Section day="T" progress="60%"/>
          <Section day="F" progress="50%"/>
          <Section day="S" progress="30%"/>
          <Section day="S" progress="20%"/>
        </div>
      </>
    );
  }
}

export default App;
