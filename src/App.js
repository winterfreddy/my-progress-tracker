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
          <Section day="M" progress="100%" d={1}/>
          <Section day="T" progress="90%" d={2}/>
          <Section day="W" progress="80%" d={3}/>
          <Section day="T" progress="60%" d={4}/>
          <Section day="F" progress="50%" d={5}/>
          <Section day="S" progress="30%" d={6}/>
          <Section day="S" progress="20%" d={7}/>
        </div>
      </>
    );
  }
}

export default App;
