import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddVehicle from "./components/AddVehicle";
import VehicleList from "./components/VehiclesList";
function App() {
  return (
    <>
      <div>
        <Router>
          <Route exact path="/" component={AddVehicle} />
          <Route path="/list" component={VehicleList} />
        </Router>
      </div>
    </>
  );
}

export default App;
