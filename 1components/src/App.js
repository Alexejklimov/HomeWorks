import React from 'react';

import './App.css';
import Tovar from "./components/tovar"
import Kino from "./components/Film"
function App() {
  return (
    <div className="App">
      <Tovar title="vine" tovarProp={["Tsinandali", "250", "3650+", "6.5"]} />
      <Tovar title="vine" tovarProp={["Mukuzani", "270", "3650+", "5"]} />
      <hr />
      <Kino time1="11:00" time2="13:00" time3="15:30" time1="19:45" />

    </div >
  );
}

export default App;
