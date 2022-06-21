import React from 'react';
import Header from '../src/components/Header';
import SolarSystem from '../src/components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
      </>
    );
  }
}

export default App;
