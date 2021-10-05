import React from "react";
import "./styles.scss";
import "./typography";

const App = () => {
  console.log("App");

  return (
    <div className="container">
      <h3 className="title">📦 Parcel</h3>
      <h4 className="subtitle">Blazing fast, zero configuration web application bundler</h4>
      <h5 className="content"></h5>
    </div>
  );
};

export default App;
