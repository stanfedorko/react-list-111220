import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Comparator from './comparator.js';
// import CreditCapacity from './creditcapacity.js';

// function Home(){
//   return (
//     <div />
//   );
// }

function App() {
  return (
    <Comparator/>
    // <Router>
    //   <Route path="/" component={Home} />
    //   <Route path="/capacite-emprunt" component={CreditCapacity} />
    //   <Route
    //     path="/comparateur/:type"
    //     component={Comparator}
    //   />
    // </Router>
  );
}

export default App;
