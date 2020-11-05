import React from "react";

import Routes from "Routes";
import Header from "components/Header";
import NavigationBar from "components/NavigationBar";
import "App.css";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="navigation">
        <NavigationBar />
      </div>
      <div>
        <Routes />
      </div>
    </>
  );
}

export default App;
