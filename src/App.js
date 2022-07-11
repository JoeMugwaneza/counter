import React from 'react';

import './App.css';
import Counters from "./components/Counters"
import NavBar from "./components/Navbar"
// import { render } from '@testing-library/react';

function App() {
    return (
      <React.Fragment>
          <NavBar />
          <Counters />
        </React.Fragment>
        )

  }

export default App;
