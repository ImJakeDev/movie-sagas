// React imports:
import React from "react";
// App CSS import:
import "./App.css";
// Components Imports
import Layout from "../Layout/Layout";
import Content from "../Content/Content";

// Renders the entire app on the DOM our main App component:
const App = () => {
  return (
    <div className="App">
      <Layout>
        <Content />
      </Layout>
    </div>
  );
};

export default App;
